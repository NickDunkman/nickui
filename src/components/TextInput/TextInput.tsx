import * as React from 'react';

import { FieldSizer } from '@/constants';

import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';

import { FieldControl } from '@/components/FieldControl/FieldControl';
import { FieldLayout } from '@/components/FieldLayout';

import { styles } from './styles';

interface PureTextInputProps extends React.ComponentProps<'input'> {
  /** Prevents the user from interacting with the TextInput */
  disabled?: boolean;
  /** Called when the value of the TextInput changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * A string that contains a brief hint to the user as to what information is
   * expected in the field.
   */
  placeholder?: string;
  /**
   * The type of input to use (only textual types are allowed with TextInput).
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
   * Sets the value of the TextInput when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string;
  /**
   * Sets the value of the TextInput when using it as an _uncontrolled_
   * component
   */
  defaultValue?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
}

/**
 * TextInput allows users to enter & edit text.
 * @param props {@link PureTextInputProps}
 */
export function PureTextInput({
  className,
  disabled = false,
  type = 'text',
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  sizer = FieldSizer.small,
  ...inputProps
}: PureTextInputProps) {
  const s = styles({ sizer, hasError: !!ariaErrorMessage });

  return (
    <input
      {...inputProps}
      type={type}
      disabled={disabled}
      className={clsw(s, className)}
      aria-errormessage={ariaErrorMessage}
      // To have a fully accessible error state, the `aria-invalid` attribute on
      // the <select> needs to be `true` when there is an error. So when that
      // prop is not provided, set it based on whether there is an error state
      // or not.
      aria-invalid={
        ariaInvalid !== undefined ? ariaInvalid : !!ariaErrorMessage
      }
    />
  );
}

type TextInputProps = PureTextInputProps &
  React.ComponentProps<typeof FieldControl>;

/**
 * @description TextInput allows users to enter & edit text.
 * @param props {@link TextInputProps}
 */
export function TextInput({
  className,
  sizer = FieldSizer.small,
  label,
  explainer,
  hint,
  error,
  required,
  id: controlledId,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  ...otherPureTextInputProps
}: TextInputProps) {
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
    (error ? uncontrolledAriaErrorMessage : undefined);

  return (
    <FieldLayout
      className={className}
      sizer={sizer}
      label={label}
      explainer={explainer}
      hint={hint}
      hintId={ariaDescribedBy}
      error={error}
      controlId={id}
      errorId={ariaErrorMessage}
      required={required}
    >
      <PureTextInput
        id={id}
        sizer={sizer}
        required={required}
        aria-describedby={ariaDescribedBy}
        aria-errormessage={ariaErrorMessage}
        {...otherPureTextInputProps}
      />
    </FieldLayout>
  );
}

TextInput.sizer = FieldSizer;
