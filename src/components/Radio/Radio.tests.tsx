// Note: most tests are in story play functions in Radio.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Radio } from './Radio';

test.each(formLibraryTests)(
  'Compatible with $libraryName',
  async ({ LibrarySetup }) => {
    const user = userEvent.setup();

    render(
      <LibrarySetup fieldName="fruit" isRadio initialValue="orange">
        {({ props, touched }) => (
          <fieldset data-touched={touched}>
            <Radio {...props('apple')} label="Apple" />
            <Radio {...props('orange')} label="Orange" />
          </fieldset>
        )}
      </LibrarySetup>,
    );

    const fieldset = screen.getByRole('group');
    const apple = screen.getByLabelText('Apple');
    const orange = screen.getByLabelText('Orange');

    expect(fieldset).toHaveAttribute('data-touched', 'false');
    expect(apple).not.toBeChecked();
    expect(orange).toBeChecked();

    await user.tab();
    expect(orange).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(apple).toHaveFocus();
    expect(apple).toBeChecked();
    expect(orange).not.toBeChecked();

    // Ensures that onBlur is functioning properly
    await user.tab();
    expect(apple).not.toHaveFocus();
    expect(orange).not.toHaveFocus();
    expect(fieldset).toHaveAttribute('data-touched', 'true');
  },
);
