import * as React from 'react';

import { Radio } from '@/components/Radio';
import { FieldSizer } from '@/constants';
import type { CommonFieldProps } from '@/types';

import { Checkables, CheckablesProps } from '../Checkboxes/Checkboxes';

/**
 * Renders multiple radios as one field in a Fieldset.
 * @props {@link CheckablesProps} + {@link CommonFieldProps}
 */
export function Radios({
  delimiter,
  ...otherProps
}: CheckablesProps & CommonFieldProps) {
  if (delimiter) {
    console.warn('The `delimiter` prop shouldn’t be used with <Radios>');
  }

  return <Checkables {...otherProps} Checkable={Radio} />;
}

Radios.sizer = FieldSizer;
