import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldControl } from '@/components/FieldControl';
import { FieldSizer } from '@/constants';
import { randomId } from '@/utils/randomId';

import { styles } from './styles';

interface TextProps extends React.ComponentProps<'input'> {
  /** Prevents the user from interacting with the Text */
  disabled?: boolean;
  /** Called when the value of the Text changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  type?:
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  /**
   * Sets the value of the Text when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string;
  /**
   * Sets the value of the Text when using it as an uncontrolled component
   */
  defaultValue?: string;
}

/**
 * Text allows users to enter & edit text.
 * @param props {@link TextProps}
 */
export function Text({
  className,
  sizer,
  label,
  explainer,
  hint,
  error,
  required,
  id: controlledId,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  ...otherInputProps
}: TextProps & React.ComponentProps<typeof FieldControl>) {
  // Generate some ids for accessibility, in case they aren't provided as props
  const [uncontrolledId] = React.useState(randomId());
  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const [uncontrolledAriaErrorMessage] = React.useState(randomId());

  // To make the label/hint/error accessible, create some IDs to use for
  // associating the input with those elements. Use the IDs specified via
  // props if they are provided, otherwise use some auto-generated IDs. Note:
  // don't use auto-generated IDs unless the associated content exists (e.g.
  // don't specify an aria-describedby on the input unless there is hint
  // content).
  const id = controlledId || (label ? uncontrolledId : undefined);
  const ariaDescribedBy =
    controlledAriaDescribedBy ||
    (hint ? uncontrolledAriaDescribedBy : undefined);
  const ariaErrorMessage =
    controlledAriaErrorMessage ||
    (error && error !== true ? uncontrolledAriaErrorMessage : undefined);

  const s = styles({ sizer, hasError: !!error });

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
      required={required}
    >
      <input
        {...otherInputProps}
        id={id}
        className={s}
        required={required}
        aria-describedby={ariaDescribedBy}
        aria-errormessage={ariaErrorMessage}
        aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
      />
    </Field>
  );
}

Text.sizer = FieldSizer;
