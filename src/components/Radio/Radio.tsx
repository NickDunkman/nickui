import * as React from 'react';

import { FieldSizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';

import { CheckedField } from '../CheckedField';

import { styles } from './styles';

interface RadioProps extends Omit<React.ComponentProps<'input'>, 'type'> {
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
  /** Called when the checked state changes  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A form control that allow users to choose one option from a set
 * @param props {@link RadioProps} {@link CommonCheckedFieldProps}
 */
export function Radio({
  // CheckedField props
  className,
  label,
  explainer,
  sizer,
  disabled,
  // Radio-specific props
  ...inputProps
}: RadioProps & CommonCheckedFieldProps) {
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
        type="radio"
        className={s.input()}
        disabled={disabled}
        {...inputProps}
      />
      <span ref={indicatorRef} className={s.indicator()} />
    </CheckedField>
  );
}

Radio.sizer = FieldSizer;
