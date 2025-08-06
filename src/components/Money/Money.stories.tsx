import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { PrettyPrint } from '@/docs/PrettyPrint';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';
import { propDefaults } from '@/utils/propDefaults';

import { Money } from './Money';

const meta = {
  title: 'Form controls/Money',
  component: Money,
  argTypes: propDefaults<typeof Money>({
    currencySymbol: '$',
    decimalPoint: '.',
    decimalPlaces: 2,
    thousandsSeparator: ',',
    allowNegatives: false,
    disabled: false,
    sizer: 'base',
  }),
} satisfies Meta<typeof Money>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledMoney(props: React.ComponentProps<typeof Money>) {
  const [value, setValue] = React.useState(props.value);
  const [count, setCount] = React.useState(0);

  return (
    <>
      <PrettyPrint className="mb-2" data={{ count, value }} />
      <Money
        {...props}
        value={value}
        onChange={(event) => {
          setCount(count + 1);
          setValue(
            event.target.value === '1.23' ? '69.69' : event.target.value,
          );
        }}
      />
    </>
  );
}

function UncontrolledMoney(props: React.ComponentProps<typeof Money>) {
  const [value, setValue] = React.useState(props.defaultValue);
  const [count, setCount] = React.useState(0);

  return (
    <>
      <PrettyPrint className="mb-2" data={{ count, value }} />
      <Money
        {...props}
        defaultValue={value}
        onChange={(event) => {
          setCount(count + 1);
          setValue(
            event.target.value === '1.23' ? '69.69' : event.target.value,
          );
        }}
      />
    </>
  );
}

export const FieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '99.99',
    onChange: fn(),
  },
  //play: async ({ canvas, step }) => {
  //  const input = canvas.getByLabelText('A label*');
  //  const requiredAsterisk = canvas.getByTitle('required');

  //  await step('Assert accessibility of layout elements', async () => {
  //    expect(input).toHaveRole('spinbutton');
  //    expect(input).toHaveAccessibleDescription('A hint');
  //    expect(input).toHaveAccessibleErrorMessage('An error message');
  //    expect(requiredAsterisk).toHaveTextContent('*');
  //  });

  //  await step('Assert the error style', async () => {
  //    expect(input).toHaveClass('border-rose-800');
  //  });
  //},
};

export const Empty: Story = {
  tags: ['control-state'],
  args: {
    'aria-label': 'Empty Money',
    onChange: fn(),
  },
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Empty Text');
  //
  //    await step(
  //      'Assert Text is functional without an initial value',
  //      async () => {
  //        await userEvent.type(input, 'a');
  //        expect(input).toHaveValue('a');
  //        expect(args.onChange).toHaveBeenCalledOnce();
  //      },
  //    );
  //
  //    await step('Reset the value', async () => {
  //      await userEvent.type(input, '{backspace}');
  //      expect(input).toHaveValue('');
  //    });
  //  },
};
//
export const Controlled: Story = {
  tags: ['control-state'],
  render: (args) => <ControlledMoney {...args} />,
  args: {
    value: '1234.56',
    'aria-label': 'Controlled Money',
    onChange: fn(),
  },
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Controlled Text');
  //
  //    await step('Assert `value` works', async () => {
  //      expect(input).toHaveValue(args.value);
  //    });
  //
  //    await step(
  //      'Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change',
  //      async () => {
  //        await userEvent.type(input, 'a');
  //        expect(args.onChange).toHaveBeenCalledOnce();
  //        expect(input).toHaveValue(args.value);
  //      },
  //    );
  //  },
};
//
export const Uncontrolled: Story = {
  tags: ['control-state'],
  render: (args) => <UncontrolledMoney {...args} />,
  args: {
    defaultValue: '1234.56',
    'aria-label': 'Uncontrolled Money',
    onChange: fn(),
  },
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Uncontrolled Text');
  //
  //    await step('Assert `defaultValue` works', async () => {
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //
  //    await step(
  //      'Typing into the Text should amend the value, since it’s uncontrolled',
  //      async () => {
  //        await userEvent.type(input, 'a');
  //        expect(input).toHaveValue(`${args.defaultValue}a`);
  //        expect(args.onChange).toHaveBeenCalledOnce();
  //      },
  //    );
  //
  //    await step('Reset the value', async () => {
  //      await userEvent.type(input, '{backspace}');
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //  },
};
//
export const Disabled: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: '1234.56',
    disabled: true,
    'aria-label': 'Disabled Money',
    onChange: fn(),
  },
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Disabled Text');
  //
  //    await step('Assert disabled state', async () => {
  //      expect(input).toBeDisabled();
  //    });
  //
  //    // Typing should not fire any changes
  //    await step('Typing should have no effect', async () => {
  //      await userEvent.type(input, 'a');
  //      expect(args.onChange).not.toHaveBeenCalled();
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //  },
};

export const Euros: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: '1234.56',
    currencySymbol: '€',
    label: 'Euros',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    onChange: fn(),
  },
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Disabled Text');
  //
  //    await step('Assert disabled state', async () => {
  //      expect(input).toBeDisabled();
  //    });
  //
  //    // Typing should not fire any changes
  //    await step('Typing should have no effect', async () => {
  //      await userEvent.type(input, 'a');
  //      expect(args.onChange).not.toHaveBeenCalled();
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //  },
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
    <div className="flex gap-3">
      <Money
        label="US Dollars"
        value={usdValue}
        onChange={(event) =>
          setUsdValue(
            event.target.value === '' ? undefined : Number(event.target.value),
          )
        }
      />
      <Money
        label="Euros"
        value={
          usdValue === undefined
            ? undefined
            : (Number(usdValue) * exchangeRates.eur).toString()
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
        label="Bitcoin"
        value={
          usdValue === undefined
            ? undefined
            : (Number(usdValue) * exchangeRates.btc).toString()
        }
        onChange={(event) =>
          setUsdValue(
            event.target.value === ''
              ? undefined
              : Number(event.target.value) / exchangeRates.btc,
          )
        }
        decimalPlaces={5}
        currencySymbol="₿"
      />
    </div>
  );
}

export const CurrencyConversion: Story = {
  tags: ['!dev', '!test'],
  render: () => <CurrencyConverter />,
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style on both the Money & Field',
      async () => {
        expect(canvas.getByLabelText('Xs Money')).toHaveClass('text-xs');
        expect(canvas.getByText('Xs Money')).toHaveClass('text-xs');
        expect(canvas.getByText('$')).toHaveClass('text-xs');
      },
    );
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the sm sizer style on both the Money & Field',
      async () => {
        expect(canvas.getByLabelText('Sm Money')).toHaveClass('text-sm');
        expect(canvas.getByText('Sm Money')).toHaveClass('text-sm');
        expect(canvas.getByText('$')).toHaveClass('text-sm');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style on both the Money & Field',
      async () => {
        expect(canvas.getByLabelText('Base Money')).toHaveClass('text-base');
        expect(canvas.getByText('Base Money')).toHaveClass('text-base');
        expect(canvas.getByText('$')).toHaveClass('text-base');
      },
    );
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the lg sizer style on both the Money & Field',
      async () => {
        expect(canvas.getByLabelText('Lg Money')).toHaveClass('text-lg');
        expect(canvas.getByText('Lg Money')).toHaveClass('text-lg');
        expect(canvas.getByText('$')).toHaveClass('text-lg');
      },
    );
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xl sizer style on both the Money & Field',
      async () => {
        expect(canvas.getByLabelText('Xl Money')).toHaveClass('text-xl');
        expect(canvas.getByText('Xl Money')).toHaveClass('text-xl');
        expect(canvas.getByText('$')).toHaveClass('text-xl');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn(),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Money {...Empty.args} />
      <Money {...Controlled.args} />
      <Money {...Uncontrolled.args} />
      <Money {...Disabled.args} />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Money {...Xs.args} />
      <Money {...Sm.args} />
      <Money {...Base.args} />
      <Money {...Lg.args} />
      <Money {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
