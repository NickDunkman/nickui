// Note: most tests are in story play functions in Radio.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Radio } from './Radio';

function RHFTest() {
  const {
    register,
    formState: { touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { fruitRHF: 'orange' },
  });

  return (
    <fieldset data-touched={!!touchedFields.fruitRHF}>
      <Radio {...register('fruitRHF')} label="Apple" value="apple" />
      <Radio {...register('fruitRHF')} label="Orange" value="orange" />
    </fieldset>
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: { fruitFormik: 'orange' },
    onSubmit: () => {},
  });

  return (
    <fieldset data-touched={!!form.touched.fruitFormik}>
      <Radio
        {...form.getFieldProps({
          name: 'fruitFormik',
          type: 'radio',
          value: 'apple',
        })}
        label="Apple"
      />
      <Radio
        {...form.getFieldProps({
          name: 'fruitFormik',
          type: 'radio',
          value: 'orange',
        })}
        label="Orange"
      />
    </fieldset>
  );
}

test.each([
  { Component: RHFTest, library: 'React Hook Forms' },
  { Component: FormikTest, library: 'Formik' },
])('Compatible with $library', async ({ Component }) => {
  const user = userEvent.setup();

  render(<Component />);

  const fieldset = screen.getByRole('group');
  const apple = screen.getByLabelText('Apple');
  const orange = screen.getByLabelText('Orange');

  expect(fieldset).toHaveAttribute('data-touched', 'false');
  expect(apple).not.toBeChecked();
  expect(orange).toBeChecked();

  await user.tab();
  expect(orange).toHaveFocus();

  await user.keyboard('{ArrowUp}');
  expect(apple).toHaveFocus();
  expect(apple).toBeChecked();
  expect(orange).not.toBeChecked();

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(apple).not.toHaveFocus();
  expect(orange).not.toHaveFocus();
  expect(fieldset).toHaveAttribute('data-touched', 'true');
});
