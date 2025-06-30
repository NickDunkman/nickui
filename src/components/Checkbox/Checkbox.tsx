import * as React from 'react';

import { CheckedField } from '@/components/CheckedField';
import { FieldSizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';

import { styles } from './styles';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type'> {
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
  /** Called when the checked state changes  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A form control that allow users to choose zero to many options from a set
 * @param props {@link CheckboxProps} {@link CommonCheckedFieldProps}
 */
export function Checkbox({
  // CheckedField props
  className,
  sizer,
  label,
  explainer,
  disabled,
  // Checkbox-specific props
  ...inputProps
}: CheckboxProps & CommonCheckedFieldProps) {
  const indicatorRef = React.useRef<HTMLDivElement>(null);
  const s = styles({ sizer });

  return (
    <CheckedField
      className={className}
      label={label}
      explainer={explainer}
      controlVisualRef={indicatorRef}
      sizer={sizer}
      disabled={disabled}
    >
      <input
        type="checkbox"
        className={s.input()}
        disabled={disabled}
        {...inputProps}
      />
      <div ref={indicatorRef} className={s.indicator()} />
    </CheckedField>
  );
}

Checkbox.sizer = FieldSizer;
