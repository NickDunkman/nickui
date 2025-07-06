import { Markdown, Source } from '@storybook/addon-docs/blocks';
import { useFormik } from 'formik';
import * as React from 'react';

import { StoriesModule } from '@/types';

import { ComponentName } from './ComponentName';
import { FauxCanvas } from './FauxCanvas';

/**
 * Helper for easily demonstrating Formik compatibility within a component's
 * docs. Shows the working component + realtime-updating Formik context within
 * a FauxCanvas, and then a code snippet which shows how to integrate Formik
 * into the component.
 */
export function FormikDemo({
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
  const addValidation = !checkbox && !radioWithValue;

  const form = useFormik({
    initialValues: {
      [fieldName]: initialValue ?? '',
    },
    onSubmit: () => {},
    validate: !addValidation
      ? undefined
      : (values) => {
          if (values[fieldName] !== initialValue) {
            return { [fieldName]: 'Heyyyy, change that back' };
          }
        },
  });

  const Component = of.default.component;
  const componentName = of.default.title.split('/').pop();

  return (
    <>
      <Markdown options={{ overrides: { ComponentName } }}>
        {`
## Formik compatibility

&nbsp;<ComponentName of="${componentName}" /> implements all of the necessary
props to be used as a [Formik field](https://formik.org/docs/api/field)!
        `}
      </Markdown>

      <FauxCanvas prettyPrint={{ data: form, title: 'Formik context' }}>
        <Component
          {...form.getFieldProps({
            name: fieldName,
            type: checkbox ? 'checkbox' : radioWithValue ? 'radio' : undefined,
            value: radioWithValue,
          })}
          error={form.errors[fieldName]}
          {...componentProps}
        />
      </FauxCanvas>

      <Source
        dark
        language="tsx"
        code={`
import { useFormik } from 'formik';

const form = useFormik({
  initialValues: { ${fieldName}: ${typeof initialValue === 'boolean' ? initialValue : `'${initialValue}'`} },
  onSubmit: () => {},${
    !addValidation
      ? ''
      : `
  validate: (values) => {
    if (values.${fieldName} !== '${initialValue}') {
      return { ${fieldName}: 'Heyyyy, change that back' };
    }
  },`
  }
});

return (
  <${componentName}
    {...form.getFieldProps({ name: '${fieldName}'${checkbox ? ", type: 'checkbox'" : radioWithValue ? ", type: 'radio'" : ''})}
    error={form.errors.${fieldName}}
    // ...
  />
);
          `}
      />
    </>
  );
}
