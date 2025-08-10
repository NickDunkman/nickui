import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { FieldableProps } from '@/types';

export const formLibraryTests = [
  { Test: ReactHookFormTest, library: 'React Hook Form' },
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
  } = useForm({
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
