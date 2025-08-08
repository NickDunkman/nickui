import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { SIZERS } from '@/constants';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/utils/storyArgsTyper';

import { Money } from './Money';

const meta = {
  title: 'Form controls/Money',
  component: Money,
  argTypes: storyArgsTyper<typeof Money>({
    defaultValues: {
      currencySymbol: '$',
      decimalPoint: '.',
      decimalPlaces: 2,
      thousandsSeparator: ',',
      allowNegatives: false,
      disabled: false,
      sizer: 'base',
    },
    types: {
      defaultValue: ['string', 'number'],
      sizer: SIZERS,
      value: ['string', 'number'],
    },
  }),
} satisfies Meta<typeof Money>;

export default meta;
type Story = StoryObj<typeof meta>;

export const fieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '1234567.89',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');

    await step('Assert accessibility of layout elements', async () => {
      expect(input).toHaveRole('spinbutton');
      expect(input).toHaveAccessibleName('A label* $');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert default currency formatting', async () => {
      expect(input).toHaveValue('1,234,567.89');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('$');
    });

    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  },
};

export const empty: Story = {
  tags: ['control-state'],
  args: {
    label: 'Empty',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Empty');

    await step(
      'Assert Money is functional without an initial value',
      async () => {
        await userEvent.type(input, '1');
        expect(input).toHaveValue('1');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('');
    });
  },
};

export const controlled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: '1234.56',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Controlled');

    await step('Assert `value` gets formatted', async () => {
      expect(input).toHaveValue('1,234.56');
    });

    await step(
      'Try adding text. `onChange` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update',
      async () => {
        await userEvent.tab();
        expect(input).toHaveFocus();
        await userEvent.type(input, '{backspace}');
        expect(input).toHaveValue('1234.5');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      expect(input).toHaveValue('1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  },
};

export const uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled',
    defaultValue: '1234.56',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Uncontrolled');

    await step('Assert `defaultValue` gets formatted', async () => {
      expect(input).toHaveValue('1,234.56');
    });

    await step(
      'Try adding text. `onChange` should fire, & the <input> value should update',
      async () => {
        await userEvent.tab();
        expect(input).toHaveFocus();
        await userEvent.type(input, '{backspace}');
        expect(input).toHaveValue('1234.5');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      expect(input).toHaveValue('1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  },
};

export const disabled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: '1234.56',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Disabled');

    await step('Assert disabled state', async () => {
      expect(input).toBeDisabled();
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(input, '{backspace}');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('1,234.56');
    });
  },
};

export const euros: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: '1234567.89',
    currencySymbol: '€',
    label: 'Euros',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    onChange: fn(),
  },
  play: async ({ canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Euros');

    await step('Assert default currency formatting', async () => {
      expect(input).toHaveValue('1.234.567,89');
      expect(input).toHaveAccessibleName('Euros €');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('€');
    });

    await step(
      'Assert deformatting abides the currency configuration',
      async () => {
        await userEvent.tab();
        expect(input).toHaveFocus();
        await userEvent.type(input, '{backspace}');
        expect(input).toHaveValue('1234567,8');
      },
    );

    await step('Reset to initial state', async () => {
      await userEvent.type(input, '9');
      expect(input).toHaveValue('1234567,89');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  },
};

function CurrencyConverter() {
  const [exchangeRates, setExchangeRates] = React.useState<{
    btc: number;
    eur: number;
  }>();
  const [usdValue, setUsdValue] = React.useState<number | undefined>(10000);

  React.useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
    )
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates({
          btc: data.usd.btc,
          eur: data.usd.eur,
        });
      });
  }, []);

  if (!exchangeRates) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Money
        className="sm:flex-1"
        label="US Dollars"
        value={usdValue}
        onChange={(event) =>
          setUsdValue(
            event.target.value === '' ? undefined : Number(event.target.value),
          )
        }
      />
      <Money
        className="sm:flex-1"
        label="Euros"
        value={
          usdValue === undefined
            ? undefined
            : Number(usdValue) * exchangeRates.eur
        }
        onChange={(event) =>
          setUsdValue(
            event.target.value === ''
              ? undefined
              : Number(event.target.value) / exchangeRates.eur,
          )
        }
        currencySymbol="€"
        decimalPoint=","
        thousandsSeparator="."
      />
      <Money
        className="sm:flex-1"
        label="Bitcoin"
        value={
          usdValue === undefined
            ? undefined
            : Number(usdValue) * exchangeRates.btc
        }
        onChange={(event) =>
          setUsdValue(
            event.target.value === ''
              ? undefined
              : Number(event.target.value) / exchangeRates.btc,
          )
        }
        decimalPlaces={8}
        currencySymbol="₿"
      />
    </div>
  );
}

export const currencyConverter: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => <CurrencyConverter />,
  parameters: {
    source: `
    function CurrencyConverter() {
      const [usdValue, setUsdValue] = React.useState<number | undefined>(10000);
      const [exchangeRates, setExchangeRates] = React.useState<{
        btc: number;
        eur: number;
      }>();

      React.useEffect(() => {
        fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
        )
          .then((response) => response.json())
          .then((data) => {
            setExchangeRates({
              btc: data.usd.btc,
              eur: data.usd.eur,
            });
          });
      }, []);

      if (!exchangeRates) {
        return null;
      }

      return (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Money
            className="sm:flex-1"
            label="US Dollars"
            value={usdValue}
            onChange={(event) =>
              setUsdValue(
                event.target.value === '' ? undefined : Number(event.target.value),
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Euros"
            currencySymbol="€"
            decimalPoint=","
            thousandsSeparator="."
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.eur
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.eur,
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Bitcoin"
            currencySymbol="₿"
            decimalPlaces={8}
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.btc
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.btc,
              )
            }
          />
        </div>
      );
    }
    `,
  },
};

export const allowNegatives: Story = {
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    allowNegatives: true,
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Money',
    sizer: 'xs',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Xs Money');
    const field = input.closest('[data-nickui-component="Money"]');

    await step(
      'Assert the xs sizer style on both the Money & Field',
      async () => {
        expect(input).toHaveClass('text-xs');
        expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
        expect(canvas.getByText('$')).toHaveClass('text-xs');
      },
    );
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Money',
    sizer: 'sm',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Sm Money');
    const field = input.closest('[data-nickui-component="Money"]');

    await step(
      'Assert the sm sizer style on both the Money & Field',
      async () => {
        expect(input).toHaveClass('text-sm');
        expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
        expect(canvas.getByText('$')).toHaveClass('text-sm');
      },
    );
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Money',
    sizer: 'base',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Base Money');
    const field = input.closest('[data-nickui-component="Money"]');

    await step(
      'Assert the base sizer style on both the Money & Field',
      async () => {
        expect(input).toHaveClass('text-base');
        expect(field).toHaveAttribute('data-nickui-sizer', 'base');
        expect(canvas.getByText('$')).toHaveClass('text-base');
      },
    );
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Money',
    sizer: 'lg',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Lg Money');
    const field = input.closest('[data-nickui-component="Money"]');

    await step(
      'Assert the lg sizer style on both the Money & Field',
      async () => {
        expect(input).toHaveClass('text-lg');
        expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
        expect(canvas.getByText('$')).toHaveClass('text-lg');
      },
    );
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Money',
    sizer: 'xl',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Xl Money');
    const field = input.closest('[data-nickui-component="Money"]');

    await step(
      'Assert the xl sizer style on both the Money & Field',
      async () => {
        expect(input).toHaveClass('text-xl');
        expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
        expect(canvas.getByText('$')).toHaveClass('text-xl');
      },
    );
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Money {...empty.args} className="sm:flex-1" />
      <Money {...controlled.args} className="sm:flex-1" />
      <Money {...uncontrolled.args} className="sm:flex-1" />
      <Money {...disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Money {...xs.args} className="sm:flex-12" />
      <Money {...sm.args} className="sm:flex-14" />
      <Money {...base.args} className="sm:flex-16" />
      <Money {...lg.args} className="sm:flex-18" />
      <Money {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
  ),
};
