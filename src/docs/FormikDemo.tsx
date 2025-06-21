import { Markdown, Source } from '@storybook/addon-docs/blocks';
import * as formik from 'formik';
import * as React from 'react';

import { getComponentName } from '@/utils/getComponentName';

import { FakeCanvas } from './FakeCanvas';
import { PrettyPrint } from './PrettyPrint';

/**
 * Helper for easily demonstrating Formik compatibility within a component's
 * docs. Shows the working component + realtime-updating Formik context within
 * a FakeCanvas, and then a code snippet which shows how to integrate Formik
 * into the component.
 */
export function FormikDemo<P extends Record<string, unknown>>({
  fieldName,
  initialValue,
  component: Component,
  componentProps,
}: {
  fieldName: string;
  initialValue: string;
  component: React.ComponentType<P>;
  validate?: formik.FieldValidator;
  componentProps: P;
}) {
  const form = formik.useFormik({
    initialValues: {
      [fieldName]: initialValue,
    },
    onSubmit: () => {},
    validate: (values) => {
      if (values[fieldName] !== initialValue) {
        return { [fieldName]: 'Heyyyy, change that back' };
      }
    },
  });

  const componentName = getComponentName(Component);

  return (
    <>
      <Markdown>
        {`
## Formik compatibility

The ${componentName} component implements all of the necessary props to be used
as a [Formik field](https://formik.org/docs/api/field)!
        `}
      </Markdown>
      <FakeCanvas>
        <Component
          name={fieldName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values[fieldName]}
          error={form.errors[fieldName]}
          {...componentProps}
        />
        <PrettyPrint data={form} title="Formik context" className="mt-6" />
      </FakeCanvas>
      <Source
        dark
        language="tsx"
        code={`
const form = useFormik({
  initialValues: { ${fieldName}: '${initialValue}' },
  onSubmit: () => {},
  validate: (values) => {
    if (values.${fieldName} !== '${initialValue}') {
      return { ${fieldName}: 'Heyyyy, change that back' };
    }
  },
});

return (
  <${componentName}
    name={${fieldName}}
    onChange={form.handleChange}
    onBlur={form.handleBlur}
    value={form.values.${fieldName}}
    error={form.errors.${fieldName}}
    ${Object.keys(componentProps)
      .map((key) => `${key}="${componentProps[key]?.toString()}"`)
      .join('\n    ')}
  />
);
          `}
      />
    </>
  );
}
