import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { PrettyPrint } from '@/docs/PrettyPrint';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Currency } from './Currency';

const meta = {
  title: 'Form controls/Currency',
  component: Currency,
} satisfies Meta<typeof Currency>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledCurrency(props: React.ComponentProps<typeof Currency>) {
  const [value, setValue] = React.useState(props.value);
  const [count, setCount] = React.useState(0);

  return (
    <>
      <PrettyPrint className="mb-2" data={{ count, value }} />
      <Currency
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

function UncontrolledCurrency(props: React.ComponentProps<typeof Currency>) {
  const [value, setValue] = React.useState(props.defaultValue);
  const [count, setCount] = React.useState(0);

  return (
    <>
      <PrettyPrint className="mb-2" data={{ count, value }} />
      <Currency
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
    'aria-label': 'Empty Currency',
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
  render: (args) => <ControlledCurrency {...args} />,
  args: {
    value: '1234.56',
    'aria-label': 'Controlled Currency',
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
  render: (args) => <UncontrolledCurrency {...args} />,
  args: {
    defaultValue: '1234.56',
    'aria-label': 'Uncontrolled Currency',
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
    'aria-label': 'Disabled Currency',
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
//
export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Currency',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style on both the Currency & Field',
      async () => {
        expect(canvas.getByLabelText('Xs Currency')).toHaveClass('text-xs');
        expect(canvas.getByText('Xs Currency')).toHaveClass('text-xs');
        expect(canvas.getByText('$')).toHaveClass('text-sm');
      },
    );
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Currency',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the sm sizer style on both the Currency & Field',
      async () => {
        expect(canvas.getByLabelText('Sm Currency')).toHaveClass('text-sm');
        expect(canvas.getByText('Sm Currency')).toHaveClass('text-sm');
        expect(canvas.getByText('$')).toHaveClass('text-base');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Currency',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style on both the Currency & Field',
      async () => {
        expect(canvas.getByLabelText('Base Currency')).toHaveClass('text-base');
        expect(canvas.getByText('Base Currency')).toHaveClass('text-base');
        expect(canvas.getByText('$')).toHaveClass('text-lg');
      },
    );
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Currency',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the lg sizer style on both the Currency & Field',
      async () => {
        expect(canvas.getByLabelText('Lg Currency')).toHaveClass('text-lg');
        expect(canvas.getByText('Lg Currency')).toHaveClass('text-lg');
        expect(canvas.getByText('$')).toHaveClass('text-xl');
      },
    );
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Currency',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xl sizer style on both the Currency & Field',
      async () => {
        expect(canvas.getByLabelText('Xl Currency')).toHaveClass('text-xl');
        expect(canvas.getByText('Xl Currency')).toHaveClass('text-xl');
        expect(canvas.getByText('$')).toHaveClass('text-2xl');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Currency',
    defaultValue: '1.23',
    onChange: fn(),
  },
};

//export const AllControlStates: Story = {
//  tags: ['!dev', '!test'],
//  render: (_args) => (
//    <div className="flex flex-col gap-4">
//      <Text {...Empty.args} />
//      <Text {...Controlled.args} />
//      <Text {...Uncontrolled.args} />
//      <Text {...Disabled.args} />
//    </div>
//  ),
//};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Currency {...Xs.args} />
      <Currency {...Sm.args} />
      <Currency {...Base.args} />
      <Currency {...Lg.args} />
      <Currency {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
