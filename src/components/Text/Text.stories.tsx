import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Text } from './Text';

const meta = {
  title: 'Form controls/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldLayout: Story = {
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

export const Empty: Story = {
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

export const Controlled: Story = {
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

export const Uncontrolled: Story = {
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

export const Disabled: Story = {
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

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs label',
    placeholder: 'Xs Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style on both the Text & Field',
      async () => {
        expect(canvas.getByLabelText('Xs label')).toHaveClass('text-xs');
        expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm label',
    placeholder: 'Sm Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the sm sizer style on both the Text & Field',
      async () => {
        expect(canvas.getByLabelText('Sm label')).toHaveClass('text-sm');
        expect(canvas.getByText('Sm label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base label',
    placeholder: 'Base Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style on both the Text & Field',
      async () => {
        expect(canvas.getByLabelText('Base label')).toHaveClass('text-base');
        expect(canvas.getByText('Base label')).toHaveClass('text-base');
      },
    );
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg label',
    placeholder: 'Lg Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the lg sizer style on both the Text & Field',
      async () => {
        expect(canvas.getByLabelText('Lg label')).toHaveClass('text-lg');
        expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl label',
    placeholder: 'Xl Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xl sizer style on both the Text & Field',
      async () => {
        expect(canvas.getByLabelText('Xl label')).toHaveClass('text-xl');
        expect(canvas.getByText('Xl label')).toHaveClass('text-xl');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn(),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Text {...Empty.args} className="sm:flex-1" />
      <Text {...Controlled.args} className="sm:flex-1" />
      <Text {...Uncontrolled.args} className="sm:flex-1" />
      <Text {...Disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Text {...Xs.args} />
      <Text {...Sm.args} />
      <Text {...Base.args} />
      <Text {...Lg.args} />
      <Text {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
