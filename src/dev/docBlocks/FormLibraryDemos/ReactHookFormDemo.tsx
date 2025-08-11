import { Source } from '@storybook/addon-docs/blocks';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { FauxCanvas } from '../FauxCanvas';
import { PrettyPrint } from '../PrettyPrint';

import { FormLibraryDemoProps } from './types';

export function ReactHookFormDemo({
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

  const {
    register,
    watch,
    formState: { errors, dirtyFields, isDirty, isValid, touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { [fieldName]: theInitialValue },
  });

  return (
    <>
      <div style={{ marginTop: -20 }}>
        <Source
          dark
          language="tsx"
          code={`
import { useForm } from 'react-hook-form';

const form = useForm({
  mode: 'all',
  defaultValues: { ${fieldName}: ${theInitialValueDisplay} },
});

<${of}${
            addValidation
              ? `
  {...register('${fieldName}', {
    validate: (value) => value === ${theInitialValueDisplay} || 'Heyyy, change that back', 
  })}`
              : `
  {...register('${fieldName}')}`
          }${
            radioWithValue
              ? `
  value="${radioWithValue}"`
              : ''
          }
  error={errors.${fieldName}?.message}
  // ...
/>
          `}
        />
      </div>

      <FauxCanvas>
        {children({
          props: {
            ...register(fieldName, {
              validate: !addValidation
                ? undefined
                : (value) =>
                    value === initialValue || 'Heyyy, change that back',
            }),
            ...(radioWithValue && { value: radioWithValue }),
          },
          error: errors[fieldName]?.message?.toString(),
        })}
        <PrettyPrint
          className="-mx-5 mt-8 -mb-5"
          title="React Hook Form context"
          data={{
            dirtyFields,
            isDirty,
            isValid,
            touchedFields,
            watch: watch(),
          }}
        />
      </FauxCanvas>
    </>
  );
}
