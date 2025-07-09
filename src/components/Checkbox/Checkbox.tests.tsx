import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Checkbox } from './Checkbox';

test('Compatible with React Hook Form', async () => {
  function RHFTest() {
    const {
      register,
      formState: { touchedFields },
    } = useForm({
      mode: 'all',
      defaultValues: { nameIsNick: true },
    });

    return (
      <Checkbox
        label="Name is Nick"
        {...register('nameIsNick')}
        data-touched={!!touchedFields.nameIsNick}
      />
    );
  }

  const user = userEvent.setup();

  render(<RHFTest />);

  const checkbox = screen.getByLabelText('Name is Nick');
  expect(checkbox).toBeChecked();
  expect(checkbox).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(checkbox).toHaveFocus();

  await user.keyboard(' ');
  expect(checkbox).not.toBeChecked();

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(checkbox).not.toHaveFocus();
  expect(checkbox).toHaveAttribute('data-touched', 'true');
});

test('Compatible with Formik', async () => {
  function FormikTest() {
    const form = useFormik({
      initialValues: { nameIsNick: true },
      onSubmit: () => {},
    });

    return (
      <Checkbox
        label="Name is Nick"
        {...form.getFieldProps({ name: 'nameIsNick', type: 'checkbox' })}
        data-touched={!!form.touched.nameIsNick}
      />
    );
  }

  const user = userEvent.setup();

  render(<FormikTest />);

  const checkbox = screen.getByLabelText('Name is Nick');
  expect(checkbox).toBeChecked();
  expect(checkbox).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(checkbox).toHaveFocus();

  await user.keyboard(' ');
  expect(checkbox).not.toBeChecked();

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(checkbox).not.toHaveFocus();
  expect(checkbox).toHaveAttribute('data-touched', 'true');
});
