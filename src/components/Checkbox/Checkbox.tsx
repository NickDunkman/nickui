import * as React from 'react';

import { CheckableFormControl } from '@/components/CheckableFormControl';
import { CheckedFieldableFormControlProps } from '@/types';

import { checkboxStyler } from './styles';

export type CheckboxProps = CheckedFieldableFormControlProps;

/**
 * A form control that allow users to choose zero to many options from a set
 * @param props {@link CheckboxProps}
 */
export function Checkbox(props: CheckboxProps) {
  return (
    <CheckableFormControl
      {...props}
      type="checkbox"
      styler={checkboxStyler}
      data-nickui-component="Checkbox"
    />
  );
}
