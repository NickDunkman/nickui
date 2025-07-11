// Note: most tests are in story play functions in Radios.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Radios } from './Radios';

function RHFTest() {
  const {
    register,
    formState: { touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { language: 'fr' },
  });

  return (
    <Radios
      {...register('language')}
      options={[
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Français' },
      ]}
      data-touched={!!touchedFields.language}
    />
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: { language: 'fr' },
    onSubmit: () => {},
  });

  return (
    <Radios
      {...form.getFieldProps('language')}
      options={[
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Français' },
      ]}
      data-touched={!!form.touched.language}
    />
  );
}

test.each([
  { Component: RHFTest, library: 'React Hook Forms' },
  { Component: FormikTest, library: 'Formik' },
])('Compatible with $library', async ({ Component }) => {
  const user = userEvent.setup();

  render(<Component />);

  const hiddenInput = screen.getByTestId('the-hidden-input');
  const english = screen.getByLabelText('English');
  const français = screen.getByLabelText('Français');

  expect(hiddenInput).toHaveAttribute('data-touched', 'false');
  expect(hiddenInput).toHaveValue('fr');
  expect(english).not.toBeChecked();
  expect(français).toBeChecked();

  await user.tab();
  expect(français).toHaveFocus();

  await user.keyboard('{ArrowUp}');
  expect(english).toHaveFocus();

  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('en');
  expect(english).toBeChecked();
  expect(français).not.toBeChecked();

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(hiddenInput).toHaveAttribute('data-touched', 'true');
});
