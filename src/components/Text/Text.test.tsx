import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useFormik } from 'formik';
import * as React from 'react';

import { Text } from './Text';

test('Compatible with Formik', async () => {
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
        {...form.getFieldProps('name')}
        error={form.errors.name}
        data-touched={form.touched.name}
      />
    );
  }

  const user = userEvent.setup();

  render(<FormikTest />);

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();

  await user.tab();
  expect(input).toHaveFocus();

  await user.clear(input);
  expect(input).toHaveValue('');

  await user.type(input, 'erroneous value');
  expect(input).toHaveAccessibleErrorMessage('That’s erroneous');

  await user.tab();
  expect(input).not.toHaveFocus();

  // This ensures that onBlur is functioning properly
  expect(input).toHaveAttribute('data-touched', 'true');
});
