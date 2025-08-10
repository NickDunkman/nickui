import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { getStoryArgTypes } from '@/dev/stories/getStoryArgTypes';

import { ALLOWED_TYPES, Text } from './Text';

const meta = {
  title: 'Form controls/Text',
  component: Text,
  argTypes: getStoryArgTypes<typeof Text>({
    formControl: {
      isDisableable: true,
      valueType: 'string',
    },
    isSizerable: true,
    defaultValues: {
      type: 'text',
    },
    types: {
      type: ALLOWED_TYPES,
    },
  }),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const fieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');

    await step('Assert accessibility of layout elements', async () => {
      expect(input).toHaveRole('textbox');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  },
};

export const empty: Story = {
  tags: ['control-state'],
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Empty Text');

    await step(
      'Assert Text is functional without an initial value',
      async () => {
        await userEvent.type(input, 'a');
        expect(input).toHaveValue('a');
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
    value: 'Controlled Text',
    'aria-label': 'Controlled Text',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Controlled Text');

    await step('Assert `value` works', async () => {
      expect(input).toHaveValue(args.value);
    });

    await step(
      'Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change',
      async () => {
        await userEvent.type(input, 'a');
        expect(args.onChange).toHaveBeenCalledOnce();
        expect(input).toHaveValue(args.value);
      },
    );
  },
};

export const uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Uncontrolled Text',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Uncontrolled Text');

    await step('Assert `defaultValue` works', async () => {
      expect(input).toHaveValue(args.defaultValue);
    });

    await step(
      'Typing into the Text should amend the value, since it’s uncontrolled',
      async () => {
        await userEvent.type(input, 'a');
        expect(input).toHaveValue(`${args.defaultValue}a`);
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue(args.defaultValue);
    });
  },
};

export const disabled: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Disabled Text',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const input = canvas.getByLabelText('Disabled Text');

    await step('Assert disabled state', async () => {
      expect(input).toBeDisabled();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(input, 'a');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue(args.defaultValue);
    });
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Text',
    sizer: 'xs',
    placeholder: 'Xs Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Xs Text');
    const field = input.closest('[data-nickui-component="Text"]');

    await step(
      'Assert the xs sizer style on both the Text & Field',
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
    'aria-label': 'Sm Text',
    sizer: 'sm',
    placeholder: 'Sm Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Sm Text');
    const field = input.closest('[data-nickui-component="Text"]');

    await step(
      'Assert the sm sizer style on both the Text & Field',
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
    'aria-label': 'Base Text',
    sizer: 'base',
    placeholder: 'Base Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Base Text');
    const field = input.closest('[data-nickui-component="Text"]');

    await step(
      'Assert the base sizer style on both the Text & Field',
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
    'aria-label': 'Lg Text',
    sizer: 'lg',
    placeholder: 'Lg Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Lg Text');
    const field = input.closest('[data-nickui-component="Text"]');

    await step(
      'Assert the lg sizer style on both the Text & Field',
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
    'aria-label': 'Xl Text',
    sizer: 'xl',
    placeholder: 'Xl Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByLabelText('Xl Text');
    const field = input.closest('[data-nickui-component="Text"]');

    await step(
      'Assert the xl sizer style on both the Text & Field',
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
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Text {...empty.args} className="sm:flex-1" />
      <Text {...controlled.args} className="sm:flex-1" />
      <Text {...uncontrolled.args} className="sm:flex-1" />
      <Text {...disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Text {...xs.args} className="sm:flex-12" />
      <Text {...sm.args} className="sm:flex-14" />
      <Text {...base.args} className="sm:flex-16" />
      <Text {...lg.args} className="sm:flex-18" />
      <Text {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
  ),
};
