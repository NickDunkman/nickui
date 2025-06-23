import { Markdown, Source } from '@storybook/addon-docs/blocks';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { getComponentName } from '@/utils/getComponentName';

import { FakeCanvas } from './FakeCanvas';
import { PrettyPrint } from './PrettyPrint';

/**
 * Helper for easily demonstrating RHF compatibility within a component's
 * docs. Shows the working component + realtime-updating RHF context within
 * a FakeCanvas, and then a code snippet which shows how to integrate RHF
 * into the component.
 */
export function ReactHookFormDemo<P extends Record<string, unknown>>({
  fieldName,
  initialValue,
  component: Component,
  componentProps,
}: {
  fieldName: string;
  initialValue: string;
  component: React.ComponentType<P>;
  componentProps: P;
}) {
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

  const componentName = getComponentName(Component);

  return (
    <>
      <Markdown>
        {`
## React Hook Form compatibility

The ${componentName} component implements all of the necessary props to be used
with [React Hook Form](https://react-hook-form.com/)!
        `}
      </Markdown>
      <FakeCanvas>
        <Component
          {...register(fieldName, {
            validate: (value) =>
              value === initialValue || 'Heyyyy, change that back',
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
  <${componentName}
    {...register('${fieldName}', {
      validate: (value) => value === '${initialValue}' || 'Heyyy, change that back', 
    })}
    error={errors.${fieldName}?.message}
    // ...
  />
);
          `}
      />
    </>
  );
}
