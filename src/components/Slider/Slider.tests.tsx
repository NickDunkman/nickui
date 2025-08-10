// Note: more tests are in story play functions in Slider.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Slider } from './Slider';

test.each(formLibraryTests)('Compatible with $library', async ({ Test }) => {
  const user = userEvent.setup();

  render(
    <Test
      Component={Slider}
      fieldName="score"
      initialValue="50"
      erroneousValue="51"
      componentProps={{
        label: 'Score',
      }}
    />,
  );

  const slider = screen.getByLabelText('Score');
  expect(slider).toHaveAttribute('data-touched', 'false');

  // Test that the value & visual representation of the value was able
  // to be parsed from the way the library passes down the initial value
  expect(slider).toHaveValue(50);
  expect(screen.getByTestId('fill')).toHaveStyle({ right: '50%' });

  await user.tab();
  expect(slider).toHaveFocus();

  await user.keyboard('{ArrowRight}');
  expect(slider).toHaveValue(51);
  expect(slider).toHaveAccessibleErrorMessage('That’s erroneous');

  // Ensures that onBlur is functioning properly
  await user.tab();
  expect(slider).not.toHaveFocus();
  expect(slider).toHaveAttribute('data-touched', 'true');
});
