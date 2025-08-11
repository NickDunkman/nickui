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

type ValueType = string | boolean;

export function ReactHookFormTest<T extends React.JSX.IntrinsicAttributes>({
  Component,
  fieldName,
  initialValue,
  erroneousValue,
  isCheckbox: _isCheckbox,
  componentProps,
}: FieldableProps & {
  Component: React.ComponentType<T>;
  fieldName: string;
  initialValue: ValueType;
  erroneousValue?: ValueType;
  isCheckbox?: boolean;
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
        validate:
          erroneousValue !== undefined
            ? (value) => value !== erroneousValue || 'That’s erroneous'
            : undefined,
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
  isCheckbox,
  componentProps,
}: {
  Component: React.ComponentType<T>;
  fieldName: string;
  initialValue: ValueType;
  erroneousValue?: ValueType;
  isCheckbox?: boolean;
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
      validators={
        erroneousValue !== undefined
          ? {
              onChange: ({ value }) =>
                value === erroneousValue ? 'That’s erroneous' : undefined,
            }
          : undefined
      }
    >
      {(field) => (
        <Component
          name={field.name}
          value={isCheckbox ? undefined : field.state.value}
          checked={!isCheckbox ? undefined : field.state.value}
          onBlur={field.handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            field.handleChange(
              isCheckbox ? event.target.checked : event.target.value,
            );
          }}
          error={
            !field.state.meta.isValid
              ? field.state.meta.errors.join(', ')
              : undefined
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
  isCheckbox,
  componentProps,
}: {
  Component: React.ComponentType<T>;
  fieldName: string;
  initialValue: ValueType;
  erroneousValue?: ValueType;
  isCheckbox?: boolean;
  componentProps: T;
}) {
  const form = useFormik({
    initialValues: {
      [fieldName]: initialValue,
    },
    onSubmit: () => {},
    validate:
      erroneousValue !== undefined
        ? (values) => {
            if (values[fieldName] === erroneousValue) {
              return { [fieldName]: 'That’s erroneous' };
            }
          }
        : undefined,
  });

  return (
    <Component
      {...form.getFieldProps({
        name: fieldName,
        type: isCheckbox ? 'checkbox' : undefined,
      })}
      error={form.errors[fieldName]}
      data-touched={!!form.touched[fieldName]}
      {...componentProps}
    />
  );
}
