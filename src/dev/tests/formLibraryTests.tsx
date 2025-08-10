import { useForm as useTanstackForm } from '@tanstack/react-form';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';

import { FieldableProps } from '@/types';

export const formLibraryTests = [
  { Test: ReactHookFormTest, library: 'React Hook Form' },
  { Test: TanstackFormTest, library: 'Tanstack Form' },
  { Test: FormikTest, library: 'Formik' },
] as const;

export function ReactHookFormTest<T extends React.JSX.IntrinsicAttributes>({
  Component,
  fieldName,
  initialValue,
  erroneousValue,
  componentProps,
}: FieldableProps & {
  Component: React.ComponentType<T>;
  fieldName: string;
  initialValue: string;
  erroneousValue: string;
  componentProps: T;
}) {
  const {
    register,
    formState: { errors, touchedFields },
  } = useReactHookForm({
    mode: 'all',
    defaultValues: { [fieldName]: initialValue },
  });

  return (
    <Component
      {...register(fieldName, {
        validate: (value) => value !== erroneousValue || 'That’s erroneous',
      })}
      error={errors[fieldName]?.message?.toString()}
      data-touched={!!touchedFields[fieldName]}
      {...componentProps}
    />
  );
}

export function TanstackFormTest<T extends React.JSX.IntrinsicAttributes>({
  Component,
  fieldName,
  initialValue,
  erroneousValue,
  componentProps,
}: {
  Component: React.ComponentType<T>;
  fieldName: string;
  initialValue: string;
  erroneousValue: string;
  componentProps: T;
}) {
  const form = useTanstackForm({
    defaultValues: {
      [fieldName]: initialValue,
    },
  });

  return (
    <form.Field
      name={fieldName}
      validators={{
        onChange: ({ value }) =>
          value === erroneousValue ? 'That’s erroneous' : undefined,
      }}
    >
      {(field) => (
        <Component
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            field.handleChange(event.target.value);
          }}
          error={
            !field.state.meta.isValid && field.state.meta.errors.join(', ')
          }
          data-touched={!!field.state.meta.isTouched}
          {...componentProps}
        />
      )}
    </form.Field>
  );
}

export function FormikTest<T extends React.JSX.IntrinsicAttributes>({
  Component,
  fieldName,
  initialValue,
  erroneousValue,
  componentProps,
}: {
  Component: React.ComponentType<T>;
  fieldName: string;
  initialValue: string;
  erroneousValue: string;
  componentProps: T;
}) {
  const form = useFormik({
    initialValues: {
      [fieldName]: initialValue,
    },
    onSubmit: () => {},
    validate: (values) => {
      if (values[fieldName] === erroneousValue) {
        return { [fieldName]: 'That’s erroneous' };
      }
    },
  });

  return (
    <Component
      {...form.getFieldProps(fieldName)}
      error={form.errors[fieldName]}
      data-touched={!!form.touched[fieldName]}
      {...componentProps}
    />
  );
}
