import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldableProps } from '@/types';
import { useFieldA11yIds } from '@/utils/useFieldA11yIds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { textStyler } from './styles';

/**
 * These are all of the "textual" <input> types. For example, type="checkbox"
 * is not textual, so we don’t want the <Text> component to accept it.
 */
export const ALLOWED_TYPES = [
  'date',
  'datetime',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

export interface TextProps
  extends React.ComponentProps<'input'>,
    FieldableProps {
  /** Called when the value of the Text changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * A string that contains a brief hint to the user as to what information is
   * expected in the field.
   */
  placeholder?: string;
  /**
   * The input type to use (only textual types are allowed with Text).
   * See
   * [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
   * for more details
   */
  type?: (typeof ALLOWED_TYPES)[number];
  /**
   * Sets the value of the Text when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string;
  /** Sets the value of the Text when using it as an uncontrolled component */
  defaultValue?: string;
}

/**
 * A form control that allows users to enter & edit a single line of text
 * @param props {@link TextProps}
 */
export function Text({
  // Field props
  className,
  sizer,
  label,
  hint,
  error,
  required,
  disabled,
  // Text-specific props
  id: controlledId,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <input>
  ...otherInputProps
}: TextProps) {
  const a11yIds = useFieldA11yIds({
    label,
    hint,
    error,
    controlledId,
    controlledAriaLabelledBy,
    controlledAriaDescribedBy,
    controlledAriaErrorMessage,
  });

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = textStyler({ sizer: resolvedSizer, hasError: !!error });

  return (
    <Field
      className={className}
      sizer={sizer}
      label={label}
      labelId={a11yIds.ariaLabelledBy}
      controlId={a11yIds.id}
      hint={hint}
      hintId={a11yIds.ariaDescribedBy}
      error={error !== true ? error : undefined}
      errorId={a11yIds.ariaErrorMessage}
      disabled={disabled}
      required={required}
      data-nickui-component="Text"
    >
      <input
        {...otherInputProps}
        id={a11yIds.id}
        className={styles}
        disabled={disabled}
        required={required}
        aria-labelledby={a11yIds.ariaLabelledBy}
        aria-describedby={a11yIds.ariaDescribedBy}
        aria-errormessage={a11yIds.ariaErrorMessage}
        aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
      />
    </Field>
  );
}
