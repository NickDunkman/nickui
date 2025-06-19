import * as React from 'react';

import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';

import { styles } from './styles';

interface RadioProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  /** Adds a label to the right of the Radio */
  children?: React.ReactNode;
  /** Add utility classes */
  className?: string;
  /**
   * Sets the checked state of the Radio when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  checked?: boolean;
  /**
   * Sets the checked state of the Radio when using it as a uncontrolled
   * component
   */
  defaultChecked?: boolean;
  /** Prevents the user from interacting with the Radio */
  disabled?: boolean;
  /** Called when the checked state changes  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
}

/**
 * Radios allow users to choose one option from a set.
 * @param props {@link RadioProps}
 */
export function Radio({
  children,
  className,
  disabled = false,
  sizer,
  ...inputProps
}: RadioProps) {
  const s = styles({ sizer, isDisabled: disabled });

  return (
    <label className={clsw(s.root(), className)}>
      <input
        type="radio"
        className={s.input()}
        disabled={disabled}
        {...inputProps}
      />
      <span className={s.indicator()} />
      <span className={s.label()}>{children}</span>
    </label>
  );
}

Radio.sizer = FieldSizer;
