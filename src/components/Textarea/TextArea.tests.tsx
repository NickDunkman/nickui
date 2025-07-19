// Note: more tests are in story play functions in TextArea.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { TextArea } from './TextArea';

function RHFTest() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { name: 'Nick' },
  });

  return (
    <TextArea
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
      if (values.name === 'erroneous value') {
        return { name: 'That’s erroneous' };
      }
    },
  });

  return (
    <TextArea
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

  const textarea = screen.getByLabelText('Name');
  expect(textarea).toHaveValue('Nick');
  expect(textarea).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(textarea).toHaveFocus();

  await user.clear(textarea);
  expect(textarea).toHaveValue('');

  await user.type(textarea, 'erroneous value');
  expect(textarea).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(textarea).not.toHaveFocus();
  expect(textarea).toHaveAttribute('data-touched', 'true');
});
