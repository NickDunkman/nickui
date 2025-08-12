import * as React from 'react';

import { CheckableFormControls } from '@/components/CheckableFormControls';
import { Checkbox } from '@/components/Checkbox';
import { CheckedFieldableFormControlsProps } from '@/types';

type CheckboxesProps = CheckedFieldableFormControlsProps;

/**
 * Renders multiple checkboxes as one field in a Fieldset.
 *
 * Form libraries like Formik rely on `onChange` events to trigger updates to
 * field values, and such events cannot have multiple targets. Therefore, to
 * function as one holistic field whose value represents all of the currently
 * checked checkboxes, the component's value is a single delimited-string that
 * is managed using a `<input type="hidden">`. Each checkbox represents a
 * substring that can be added to or removed from the delimited-string by
 * toggling the checked status.
 *
 * @props {@link CheckboxesProps}
 */
export function Checkboxes({
  delimiter = ',',
  ...otherProps
}: CheckboxesProps) {
  return (
    <CheckableFormControls
      {...otherProps}
      delimiter={delimiter}
      Checkable={Checkbox}
      data-nickui-component="Checkboxes"
    />
  );
}
