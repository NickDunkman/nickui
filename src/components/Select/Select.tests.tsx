// Note: most tests are in story play functions in Text.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Select } from './Select';

function RHFTest() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { language: 'fr' },
  });

  return (
    <Select
      label="Language"
      {...register('language', {
        validate: (value) => value === 'fr' || 'That’s erroneous',
      })}
      error={errors.language?.message}
      data-touched={!!touchedFields.language}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </Select>
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: {
      language: 'fr',
    },
    onSubmit: () => {},
    validate: (values) => {
      if (values.language !== 'fr') {
        return { language: 'That’s erroneous' };
      }
    },
  });

  console.log(form.getFieldProps('language'));

  return (
    <Select
      id="formiky"
      label="Language"
      {...form.getFieldProps('language')}
      error={form.errors.language}
      data-touched={!!form.touched.language}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </Select>
  );
}

test.each([
  { Component: RHFTest, library: 'React Hook Forms' },
  { Component: FormikTest, library: 'Formik' },
])('Compatible with $library', async ({ Component }) => {
  const user = userEvent.setup();

  render(<Component />);

  const select = screen.getByLabelText('Language');
  expect(select).toHaveValue('fr');
  expect(select).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(select).toHaveFocus();

  await user.selectOptions(select, 'en');
  expect(select).toHaveValue('en');
  expect(select).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(select).not.toHaveFocus();
  expect(select).toHaveAttribute('data-touched', 'true');
});
