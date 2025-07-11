// Note: most tests are in story play functions in Switch.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Switch } from './Switch';

function RHFTest() {
  const {
    register,
    formState: { touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { nameIsNick: true },
  });

  return (
    <Switch
      label="Name is Nick"
      {...register('nameIsNick')}
      data-touched={!!touchedFields.nameIsNick}
    />
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: { nameIsNick: true },
    onSubmit: () => {},
  });

  return (
    <Switch
      label="Name is Nick"
      {...form.getFieldProps({ name: 'nameIsNick', type: 'checkbox' })}
      data-touched={!!form.touched.nameIsNick}
    />
  );
}

test.each([
  { Component: RHFTest, library: 'React Hook Forms' },
  { Component: FormikTest, library: 'Formik' },
])('Compatible with $library', async ({ Component }) => {
  const user = userEvent.setup();

  render(<Component />);

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
