// Note: most tests are in story play functions in Switches.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Switches } from './Switches';

function RHFTest() {
  const {
    register,
    formState: { touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { name: 'nick,dunkman' },
  });

  return (
    <Switches
      {...register('name')}
      options={[
        { value: 'nick', label: 'Nick' },
        { value: 'dunkman', label: 'Dunkman' },
      ]}
      data-touched={!!touchedFields.name}
    />
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: { name: 'nick,dunkman' },
    onSubmit: () => {},
  });

  return (
    <Switches
      {...form.getFieldProps('name')}
      options={[
        { value: 'nick', label: 'Nick' },
        { value: 'dunkman', label: 'Dunkman' },
      ]}
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

  const hiddenInput = screen.getByTestId('the-hidden-input');
  const nick = screen.getByLabelText('Nick');
  const dunkman = screen.getByLabelText('Dunkman');

  expect(hiddenInput).toHaveAttribute('data-touched', 'false');
  expect(hiddenInput).toHaveValue('nick,dunkman');
  expect(nick).toBeChecked();
  expect(dunkman).toBeChecked();

  await user.tab();
  expect(nick).toHaveFocus();

  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('dunkman');
  expect(nick).not.toBeChecked();
  expect(dunkman).toBeChecked();

  // Re-toggling the first switch should put its value back at the
  // beginning of the value!
  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('nick,dunkman');
  expect(nick).toBeChecked();
  expect(dunkman).toBeChecked();

  // Test unchecking all options
  await user.keyboard(' ');
  await user.tab();
  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('');
  expect(nick).not.toBeChecked();
  expect(dunkman).not.toBeChecked();

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(hiddenInput).toHaveAttribute('data-touched', 'true');
});
