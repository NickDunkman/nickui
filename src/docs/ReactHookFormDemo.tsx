import { Source } from '@storybook/addon-docs/blocks';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { StoriesModule } from '@/types';

import { FauxCanvas } from './FauxCanvas';
import { PrettyPrint } from './PrettyPrint';

/**
 * Helper for easily demonstrating RHF compatibility within a component's
 * docs. Shows the working component + realtime-updating RHF context within
 * a FauxCanvas, and then a code snippet which shows how to integrate RHF
 * into the component.
 */
export function ReactHookFormDemo({
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

  const {
    register,
    watch,
    formState: { errors, dirtyFields, isDirty, isValid, touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { [fieldName]: theInitialValue },
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
import { useForm } from 'react-hook-form';

const form = useForm<{ ${fieldName}: string }>({
  mode: 'all',
  defaultValues: { ${fieldName}: ${theInitialValueDisplay} },
});

return (
  <${componentName}${
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
);
          `}
        />
      </div>

      <FauxCanvas>
        <Component
          {...register(fieldName, {
            validate: !addValidation
              ? undefined
              : (value) =>
                  value === theInitialValue || 'Heyyyy, change that back',
          })}
          error={errors[fieldName]?.message}
          {...componentProps}
        />
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
