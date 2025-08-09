import * as React from 'react';

import { Radio } from '@/components/Radio';

import { Checkables, CheckablesProps } from '../Checkboxes/Checkboxes';

/**
 * Renders multiple radios as one field in a Fieldset.
 * @props {@link CheckablesProps}
 */
export function Radios({ delimiter, ...otherProps }: CheckablesProps) {
  if (delimiter) {
    console.warn('The `delimiter` prop shouldn’t be used with <Radios>');
  }

  return (
    <Checkables
      {...otherProps}
      Checkable={Radio}
      data-nickui-component="Radios"
    />
  );
}
