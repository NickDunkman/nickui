// Note: most tests are in story play functions in Switches.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Switches } from './Switches';

test.each(formLibraryTests)('Compatible with $library', async ({ Test }) => {
  const user = userEvent.setup();

  render(
    <Test fieldName="name" initialValue="nick,dunkman" erroneousValue="dunkman">
      {({ props, error }) => (
        <Switches
          {...props()}
          label="Name"
          error={error}
          options={[
            { value: 'nick', label: 'Nick' },
            { value: 'dunkman', label: 'Dunkman' },
          ]}
        />
      )}
    </Test>,
  );

  const group = screen.getByRole('group');
  const hiddenInput = screen.getByTestId('the-hidden-input');
  const nick = screen.getByLabelText('Nick');
  const dunkman = screen.getByLabelText('Dunkman');

  expect(hiddenInput).toHaveAttribute('data-touched', 'false');
  expect(hiddenInput).toHaveValue('nick,dunkman');
  expect(group).not.toHaveAccessibleErrorMessage();
  expect(nick).toBeChecked();
  expect(dunkman).toBeChecked();

  await user.tab();
  expect(nick).toHaveFocus();

  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('dunkman');
  expect(group).toHaveAccessibleErrorMessage('That’s erroneous');
  expect(nick).not.toBeChecked();
  expect(dunkman).toBeChecked();

  // Re-toggling the first switch should put its value back at the
  // beginning of the value!
  await user.keyboard(' ');
  expect(hiddenInput).toHaveValue('nick,dunkman');
  expect(group).not.toHaveAccessibleErrorMessage();
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
