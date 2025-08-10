// Note: most tests are in story play functions in Text.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Text } from './Text';

test.each(formLibraryTests)('Compatible with $library', async ({ Test }) => {
  const user = userEvent.setup();

  render(
    <Test
      Component={Text}
      fieldName="name"
      initialValue="Nick"
      erroneousValue="not Nick"
      componentProps={{
        label: 'Name',
      }}
    />,
  );

  const input = screen.getByLabelText('Name');
  expect(input).toHaveValue('Nick');
  expect(input).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(input).toHaveFocus();

  await user.clear(input);
  expect(input).toHaveValue('');

  await user.type(input, 'not Nick');
  expect(input).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(input).not.toHaveFocus();
  expect(input).toHaveAttribute('data-touched', 'true');
});
