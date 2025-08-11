// Note: most tests are in story play functions in Checkbox.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Checkbox } from './Checkbox';

test.each(formLibraryTests)('Compatible with $library', async ({ Test }) => {
  const user = userEvent.setup();

  render(
    <Test
      Component={Checkbox}
      fieldName="nameIsNick"
      initialValue={true}
      isCheckbox
      componentProps={{
        label: 'Name is Nick',
      }}
    />,
  );

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
