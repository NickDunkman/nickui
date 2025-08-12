// Note: more tests are in story play functions in Money.stories.tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';

import { Button } from '@/components/Button';
import { formLibraryTests } from '@/dev/tests/formLibraryTests';

import { Money } from './Money';

const fancyUsd = {
  currencySymbol: '$',
  decimalPoint: '.',
  decimalPlaces: 3, // fancy!
  thousandsSeparator: ',',
};

const euros = {
  currencySymbol: '€',
  decimalPoint: ',',
  decimalPlaces: 2,
  thousandsSeparator: '.',
};

function CurrencySwapper({
  defaultValue,
  onChange,
}: {
  defaultValue?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const [format, setFormat] = React.useState(fancyUsd);

  return (
    <div>
      <Money
        {...format}
        defaultValue={defaultValue}
        onChange={onChange}
        label="Cost"
      />
      <Button onClick={() => setFormat(euros)}>Switch to Euros</Button>
      <Button onClick={() => setFormat(fancyUsd)}>Switch to Fancy USD</Button>
    </div>
  );
}

function eventValue(value: string) {
  return expect.objectContaining({
    target: expect.objectContaining({
      value,
    }),
  });
}

describe('Money', async () => {
  test.each(formLibraryTests)(
    'is compatible with $libraryName',
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

      await user.keyboard('0.00');
      expect(input).toHaveAccessibleErrorMessage('That’s erroneous');

      // Ensures that onBlur is functioning properly
      await user.tab();
      expect(input).not.toHaveFocus();
      expect(input).toHaveAttribute('data-touched', 'true');
    },
  );

  test('deformats/reformats on focus/blur', async () => {
    const user = userEvent.setup();
    render(<Money label="Cost" defaultValue="1234.56" />);
    const input = screen.getByLabelText('Cost');

    // Initially formatted
    expect(input).toHaveValue('1,234.56');

    // Deformats on focus
    await user.tab();
    expect(input).toHaveFocus();
    expect(input).toHaveValue('1234.56');
    await user.keyboard('{ArrowRight}{backspace}');
    expect(input).toHaveValue('1234.5');

    // Reformats on blur (including filling out full decimalPlaces)
    await user.tab();
    expect(input).toHaveValue('1,234.50');
  });

  test('prepends with a zero when first character is the decimal point', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{ArrowRight}.');
    expect(input).toHaveValue('0.');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('0.00'));

    // Removing the decimal should keep the padded zero. Therefore the numerish
    // value doesn’t change, and onChange isn’t called.
    onChange.mockClear();
    await user.keyboard('{backspace}');
    expect(input).toHaveValue('0');
    expect(onChange).not.toHaveBeenCalled();
  });

  test('negative sign isn’t allowed by default', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="" onChange={onChange} />);

    const input = screen.getByLabelText<HTMLInputElement>('Cost');
    expect(input).toHaveValue('');

    // Blocked as first character input
    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('-');
    expect(input).toHaveValue('');
    expect(onChange).not.toHaveBeenCalled();

    // Also blocked when adding before existing value
    await user.keyboard('1');
    expect(input).toHaveValue('1');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('1.00'));
    await user.keyboard('{ArrowLeft}');
    expect(input.selectionStart).toStrictEqual(0);
    onChange.mockClear();
    await user.keyboard('-');
    expect(input).toHaveValue('1');
    expect(onChange).not.toHaveBeenCalled();
  });

  test('thousands separators can’t be added manually', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="1234" onChange={onChange} />);

    const input = screen.getByLabelText<HTMLInputElement>('Cost');
    expect(input).toHaveValue('1,234.00');

    // Can’t type the thousands separator
    await user.tab();
    expect(input).toHaveValue('1234.00');
    await user.keyboard('{ArrowLeft}{ArrowRight}');
    expect(input.selectionStart).toStrictEqual(1);
    await user.type(input, ',');
    expect(input).toHaveValue('1234.00');
    expect(onChange).not.toHaveBeenCalled();
  });

  test('can increment the value using the up arrow', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="1" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('1.00');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('2.00');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('2.00'));

    // Preserves decimal point suffix when incrementing
    onChange.mockClear();
    await user.keyboard('{ArrowRight}{backspace}{backspace}');
    expect(input).toHaveValue('2.');
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('3.');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('3.00'));

    // Preserves partial decimal places when incrementing
    await user.keyboard('1');
    expect(input).toHaveValue('3.1');
    onChange.mockClear();
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('4.1');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('4.10'));
  });

  test('can decrement the value using the down arrow', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="1.23" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('1.23');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(input).toHaveValue('0.23');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('0.23'));

    // Stops at zero when decrementing from a number < 1
    onChange.mockClear();
    await user.keyboard('{ArrowDown}');
    expect(input).toHaveValue('0.00');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('0.00'));

    // Was fully at zero, so now it increments up to 1
    onChange.mockClear();
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('1.00');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('1.00'));
  });

  test('can increment by 10 on shift + up arrow', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="1.23" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('1.23');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{Shift>}{ArrowUp}{/Shift}');
    expect(input).toHaveValue('11.23');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('11.23'));
  });

  test('can decrement by 10 on shift + down arrow', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Money label="Cost" defaultValue="11.23" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('11.23');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{Shift>}{ArrowDown}{/Shift}');
    expect(input).toHaveValue('1.23');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('1.23'));

    // Stops at zero when decrementing from a number < 10
    onChange.mockClear();
    await user.keyboard('{Shift>}{ArrowDown}{/Shift}');
    expect(input).toHaveValue('0.00');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('0.00'));

    // Was fully at zero, so now it increments up to 10
    onChange.mockClear();
    await user.keyboard('{Shift>}{ArrowUp}{/Shift}');
    expect(input).toHaveValue('10.00');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('10.00'));
  });

  test('cursor position is maintained when using incremental arrow keys', async () => {
    const user = userEvent.setup();
    render(<Money label="Cost" defaultValue="98" />);

    const input = screen.getByLabelText<HTMLInputElement>('Cost');
    expect(input).toHaveValue('98.00');

    // Can’t type the thousands separator
    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{ArrowLeft}{ArrowRight}');
    expect(input.selectionStart).toStrictEqual(1);

    // cursor stays put on incrementing up
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('99.00');
    expect(input.selectionStart).toStrictEqual(1);

    // on next increment, a new order of magnitude is added to the value, so
    // it bumps the cursor over one spot to stay in the same place
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('100.00');
    expect(input.selectionStart).toStrictEqual(2);

    // going back down to a lower order of magnitude moves the cursor back over
    await user.keyboard('{ArrowDown}');
    expect(input).toHaveValue('99.00');
    expect(input.selectionStart).toStrictEqual(1);
  });

  test('can dynamically reformat to a different currency', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<CurrencySwapper defaultValue="1234567.899" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('1,234,567.899');
    expect(input).toHaveAccessibleName('Cost $');

    // rounding is done when reducing decimal places
    await user.click(screen.getByText('Switch to Euros'));
    expect(input).toHaveValue('1.234.567,90');
    expect(input).toHaveAccessibleName('Cost €');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('1234567.90'));

    // increasing decimal places always just pads with zeros
    onChange.mockClear();
    await user.click(screen.getByText('Switch to Fancy USD'));
    expect(input).toHaveValue('1,234,567.900');
    expect(input).toHaveAccessibleName('Cost $');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('1234567.900'));
  });

  test('empty inputs are still empty after reformatting', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<CurrencySwapper defaultValue="" onChange={onChange} />);

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('');

    await user.click(screen.getByText('Switch to Euros'));
    expect(input).toHaveValue('');
    expect(onChange).not.toHaveBeenCalled();
  });

  test('can type a negative sign when negatives are allowed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Money allowNegatives label="Cost" defaultValue="" onChange={onChange} />,
    );

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('');

    // type negative sign
    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('-');
    expect(input).toHaveValue('-');
    expect(onChange).not.toHaveBeenCalled(); // no numeric change yet!

    // can’t type another one!
    await user.keyboard('-');
    expect(input).toHaveValue('-');
    expect(onChange).not.toHaveBeenCalled();
  });

  test('slips in a zero when first two characters are "-."', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Money allowNegatives label="Cost" defaultValue="" onChange={onChange} />,
    );

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('-.');
    expect(input).toHaveValue('-0.');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('0.00'));

    // cursor stayed in the proper spot, so continuing to type adds digits
    // after the decimal
    onChange.mockClear();
    await user.keyboard('1');
    expect(input).toHaveValue('-0.1');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('-0.10'));
  });

  test('Can decrement below zero using the down arrow when negatives are allowed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Money
        allowNegatives
        label="Cost"
        defaultValue="0.12"
        onChange={onChange}
      />,
    );

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('0.12');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(input).toHaveValue('-0.88');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('-0.88'));

    // value is right when jumping back into the positives
    onChange.mockClear();
    await user.keyboard('{ArrowUp}');
    expect(input).toHaveValue('0.12');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('0.12'));
  });

  test('Can decrement below zero using shift + the down arrow when negatives are allowed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Money
        allowNegatives
        label="Cost"
        defaultValue="1.23"
        onChange={onChange}
      />,
    );

    const input = screen.getByLabelText('Cost');
    expect(input).toHaveValue('1.23');

    await user.tab();
    expect(input).toHaveFocus();
    await user.keyboard('{Shift>}{ArrowDown}{/Shift}');
    expect(input).toHaveValue('-8.77');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('-8.77'));

    // value is right when jumping back into the positives
    onChange.mockClear();
    await user.keyboard('{Shift>}{ArrowUp}{/Shift}');
    expect(input).toHaveValue('1.23');
    expect(onChange).toHaveBeenCalledExactlyOnceWith(eventValue('1.23'));
  });
});
