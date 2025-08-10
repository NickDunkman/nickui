import * as React from 'react';

import { Checkable } from '@/components/Checkbox';
import { CheckedFieldableFormControlProps } from '@/types';

import { switchStyler } from './styles';

export type SwitchProps = CheckedFieldableFormControlProps;

/**
 * A variation of the Checkbox component that has a more explict-feeling "off"
 * state. Whereas a group of co-located Checkbox fields feels more like multiple
 * options for one field, a group of Switch fields feels more like discrete fields
 * under a common category.
 * @props {@link SwitchProps}
 */
export function Switch(props: SwitchProps) {
  return (
    <Checkable
      {...props}
      type="checkbox"
      styler={switchStyler}
      data-nickui-component="Switch"
    />
  );
}
