import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { Button } from '@/components/Button';
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
## Compatibility with popular form libraries

&nbsp;<ComponentName of="${componentName}" /> implements all of the necessary
props to be used with [React Hook Form](https://react-hook-form.com/) and
[Formik](https://formik.org)!
        `}
      </Markdown>

      <div className="sb-unstyled relative z-2 -mb-7 flex gap-2 rounded-t-sm bg-gray-200 p-3">
        <Button
          onClick={() => {
            setLibrary('rhf');
          }}
          flavor={
            library === 'rhf' ? Button.flavor.primary : Button.flavor.secondary
          }
        >
          React Hook Form
        </Button>
        <Button
          onClick={() => {
            setLibrary('formik');
          }}
          flavor={
            library === 'formik'
              ? Button.flavor.primary
              : Button.flavor.secondary
          }
        >
          Formik
        </Button>
        <div className="ml-auto">
          <span className="relative -top-4 -mt-2 mr-3 blur-[0.5px]">⛳️</span>
          <span className="text-3xl">🏌️‍♂️</span>
        </div>
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
