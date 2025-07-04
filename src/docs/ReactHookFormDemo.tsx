import { Markdown, Source } from '@storybook/addon-docs/blocks';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { StoriesModule } from '@/types';

import { ComponentName } from './ComponentName';
import { FakeCanvas } from './FakeCanvas';
import { PrettyPrint } from './PrettyPrint';

/**
 * Helper for easily demonstrating RHF compatibility within a component's
 * docs. Shows the working component + realtime-updating RHF context within
 * a FakeCanvas, and then a code snippet which shows how to integrate RHF
 * into the component.
 */
export function ReactHookFormDemo({
  of,
  fieldName,
  initialValue,
  componentProps,
}: {
  of: StoriesModule;
  fieldName: string;
  initialValue?: string | boolean;
  componentProps: object;
}) {
  const addValidation = initialValue && typeof initialValue !== 'boolean';

  const {
    register,
    watch,
    formState: {
      defaultValues,
      errors,
      dirtyFields,
      isDirty,
      isValid,
      touchedFields,
    },
  } = useForm({
    mode: 'all',
    defaultValues: { [fieldName]: initialValue },
  });

  const Component = of.default.component;
  const componentName = of.default.title.split('/').pop();

  return (
    <>
      <Markdown options={{ overrides: { ComponentName } }}>
        {`
## React Hook Form compatibility

&nbsp;<ComponentName of="${componentName}" /> implements all of the necessary
props to be used with [React Hook Form](https://react-hook-form.com/)!
        `}
      </Markdown>
      <FakeCanvas>
        <Component
          {...register(fieldName, {
            validate: !addValidation
              ? undefined
              : (value) => value === initialValue || 'Heyyyy, change that back',
          })}
          error={errors[fieldName]?.message}
          {...componentProps}
        />
        <PrettyPrint
          data={{
            defaultValues,
            dirtyFields,
            isDirty,
            isValid,
            touchedFields,
            watch: watch(),
          }}
          title="React Hook Form context"
          className="mt-6"
        />
      </FakeCanvas>
      <Source
        dark
        language="tsx"
        code={`
import { useForm } from 'react-hook-form';

const form = useForm<{ ${fieldName}: string }>({
  mode: 'all',
  defaultValues: { ${fieldName}: '${initialValue}' },
});

return (
  <${componentName}${
    addValidation
      ? `
    {...register('${fieldName}', {
      validate: (value) => value === '${initialValue}' || 'Heyyy, change that back', 
    })}`
      : `
    {...register('${fieldName}')}`
  }
    error={errors.${fieldName}?.message}
    // ...
  />
);
          `}
      />
    </>
  );
}
