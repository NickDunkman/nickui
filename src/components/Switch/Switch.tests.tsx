// Note: most tests are in story play functions in Switch.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Switch } from './Switch';

test.each(formLibraryTests)(
  'Compatible with $libraryName',
  async ({ LibrarySetup }) => {
    const user = userEvent.setup();

    render(
      <LibrarySetup fieldName="nameIsNick" isCheckbox initialValue={true}>
        {({ props, touched }) => (
          <Switch {...props()} label="Name is Nick" data-touched={touched} />
        )}
      </LibrarySetup>,
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
  },
);
