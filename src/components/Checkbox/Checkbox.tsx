import * as React from 'react';

import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';

import { styles } from './styles';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  /** Add utility classes */
  className?: string;
  /**
   * Sets the checked state of the Checkbox when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  checked?: boolean;
  /**
   * Sets the checked state of the Checkbox when using it as a uncontrolled
   * component
   */
  defaultChecked?: boolean;
  /** Prevents the user from interacting with the Checkbox */
  disabled?: boolean;
  /** Adds a label to the right of the checkbox */
  label?: React.ReactNode;
  /** Called when the checked state changes  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
}

/**
 * Checkboxes allow users to choose zero to many options from a set.
 * @param props {@link CheckboxProps}
 */
export function Checkbox({
  className,
  label,
  disabled = false,
  sizer = FieldSizer.small,
  ...inputProps
}: CheckboxProps) {
  const s = styles({ sizer, isDisabled: disabled });

  return (
    <label className={clsw(s.root(), className)}>
      <input
        type="checkbox"
        className={s.input()}
        disabled={disabled}
        {...inputProps}
      />
      <span className={s.indicator()} />
      <span className={s.label()}>{label}</span>
    </label>
  );
}

Checkbox.sizer = FieldSizer;
