import * as React from 'react';

import { Switch } from '@/components/Switch';

import { Checkables, CheckablesProps } from '../Checkboxes/Checkboxes';

/**
 * Renders multiple <Switch> as one field in a <Fieldset>.
 * @props {@link CheckablesProps}
 */
export function Switches({ delimiter = ',', ...otherProps }: CheckablesProps) {
  return (
    <Checkables
      {...otherProps}
      Checkable={Switch}
      delimiter={delimiter}
      data-nickui-component="Switches"
    />
  );
}
