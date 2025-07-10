// Note: most tests are in story play functions in Text.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Text } from './Text';

function RHFTest() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { name: 'Nick' },
  });

  return (
    <Text
      label="Name"
      {...register('name', {
        validate: (value) => value !== 'erroneous value' || 'That’s erroneous',
      })}
      error={errors.name?.message}
      data-touched={!!touchedFields.name}
    />
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: {
      name: 'Nick',
    },
    onSubmit: () => {},
    validate: (values) => {
      if ((values.name = 'erroneous value')) {
        return { name: 'That’s erroneous' };
      }
    },
  });

  return (
    <Text
      label="Name"
      {...form.getFieldProps('name')}
      error={form.errors.name}
      data-touched={!!form.touched.name}
    />
  );
}

test.each([
  { Component: RHFTest, library: 'React Hook Forms' },
  { Component: FormikTest, library: 'Formik' },
])('Compatible with $library', async ({ Component }) => {
  const user = userEvent.setup();

  render(<Component />);

  const input = screen.getByLabelText('Name');
  expect(input).toHaveValue('Nick');
  expect(input).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(input).toHaveFocus();

  await user.clear(input);
  expect(input).toHaveValue('');

  await user.type(input, 'erroneous value');
  expect(input).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(input).not.toHaveFocus();
  expect(input).toHaveAttribute('data-touched', 'true');
});
