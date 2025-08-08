import * as React from 'react';

import { Field } from '@/components/Field';
import type { CommonFieldProps } from '@/types';
import { useFieldA11yIds } from '@/utils/useFieldA11yIds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { selectStyler } from './styles';

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
 * @param props {@link SelectProps} + {@link CommonFieldProps}
 */
export function Select({
  // Field props
  className,
  sizer,
  label,
  hint,
  error,
  disabled,
  required,
  // Select-specific props
  id: controlledId,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <select>
  ...otherSelectProps
}: SelectProps & CommonFieldProps) {
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
  const styles = selectStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    isDisabled: !!disabled,
  });

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
      data-nickui-component="Select"
    >
      <div className={styles.root()}>
        <select
          {...otherSelectProps}
          id={a11yIds.id}
          className={styles.select()}
          disabled={disabled}
          required={required}
          aria-labelledby={a11yIds.ariaLabelledBy}
          aria-describedby={a11yIds.ariaDescribedBy}
          aria-errormessage={a11yIds.ariaErrorMessage}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
        />
      </div>
    </Field>
  );
}
