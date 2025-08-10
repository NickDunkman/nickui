// Note: most tests are in story play functions in Select.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Select } from './Select';

test.each(formLibraryTests)('Compatible with $library', async ({ Test }) => {
  const user = userEvent.setup();

  render(
    <Test
      Component={Select}
      fieldName="language"
      initialValue="fr"
      erroneousValue="en"
      componentProps={{
        label: 'Language',
        children: [
          <option value="en" key="en">
            English
          </option>,
          <option value="fr" key="fr">
            Français
          </option>,
        ],
      }}
    />,
  );

  const select = screen.getByLabelText('Language');
  expect(select).toHaveValue('fr');
  expect(select).not.toHaveAccessibleErrorMessage();
  expect(select).toHaveAttribute('data-touched', 'false');

  await user.tab();
  expect(select).toHaveFocus();

  await user.selectOptions(select, 'en');
  expect(select).toHaveValue('en');
  expect(select).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(select).not.toHaveFocus();
  expect(select).toHaveAttribute('data-touched', 'true');
});
