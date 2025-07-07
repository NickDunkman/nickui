import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { Select } from '@/components/Select';
import { StoriesModule } from '@/types';

import { ComponentName } from './ComponentName';
import { FormikDemo } from './FormikDemo';
import { ReactHookFormDemo } from './ReactHookFormDemo';

/**
 * Helper for easily demonstrating Formik compatibility within a component's
 * docs. Shows the working component + realtime-updating Formik context within
 * a FauxCanvas, and then a code snippet which shows how to integrate Formik
 * into the component.
 */
export function FormLibraryCompatibility({
  of,
  fieldName,
  initialValue,
  checkbox,
  radioWithValue,
  componentProps,
}: {
  of: StoriesModule;
  fieldName: string;
  initialValue: string;
  checkbox?: boolean;
  radioWithValue?: string;
  componentProps?: object;
}) {
  const componentName = of.default.title.split('/').pop();
  const [library, setLibrary] = React.useState('rhf');

  return (
    <>
      <Markdown options={{ overrides: { ComponentName } }}>
        {`
## React Hook Form & Formik compatibility

&nbsp;<ComponentName of="${componentName}" /> implements all of the necessary
props to be used with [React Hook Form](https://react-hook-form.com/) and
[Formik](https://formik.org)!
        `}
      </Markdown>

      <div className="sb-unstyled flex gap-2">
        <Select
          onChange={(event) => {
            setLibrary(event.target.value);
          }}
        >
          <option value="rhf">React Hook Form</option>
          <option value="formik">Formik</option>
        </Select>
      </div>

      {library === 'rhf' && (
        <ReactHookFormDemo
          of={of}
          fieldName={fieldName}
          initialValue={initialValue}
          checkbox={checkbox}
          radioWithValue={radioWithValue}
          componentProps={componentProps}
        />
      )}

      {library === 'formik' && (
        <FormikDemo
          of={of}
          fieldName={fieldName}
          initialValue={initialValue}
          checkbox={checkbox}
          radioWithValue={radioWithValue}
          componentProps={componentProps}
        />
      )}
    </>
  );
}
