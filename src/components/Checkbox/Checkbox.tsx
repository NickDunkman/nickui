import * as React from 'react';

import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';

import { styles } from './styles';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  /** Adds a label to the right of the checkbox */
  children?: React.ReactNode;
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
  children,
  className,
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
      {/*
        This empty element exists to create an extra flex-gap between the
        absolutely-positioned indicator & the label. It contains a zero-width
        character so that it doesn’t affect vertical alignment, such as when
        the Checkbox is inside a `flex items-baseline` parent.
      */}
      <span>&#8203;</span>
      {children && <span className={s.label()}>{children}</span>}
    </label>
  );
}

Checkbox.sizer = FieldSizer;
