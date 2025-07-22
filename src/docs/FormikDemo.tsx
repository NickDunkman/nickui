import { Source } from '@storybook/addon-docs/blocks';
import { useFormik } from 'formik';
import * as React from 'react';

import { StoriesModule } from '@/types';

import { FauxCanvas } from './FauxCanvas';
import { PrettyPrint } from './PrettyPrint';

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
  const theInitialValue = checkbox ? !!initialValue : (initialValue ?? '');
  const theInitialValueDisplay =
    typeof theInitialValue === 'boolean'
      ? theInitialValue.toString()
      : `'${theInitialValue.replace(/[\n]/g, '\\n')}'`;

  const form = useFormik({
    initialValues: {
      [fieldName]: theInitialValue,
    },
    onSubmit: () => {},
    validate: !addValidation
      ? undefined
      : (values) => {
          if (values[fieldName] !== theInitialValue) {
            return { [fieldName]: 'Heyyyy, change that back' };
          }
        },
  });

  const Component = of.default.component;
  const componentName = of.default.title.split('/').pop();

  return (
    <>
      <div style={{ marginTop: -20 }}>
        <Source
          dark
          language="tsx"
          code={`
import { useFormik } from 'formik';

const form = useFormik({
  initialValues: { ${fieldName}: ${theInitialValueDisplay} },
  onSubmit: () => {},${
    !addValidation
      ? ''
      : `
  validate: (values) => {
    if (values.${fieldName} !== ${theInitialValueDisplay}) {
      return { ${fieldName}: 'Heyyyy, change that back' };
    }
  },`
  }
});

return (
  <${componentName}${
    !checkbox && !radioWithValue
      ? `
    {...form.getFieldProps('${fieldName}')}`
      : `
    {...form.getFieldProps({
      name: '${fieldName}',${
        checkbox
          ? `
      type: 'checkbox',`
          : ''
      }${
        radioWithValue
          ? `
      type: 'radio',
      value: '${radioWithValue}',`
          : ''
      }
    )}`
  }
    error={form.errors.${fieldName}}
    // ...
  />
);
          `}
        />
      </div>

      <FauxCanvas>
        <Component
          {...form.getFieldProps({
            name: fieldName,
            type: checkbox ? 'checkbox' : radioWithValue ? 'radio' : undefined,
            value: radioWithValue,
          })}
          error={form.errors[fieldName]}
          {...componentProps}
        />
        <PrettyPrint
          className="-mx-5 mt-8 -mb-5"
          title="Formik context"
          data={{
            values: form.values,
            errors: form.errors,
            touched: form.touched,
            isValid: form.isValid,
            dirty: form.dirty,
          }}
        />
      </FauxCanvas>
    </>
  );
}
