import { Source } from '@storybook/addon-docs/blocks';
import { useFormik } from 'formik';
import * as React from 'react';

import { FauxCanvas } from '../FauxCanvas';
import { PrettyPrint } from '../PrettyPrint';

import { FormLibraryDemoProps } from './types';

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
  isCheckbox,
  radioWithValue,
  children,
}: FormLibraryDemoProps) {
  const addValidation = !isCheckbox && !radioWithValue;
  const theInitialValue = isCheckbox ? !!initialValue : (initialValue ?? '');
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

<${of}${
            !isCheckbox && !radioWithValue
              ? `
  {...form.getFieldProps('${fieldName}')}`
              : `
  {...form.getFieldProps({
    name: '${fieldName}',${
      isCheckbox
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
  })}`
          }
  error={form.errors.${fieldName}}
  // ...
/>
          `}
        />
      </div>

      <FauxCanvas>
        {children({
          props: {
            ...form.getFieldProps({
              name: fieldName,
              type: isCheckbox
                ? 'checkbox'
                : radioWithValue
                  ? 'radio'
                  : undefined,
              value: radioWithValue,
            }),
          },
          error: form.errors[fieldName],
        })}

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
