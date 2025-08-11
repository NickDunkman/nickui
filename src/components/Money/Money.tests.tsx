// Note: more tests are in story play functions in Money.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Money } from './Money';

test.each(formLibraryTests)(
  'Compatible with $libraryName',
  async ({ LibrarySetup }) => {
    const user = userEvent.setup();

    render(
      <LibrarySetup
        fieldName="cost"
        initialValue="99999.99"
        erroneousValue="0.00"
      >
        {({ props, error, touched }) => (
          <Money
            {...props()}
            label="Cost"
            error={error}
            data-touched={touched}
          />
        )}
      </LibrarySetup>,
    );

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('99,999.99');
    expect(input).toHaveAttribute('data-touched', 'false');

    await user.tab();
    expect(input).toHaveFocus();

    await user.clear(input);
    expect(input).toHaveValue('');

    await user.type(input, '0.00');
    expect(input).toHaveAccessibleErrorMessage('That’s erroneous');

    // Ensures that onBlur is functioning properly
    await user.tab();
    expect(input).not.toHaveFocus();
    expect(input).toHaveAttribute('data-touched', 'true');
  },
);
