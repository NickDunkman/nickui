import * as React from 'react';

import { Radio } from '@/components/Radio';
import { FieldSizer } from '@/constants';
import type { CommonFieldsetProps } from '@/types';

import { Checkables, CheckablesProps } from '../Checkboxes/Checkboxes';

/**
 * Renders multiple radios as one field in a Fieldset.
 * @props {@link CheckablesProps} + {@link CommonFieldsetProps}
 */
export function Radios({
  delimiter,
  ...otherProps
}: CheckablesProps & CommonFieldsetProps) {
  if (delimiter) {
    console.warn('The `delimiter` prop shouldn’t be used with <Radios>');
  }

  return <Checkables {...otherProps} Checkable={Radio} />;
}

Radios.sizer = FieldSizer;
