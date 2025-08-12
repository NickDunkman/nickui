import * as React from 'react';

import { CheckableFormControls } from '@/components/CheckableFormControls';
import { Radio } from '@/components/Radio';
import { CheckedFieldableFormControlsProps } from '@/types';

type RadiosProps = CheckedFieldableFormControlsProps;

/**
 * Renders multiple radios as one field in a Fieldset.
 * @props {@link RadiosProps}
 */
export function Radios({ delimiter, ...otherProps }: RadiosProps) {
  if (delimiter) {
    console.warn('The `delimiter` prop shouldn’t be used with <Radios>');
  }

  return (
    <CheckableFormControls
      {...otherProps}
      Checkable={Radio}
      data-nickui-component="Radios"
    />
  );
}
