import * as React from 'react';

import { Checkable } from '@/components/Checkbox';
import { CheckedFieldableProps } from '@/types';

import { radioStyler } from './styles';

export interface RadioProps
  extends Omit<React.ComponentProps<'input'>, 'type'>,
    CheckedFieldableProps {
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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * A form control that allow users to choose one option from a set
 * @param props {@link RadioProps}
 */
export function Radio(props: RadioProps) {
  return (
    <Checkable
      {...props}
      type="radio"
      styler={radioStyler}
      data-nickui-component="Radio"
    />
  );
}
