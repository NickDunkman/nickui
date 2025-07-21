import * as React from 'react';

import { Checkable } from '@/components/Checkbox';
import { CommonCheckedFieldProps } from '@/types';

import { switchStyler } from './styles';

interface SwitchProps extends Omit<React.ComponentProps<'input'>, 'type'> {
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
 * A variation of the Checkbox component that has a more explict-feeling "off"
 * state. Whereas a group of co-located Checkbox fields feels more like multiple
 * options for one field, a group of Switch fields feels more like discrete fields
 * under a common category.
 * @props {@link SwitchProps}
 */
export function Switch(props: SwitchProps & CommonCheckedFieldProps) {
  return <Checkable {...props} type="checkbox" styler={switchStyler} />;
}
