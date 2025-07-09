// Note: most tests are in story play functions in Checkboxes.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Checkboxes } from './Checkboxes';

test('Compatible with React Hook Form', async () => {
  function RHFTest() {
    const {
      register,
      formState: { touchedFields },
    } = useForm({
      mode: 'all',
      defaultValues: { name: 'nick,dunkman' },
    });

    return (
      <Checkboxes
        {...register('name')}
        options={[
          { value: 'nick', label: 'Nick' },
          { value: 'dunkman', label: 'Dunkman' },
        ]}
        data-touched={!!touchedFields.name}
      />
    );
  }

  const user = userEvent.setup();

  render(<RHFTest />);

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

  // Re-toggling the first checkbox should put its value back at the
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

test('Compatible with Formik', async () => {
  function FormikTest() {
    const form = useFormik({
      initialValues: { name: 'nick,dunkman' },
      onSubmit: () => {},
    });

    return (
      <Checkboxes
        {...form.getFieldProps('name')}
        options={[
          { value: 'nick', label: 'Nick' },
          { value: 'dunkman', label: 'Dunkman' },
        ]}
        data-touched={!!form.touched.name}
      />
    );
  }

  const user = userEvent.setup();

  render(<FormikTest />);

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

  // Re-toggling the first checkbox should put its value back at the
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
