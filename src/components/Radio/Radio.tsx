import * as React from 'react';

import { CheckableFormControl } from '@/components/CheckableFormControl';
import { CheckedFieldableFormControlProps } from '@/types';

import { radioStyler } from './styles';

export type RadioProps = CheckedFieldableFormControlProps;

/**
 * A form control that allow users to choose one option from a set
 * @param props {@link RadioProps}
 */
export function Radio(props: RadioProps) {
  return (
    <CheckableFormControl
      {...props}
      type="radio"
      styler={radioStyler}
      data-nickui-component="Radio"
    />
  );
}
