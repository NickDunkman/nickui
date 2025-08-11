// Note: more tests are in story play functions in TextArea.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { TextArea } from './TextArea';

test.each(formLibraryTests)(
  'Compatible with $libraryName',
  async ({ LibrarySetup }) => {
    const user = userEvent.setup();

    render(
      <LibrarySetup
        fieldName="name"
        initialValue="Nick"
        erroneousValue="not Nick"
      >
        {({ props, error, touched }) => (
          <TextArea
            {...props()}
            label="Name"
            error={error}
            data-touched={touched}
          />
        )}
      </LibrarySetup>,
    );

    const textarea = screen.getByLabelText('Name');
    expect(textarea).toHaveValue('Nick');
    expect(textarea).toHaveAttribute('data-touched', 'false');

    await user.tab();
    expect(textarea).toHaveFocus();

    await user.clear(textarea);
    expect(textarea).toHaveValue('');

    await user.type(textarea, 'not Nick');
    expect(textarea).toHaveAccessibleErrorMessage('That’s erroneous');

    // Ensures that onBlur is functioning properly
    await user.tab();
    expect(textarea).not.toHaveFocus();
    expect(textarea).toHaveAttribute('data-touched', 'true');
  },
);
