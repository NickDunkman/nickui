import * as React from 'react';

import { Field } from '@/components/Field';
import { Sizer } from '@/constants';
import type { CommonFieldProps } from '@/types';
import { randomId } from '@/utils/randomId';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { textareaStyler } from './styles';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  /**
   * Sets the value of the TextArea when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)
   */
  value?: string;
  /**
   * Sets the value of the TextArea when using it as an uncontrolled component
   */
  defaultValue?: string;
  /**
   * Use this to set a fixed number of visible rows on the TextArea. Causes
   * the `minRows` & `maxRows` props to be ignored.
   */
  rows?: number;
  /**
   * When the `rows` prop is not used, sets the minimum rows used by the
   * auto-resizing TextArea as its value changes. Default is 2.
   */
  minRows?: number;
  /**
   * When the `rows` prop is not used, sets the maximum rows used by the
   * auto-resizing TextArea as its value changes. Default is 10.
   */
  maxRows?: number;
  /** Set to `true` to remove the resize handle from the bottom right */
  disableManualResize?: boolean;
  /** Called when the value of the TextArea changes */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * A string that contains a brief hint to the user as to what information is
   * expected in the field.
   */
  placeholder?: string;
}

/**
 * A form control that allows users to enter & edit a mass of text
 * @param props {@link TextAreaProps} + {@link CommonFieldProps}
 */
export function TextArea({
  // Field props
  className,
  sizer,
  label,
  hint,
  error,
  disabled,
  required,
  // TextArea-specific props
  id: controlledId,
  defaultValue,
  value: controlledValue,
  onChange,
  rows: controlledRows,
  minRows = 2,
  maxRows = 10,
  disableManualResize,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <textarea>
  ...otherTextAreaProps
}: TextAreaProps & CommonFieldProps) {
  const containerRef = React.createRef<HTMLDivElement>();
  const hiddenTextArea = React.useRef<HTMLTextAreaElement>(null);
  const [autoRows, setAutoRows] = React.useState<number>(0);

  const rows =
    controlledRows !== undefined
      ? controlledRows
      : autoRows > minRows
        ? autoRows
        : minRows;

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
    if (hiddenTextArea.current) {
      // Measure the number of rows of the hidden textarea with the new value
      hiddenTextArea.current.value = value || '';
      const computedStyle = getComputedStyle(hiddenTextArea.current);
      const lineHeight = noPx(computedStyle.lineHeight);
      const yPadding =
        noPx(computedStyle.paddingTop) + noPx(computedStyle.paddingBottom);
      const newAutoRows = Math.ceil(
        (hiddenTextArea.current.scrollHeight - yPadding) / lineHeight,
      );

      const newBoundedAutoRows =
        newAutoRows < minRows
          ? minRows
          : newAutoRows > maxRows
            ? maxRows
            : newAutoRows;

      if (newBoundedAutoRows !== autoRows) {
        setAutoRows(newBoundedAutoRows);
      }
    }
  }, [value, minRows, maxRows, autoRows]);

  // React Hook Form sets the inital field value by using the `ref` prop to
  // programmatically set the `value` on the textarea. So when the caller isn't
  // using the `value` or `defaultValue` props, we should inspect the textarea,
  // and if something has magically set its value, use that as the defaultValue
  // for this component -- allowing the textarea to set its initial auto height.
  React.useLayoutEffect(() => {
    if (controlledValue === undefined && defaultValue === undefined) {
      const interativeTextArea = getInteractiveTextArea(containerRef);
      if (interativeTextArea.value) {
        setUncontrolledValue(interativeTextArea.value);
      }
    }
    // We only want to run this effect once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = textareaStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    disableManualResize,
  });

  return (
    <Field
      className={className}
      sizer={sizer}
      label={label}
      controlId={id}
      hint={hint}
      hintId={ariaDescribedBy}
      error={error !== true ? error : undefined}
      errorId={ariaErrorMessage}
      disabled={disabled}
      required={required}
    >
      <div ref={containerRef} className={styles.root()}>
        {/*
          This <textarea> is hidden & used to calculate how tall the other
          textarea should be if it wants to make the value fully visible.
        */}
        <textarea
          ref={hiddenTextArea}
          className={styles.hiddenTextArea()}
          rows={minRows}
          disabled
          aria-hidden
        />

        {/* This is the <textarea> the user sees & interacts with! */}
        <textarea
          {...otherTextAreaProps}
          id={id}
          className={styles.textarea()}
          rows={rows}
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

TextArea.sizer = Sizer;

/** Converts a px string to a number (e.g. "20px" -> 20) */
function noPx(px: string): number {
  return Number(px.slice(0, -2));
}

function getInteractiveTextArea(
  container: React.RefObject<HTMLElement | null>,
) {
  return [
    ...(container.current?.getElementsByTagName('textarea') || []),
  ][1] as HTMLTextAreaElement;
}
