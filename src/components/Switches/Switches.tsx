import * as React from 'react';

import { CheckableFormControls } from '@/components/CheckableFormControls';
import { Switch } from '@/components/Switch';
import { CheckedFieldableFormControlsProps } from '@/types';

type SwitchesProps = CheckedFieldableFormControlsProps;

/**
 * Renders multiple <Switch> as one field in a <Fieldset>.
 * @props {@link SwitchesProps}
 */
export function Switches({ delimiter = ',', ...otherProps }: SwitchesProps) {
  return (
    <CheckableFormControls
      {...otherProps}
      Checkable={Switch}
      delimiter={delimiter}
      data-nickui-component="Switches"
    />
  );
}
