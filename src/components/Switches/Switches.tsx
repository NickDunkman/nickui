import * as React from 'react';

import { Switch } from '@/components/Switch';
import type { CommonFieldsetProps } from '@/types';

import { Checkables, CheckablesProps } from '../Checkboxes/Checkboxes';

/**
 * Renders multiple <Switch> as one field in a <Fieldset>.
 * @props {@link CheckablesProps} + {@link CommonFieldsetProps}
 */
export function Switches({
  delimiter = ',',
  ...otherProps
}: CheckablesProps & CommonFieldsetProps) {
  return (
    <Checkables
      {...otherProps}
      Checkable={Switch}
      delimiter={delimiter}
      data-nickui-component="Switches"
    />
  );
}
