import { Source } from '@storybook/addon-docs/blocks';
import { useForm } from '@tanstack/react-form';
import * as React from 'react';

import { FauxCanvas } from '../FauxCanvas';
import { PrettyPrint } from '../PrettyPrint';

import { FormLibraryDemoProps } from './types';

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

  const form = useForm({
    defaultValues: {
      [fieldName]: initialValue,
    },
  });

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
    <${of}
      name={field.name}
      ${
        isCheckbox
          ? 'checked={field.state.value}'
          : radioWithValue
            ? `checked={field.state.value === '${radioWithValue}'}
      value="${radioWithValue}"`
            : 'value={field.state.value}'
      }
      onBlur={field.handleBlur}
      onChange={(event) => field.handleChange(event.target.${isCheckbox ? 'checked' : 'value'})}${
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
          {(field) =>
            children({
              props: {
                name: field.name,
                value: isCheckbox
                  ? undefined
                  : (radioWithValue ?? field.state.value?.toString()),
                checked: isCheckbox
                  ? field.state.value
                  : radioWithValue
                    ? radioWithValue === field.state.value
                    : undefined,
                onBlur: field.handleBlur,
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                  field.handleChange(
                    isCheckbox ? event.target.checked : event.target.value,
                  );
                },
              },
              error: !field.state.meta.isValid
                ? field.state.meta.errors.join(', ')
                : undefined,
            })
          }
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
