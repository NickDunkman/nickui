// Note: most tests are in story play functions in Select.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Select } from './Select';

test.each(formLibraryTests)(
  'Compatible with $libraryName',
  async ({ LibrarySetup }) => {
    const user = userEvent.setup();

    render(
      <LibrarySetup fieldName="language" initialValue="fr" erroneousValue="en">
        {({ props, error, touched }) => (
          <Select
            {...props()}
            label="Language"
            error={error}
            data-touched={touched}
          >
            <option value="en"> English </option>
            <option value="fr"> Français </option>
          </Select>
        )}
      </LibrarySetup>,
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
  },
);
