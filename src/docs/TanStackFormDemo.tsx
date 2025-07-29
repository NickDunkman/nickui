import { Source } from '@storybook/addon-docs/blocks';
import { useForm } from '@tanstack/react-form';
import * as React from 'react';

import { StoriesModule } from '@/types';

import { FauxCanvas } from './FauxCanvas';
import { PrettyPrint } from './PrettyPrint';

/**
 * Helper for easily demonstrating TanStack Form compatibility within a
 * component's docs. Shows the working component + realtime-updating state
 * a FauxCanvas, and then a code snippet which shows how to integrate TanStack
 * Form into the component.
 */
export function TanStackFormDemo({
  of,
  fieldName,
  initialValue,
  checkbox,
  radioWithValue,
  componentProps,
}: {
  of: StoriesModule;
  fieldName: string;
  initialValue?: string | boolean;
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

  const form = useForm({
    defaultValues: {
      [fieldName]: initialValue,
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
import { useForm } from '@tanstack/react-form';

const form = useForm({
  defaultValues: {
    ${fieldName}: ${theInitialValueDisplay},
  },
});

<form.Field
  name="${fieldName}"${
    addValidation
      ? `
  validators={{
    onChange: ({ value }) => value === ${theInitialValueDisplay}
      ? undefined
      : 'Heyyyy, change that back',
  }}`
      : ''
  }
>
  {(field) => (
    <${componentName}
      name={field.name}
      ${
        checkbox
          ? 'checked={field.state.value}'
          : radioWithValue
            ? `checked={field.state.value === '${radioWithValue}'}
      value="${radioWithValue}"`
            : 'value={field.state.value}'
      }
      onBlur={field.handleBlur}
      onChange={(event) => field.handleChange(event.target.${checkbox ? 'checked' : 'value'})}${
        addValidation
          ? `
      error={
        !field.state.meta.isValid && field.state.meta.errors.join(', ')
      }`
          : ''
      }
      // ...
    />
  )}
</form.Field>`}
        />
      </div>

      <FauxCanvas>
        <form.Field
          name={fieldName}
          validators={
            !addValidation
              ? undefined
              : {
                  // We can choose between form-wide and field-specific validators
                  onChange: ({ value }) =>
                    value === initialValue
                      ? undefined
                      : 'Heyyyy, change that back',
                }
          }
        >
          {(field) => (
            <Component
              {...componentProps}
              name={field.name}
              value={
                checkbox ? undefined : (radioWithValue ?? field.state.value)
              }
              checked={
                checkbox
                  ? field.state.value
                  : radioWithValue
                    ? field.state.value === radioWithValue
                    : undefined
              }
              onBlur={field.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                field.handleChange(
                  checkbox ? event.target.checked : event.target.value,
                )
              }
              error={
                !field.state.meta.isValid && field.state.meta.errors.join(', ')
              }
            />
          )}
        </form.Field>

        <form.Subscribe>
          {(state) => (
            <PrettyPrint
              className="-mx-5 mt-8 -mb-5"
              title="TanStack Form state"
              data={{
                state,
              }}
            />
          )}
        </form.Subscribe>
      </FauxCanvas>
    </>
  );
}
