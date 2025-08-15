import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { getStoryArgTypes } from '@/dev/stories/getStoryArgTypes';
import { expectDelayedValue } from '@/dev/tests/expectDelayedValue';

import { Numeric } from './Numeric';

const meta = {
  title: 'Form controls/Numeric',
  component: Numeric,
  argTypes: getStoryArgTypes<typeof Numeric>({
    formControl: {
      isDisableable: true,
      valueType: ['string', 'number'],
    },
    isSizerable: true,
    defaultValues: {
      decimalPoint: '.',
      decimalPlaces: 0,
      thousandsSeparator: ',',
      allowNegatives: false,
    },
    types: {
      defaultValue: ['string', 'number'],
      value: ['string', 'number'],
    },
  }),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // The accessibility checker complains that it can't check the color
            // contrast of the placeholder input, since it is overlapped by the
            // working input. But it’s good. So just ignore that particular
            // check.
            id: 'color-contrast',
            selector: '*:not([data-testid="placeholder-input"])',
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Numeric>;

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
      expect(input).toHaveAccessibleName('A label*');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert default numeric formatting', async () => {
      await expectDelayedValue(input, '1,234,567');
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
      'Assert Numeric is functional without an initial value',
      async () => {
        await userEvent.type(input, '1');
        await expectDelayedValue(input, '1');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      await expectDelayedValue(input, '');
    });
  },
};

export const controlled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: '1234.56',
    decimalPlaces: 2,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Controlled');

    await step('Assert `value` gets formatted', async () => {
      await expectDelayedValue(input, '1,234.56');
    });

    await step(
      'Try adding text. `onChange` should fire, & <Numeric> allows the input value to change even when the controlledValue doesn’t update',
      async () => {
        await userEvent.tab();
        expect(input).toHaveFocus();
        await userEvent.type(input, '{backspace}');
        await expectDelayedValue(input, '1234.5');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      await expectDelayedValue(input, '1234.56');
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
    decimalPlaces: 2,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Uncontrolled');

    await step('Assert `defaultValue` gets formatted', async () => {
      await expectDelayedValue(input, '1,234.56');
    });

    await step(
      'Try adding text. `onChange` should fire, & the <input> value should update',
      async () => {
        await userEvent.tab();
        expect(input).toHaveFocus();
        await userEvent.type(input, '{backspace}');
        await expectDelayedValue(input, '1234.5');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      await expectDelayedValue(input, '1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  },
};

export const disabled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: '1234',
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
      await expectDelayedValue(input, '1,234');
    });
  },
};

export const european: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: '1234567.89',
    label: 'European number',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    decimalPlaces: 2,
    onChange: fn(),
  },
  play: async ({ canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('European number');

    await step('Assert proper formatting', async () => {
      await expectDelayedValue(input, '1.234.567,89');
    });

    await step(
      'Assert deformatting abides the european configuration',
      async () => {
        await userEvent.tab();
        expect(input).toHaveFocus();
        await userEvent.type(input, '{backspace}');
        await expectDelayedValue(input, '1234567,8');
      },
    );

    await step('Reset to initial state', async () => {
      await userEvent.type(input, '9');
      await expectDelayedValue(input, '1234567,89');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  },
};

export const allowNegatives: Story = {
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    decimalPlaces: 2,
    allowNegatives: true,
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Numeric',
    sizer: 'xs',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Xs Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');

    await step(
      'Assert the xs sizer style on both the Numeric & Field',
      async () => {
        expect(input).toHaveClass('text-xs');
        expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
      },
    );
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Numeric',
    sizer: 'sm',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Sm Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');

    await step(
      'Assert the sm sizer style on both the Numeric & Field',
      async () => {
        expect(input).toHaveClass('text-sm');
        expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
      },
    );
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Numeric',
    sizer: 'base',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Base Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');

    await step(
      'Assert the base sizer style on both the Numeric & Field',
      async () => {
        expect(input).toHaveClass('text-base');
        expect(field).toHaveAttribute('data-nickui-sizer', 'base');
      },
    );
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Numeric',
    sizer: 'lg',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Lg Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');

    await step(
      'Assert the lg sizer style on both the Numeric & Field',
      async () => {
        expect(input).toHaveClass('text-lg');
        expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
      },
    );
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Numeric',
    sizer: 'xl',
    defaultValue: '1.23',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Xl Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');

    await step(
      'Assert the xl sizer style on both the Numeric & Field',
      async () => {
        expect(input).toHaveClass('text-xl');
        expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
      },
    );
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Numeric',
    defaultValue: '1.23',
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Numeric {...empty.args} className="sm:flex-1" />
      <Numeric {...controlled.args} className="sm:flex-1" />
      <Numeric {...uncontrolled.args} className="sm:flex-1" />
      <Numeric {...disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Numeric {...xs.args} className="sm:flex-12" />
      <Numeric {...sm.args} className="sm:flex-14" />
      <Numeric {...base.args} className="sm:flex-16" />
      <Numeric {...lg.args} className="sm:flex-18" />
      <Numeric {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
  ),
};
