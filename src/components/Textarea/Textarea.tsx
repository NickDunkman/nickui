import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldSizer } from '@/constants';
import type { CommonFieldProps } from '@/types';
import { randomId } from '@/utils/randomId';

import { styles } from './styles';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  /**
   * Sets the value of the Textarea when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)
   */
  value?: string;
  /**
   * Sets the value of the Textarea when using it as an uncontrolled component
   */
  defaultValue?: string;
  /**
   * The number of rows of text tall the Textarea should be (the Textarea will
   * use a scrollbar when necessary)
   */
  rows?: number;
  /**
   * The textarea will automatically grow in height as the user types, up to
   * this number of rows.
   */
  maxRows?: number;
  /** Set to `true` to remove the resize handle from the bottom right */
  disableManualResize?: boolean;
  /** Called when the value of the Textarea changes */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * A string that contains a brief hint to the user as to what information is
   * expected in the field.
   */
  placeholder?: string;
}

/**
 * A form control that allows users to enter & edit a mass of text
 * @param props {@link TextareaProps} + {@link CommonFieldProps}
 */
export function Textarea({
  // Field props
  className,
  sizer,
  label,
  explainer,
  hint,
  error,
  disabled,
  required,
  // Textarea-specific props
  id: controlledId,
  defaultValue,
  value: controlledValue,
  onChange,
  rows = 2,
  maxRows = 10,
  disableManualResize,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <textarea>
  ...otherTextareaProps
}: TextareaProps & CommonFieldProps) {
  const hiddenTextarea = React.useRef<HTMLTextAreaElement>(null);
  const [autoHeight, setAutoHeight] = React.useState<number>(0);

  // track a value for *uncontrolled* mode, if necessary
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);
  const isControlledComponent = controlledValue !== undefined;
  const value = isControlledComponent ? controlledValue : uncontrolledValue;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!isControlledComponent) {
      setUncontrolledValue(event.target.value);
    }
    onChange?.(event);
  }

  // Compute the height to use when autoResize applies
  React.useLayoutEffect(() => {
    if (maxRows > rows && hiddenTextarea.current) {
      // Measure the height of the hidden textarea with the new value
      hiddenTextarea.current.value = value || '';
      const computedStyle = getComputedStyle(hiddenTextarea.current);
      const lineHeight = noPx(computedStyle.lineHeight);
      const yPadding =
        noPx(computedStyle.paddingTop) + noPx(computedStyle.paddingBottom);
      const yBorderHeight =
        noPx(computedStyle.borderTopWidth) +
        noPx(computedStyle.borderBottomWidth);
      const newAutoHeight = hiddenTextarea.current.scrollHeight + yBorderHeight;

      // Constraints for the visible textarea
      const minHeight = rows * lineHeight + yPadding + yBorderHeight;
      const maxHeight = maxRows * lineHeight + yPadding + yBorderHeight;

      if (newAutoHeight > maxHeight) {
        if (autoHeight !== maxHeight) {
          setAutoHeight(maxHeight);
        }
      } else if (newAutoHeight < minHeight) {
        if (autoHeight !== minHeight) {
          setAutoHeight(minHeight);
        }
      } else if (autoHeight !== newAutoHeight) {
        setAutoHeight(newAutoHeight);
      }
    }
  }, [value, rows, maxRows, autoHeight]);

  const [uncontrolledId] = React.useState(randomId());
  const id = controlledId || (label ? uncontrolledId : undefined);

  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const ariaDescribedBy =
    controlledAriaDescribedBy ||
    (hint ? uncontrolledAriaDescribedBy : undefined);

  const [uncontrolledAriaErrorMessage] = React.useState(randomId());
  const ariaErrorMessage =
    controlledAriaErrorMessage ||
    (error && error !== true ? uncontrolledAriaErrorMessage : undefined);

  const heightProps =
    maxRows > rows ? { style: { height: autoHeight } } : { rows };
  const s = styles({ sizer, hasError: !!error, disableManualResize });

  return (
    <Field
      className={className}
      sizer={sizer}
      label={label}
      explainer={explainer}
      hint={hint}
      hintId={ariaDescribedBy}
      error={error !== true ? error : undefined}
      controlId={id}
      errorId={ariaErrorMessage}
      disabled={disabled}
      required={required}
    >
      <div className={s.root()}>
        {/*
          This <textarea> is hidden & used to calculate how tall the other
          textarea should be if it wants to make the value fully visible.
        */}
        <textarea
          aria-hidden
          disabled
          ref={hiddenTextarea}
          className={s.hiddenTextarea()}
        />

        {/* This is the <textarea> the user sees & interacts with! */}
        <textarea
          {...otherTextareaProps}
          {...heightProps}
          id={id}
          className={s.textarea()}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
        />
      </div>
    </Field>
  );
}

Textarea.sizer = FieldSizer;

/** Converts a px string to a number (e.g. "20px" -> 20) */
function noPx(px: string): number {
  return Number(px.slice(0, -2));
}
