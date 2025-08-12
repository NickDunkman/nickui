import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldableFormControlProps } from '@/types';
import { useFieldControlA11yProps } from '@/utils/fieldA11y';
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
  // The rest are brought in from <select>
  id: controlledId,
  'aria-label': controlledAriaLabel,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': controlledAriaInvalid,
  ...otherSelectProps
}: SelectProps) {
  const a11yProps = useFieldControlA11yProps({
    label,
    hint,
    error,
    controlledId,
    controlledAriaLabel,
    controlledAriaLabelledBy,
    controlledAriaDescribedBy,
    controlledAriaErrorMessage,
    controlledAriaInvalid,
  });

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = selectStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    isDisabled: !!disabled,
  });

  return (
    <Field
      {...a11yProps.field}
      className={className}
      sizer={sizer}
      label={label}
      hint={hint}
      error={error !== true ? error : undefined}
      required={required}
      data-nickui-component="Select"
    >
      <div className={styles.root()}>
        <select
          {...otherSelectProps}
          {...a11yProps.formControl}
          className={styles.select()}
          disabled={disabled}
          required={required}
        />
      </div>
    </Field>
  );
}
