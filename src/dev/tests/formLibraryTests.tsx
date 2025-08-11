import { useForm as useTanstackForm } from '@tanstack/react-form';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';

export const formLibraryTests = [
  { LibrarySetup: ReactHookFormSetup, libraryName: 'React Hook Form' },
  { LibrarySetup: TanstackFormSetup, libraryName: 'Tanstack Form' },
  { LibrarySetup: FormikSetup, libraryName: 'Formik' },
] as const;

type ValueType = string | boolean;

interface LibrarySetupProps {
  fieldName: string;
  initialValue: ValueType;
  /**
   * Pass a value to add a field validator which adds an error when the value
   * matches
   */
  erroneousValue?: ValueType;
  isCheckbox?: boolean;
  children: (args: {
    props: (radioValue?: string) => Omit<
      React.HTMLAttributes<HTMLElement>,
      'value' | 'defaultValue'
    > & {
      value?: string;
      defaultValue?: string;
    };
    error?: React.ReactNode;
    touched: boolean;
  }) => React.ReactNode;
}

function ReactHookFormSetup({
  children,
  fieldName,
  initialValue,
  erroneousValue,
}: LibrarySetupProps) {
  const {
    register,
    formState: { errors, touchedFields },
  } = useReactHookForm({
    mode: 'all',
    defaultValues: { [fieldName]: initialValue },
  });

  return children({
    props: (_radioValue) => ({
      ...register(fieldName, {
        validate:
          erroneousValue !== undefined
            ? (value) => value !== erroneousValue || 'That’s erroneous'
            : undefined,
      }),
    }),
    error: errors[fieldName]?.message?.toString(),
    touched: !!touchedFields[fieldName],
  });
}

function TanstackFormSetup({
  children,
  fieldName,
  initialValue,
  erroneousValue,
  isCheckbox,
}: LibrarySetupProps) {
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
      {(field) =>
        children({
          props: (_radioValue) => ({
            name: field.name,
            value: isCheckbox ? undefined : field.state.value.toString(),
            checked: isCheckbox ? field.state.value : undefined,
            onBlur: field.handleBlur,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              field.handleChange(
                isCheckbox ? event.target.checked : event.target.value,
              );
            },
          }),
          error: !field.state.meta.isValid
            ? field.state.meta.errors.join(', ')
            : undefined,
          touched: !!field.state.meta.isTouched,
        })
      }
    </form.Field>
  );
}

function FormikSetup({
  children,
  fieldName,
  initialValue,
  erroneousValue,
  isCheckbox,
}: LibrarySetupProps) {
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

  return children({
    props: (_radioValue) => ({
      ...form.getFieldProps({
        name: fieldName,
        type: isCheckbox ? 'checkbox' : undefined,
      }),
    }),
    error: form.errors[fieldName],
    touched: !!form.touched[fieldName],
  });
}
