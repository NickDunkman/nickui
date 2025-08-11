// Note: most tests are in story play functions in Radios.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Radios } from './Radios';

test.each(formLibraryTests)('Compatible with $library', async ({ Test }) => {
  const user = userEvent.setup();

  render(
    <Test fieldName="language" initialValue="fr" erroneousValue="en">
      {({ props, error, touched }) => (
        <Radios
          {...props()}
          label="Language"
          error={error}
          options={[
            { value: 'en', label: 'English' },
            { value: 'fr', label: 'Français' },
          ]}
          data-touched={touched}
        />
      )}
    </Test>,
  );

  const group = screen.getByRole('group');
  const hiddenInput = screen.getByTestId('the-hidden-input');
  const english = screen.getByLabelText('English');
  const français = screen.getByLabelText('Français');

  expect(hiddenInput).toHaveAttribute('data-touched', 'false');
  expect(hiddenInput).toHaveValue('fr');
  expect(group).not.toHaveAccessibleErrorMessage();
  expect(english).not.toBeChecked();
  expect(français).toBeChecked();

  await user.tab();
  expect(français).toHaveFocus();

  await user.keyboard('{ArrowUp}');
  expect(english).toHaveFocus();

  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('en');
  expect(group).toHaveAccessibleErrorMessage('That’s erroneous');
  expect(english).toBeChecked();
  expect(français).not.toBeChecked();

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(hiddenInput).toHaveAttribute('data-touched', 'true');
});
