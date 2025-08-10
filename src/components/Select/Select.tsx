import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldableFormControlProps } from '@/types';
import { useFieldA11yIds } from '@/utils/useFieldA11yIds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { selectStyler } from './styles';

export type SelectProps = FieldableFormControlProps<string, 'select'>;

/**
 * A form control that allows users to choose an option using a menu
 * @param props {@link SelectProps}
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
}: SelectProps) {
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
