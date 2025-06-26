import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldSizer } from '@/constants';
import type { FieldControlProps } from '@/types';
import { randomId } from '@/utils/randomId';

import { styles } from './styles';

interface SelectProps extends React.ComponentProps<'select'> {
  /** Called when the value of the Select changes */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Sets the value of the Select when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/select#controlling-a-select-box-with-a-state-variable)
   */
  value?: string;
  /** Sets the value of the Select when using it as an uncontrolled component */
  defaultValue?: string;
}

/**
 * A form control that allows users to choose an option using a menu
 * @param props {@link SelectProps} + {@link FieldControlProps}
 */
export function Select({
  // Field props
  className,
  sizer,
  label,
  explainer,
  hint,
  error,
  disabled,
  required,
  // Select-specific props
  id: controlledId,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <select>
  ...otherSelectProps
}: SelectProps & FieldControlProps) {
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

  const s = styles({
    sizer,
    hasError: !!error,
    isDisabled: !!disabled,
  });

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
        <select
          {...otherSelectProps}
          id={id}
          className={s.select()}
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

Select.sizer = FieldSizer;
