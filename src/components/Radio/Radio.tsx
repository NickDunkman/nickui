import * as React from 'react';

import { Checkable } from '@/components/Checkbox';
import { Sizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';

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
export function Radio(props: RadioProps & CommonCheckedFieldProps) {
  return <Checkable {...props} type="radio" styler={styles} />;
}

Radio.sizer = Sizer;
