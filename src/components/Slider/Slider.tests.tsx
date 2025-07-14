// Note: more tests are in story play functions in Slider.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Slider } from './Slider';

function RHFTest() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'all',
    defaultValues: { score: '50' },
  });

  return (
    <Slider
      label="Score"
      {...register('score', {
        validate: (value) => value !== '51' || 'That’s erroneous',
      })}
      error={errors.score?.message}
      data-touched={!!touchedFields.score}
    />
  );
}

function FormikTest() {
  const form = useFormik({
    initialValues: {
      score: '50',
    },
    onSubmit: () => {},
    validate: (values) => {
      if (values.score === '51') {
        return { score: 'That’s erroneous' };
      }
    },
  });

  return (
    <Slider
      label="Score"
      {...form.getFieldProps('score')}
      error={form.errors.score}
      data-touched={!!form.touched.score}
    />
  );
}

test.each([
  { Component: RHFTest, library: 'React Hook Forms' },
  { Component: FormikTest, library: 'Formik' },
])('Compatible with $library', async ({ Component }) => {
  const user = userEvent.setup();

  render(<Component />);

  const slider = screen.getByLabelText('Score');
  expect(slider).toHaveAttribute('data-touched', 'false');

  // Test that the value & visual representation of the value was able
  // to be parsed from the way the library passes down the initial value
  expect(slider).toHaveValue(50);
  expect(screen.getByTestId('fill')).toHaveStyle({ right: '50%' });

  await user.tab();
  expect(slider).toHaveFocus();

  await user.keyboard('{ArrowRight}');
  expect(slider).toHaveValue(51);
  expect(slider).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(slider).not.toHaveFocus();
  expect(slider).toHaveAttribute('data-touched', 'true');
});
