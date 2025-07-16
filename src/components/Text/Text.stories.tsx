import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Text } from './Text';

const meta = {
  title: 'Form controls/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldLayout: Story = {
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
    const requiredAsterisk = canvas.getByTitle('required');

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

export const Small: Story = {
  args: {
    sizer: Text.sizer.small,
    label: 'Small label',
    placeholder: 'Small Text (default)',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the small style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  },
};

export const Medium: Story = {
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the medium style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  },
};

export const Large: Story = {
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the large style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  },
};

export const Responsive: Story = {
  tags: ['!test'],
  args: {
    sizer: [Text.sizer.smMedium, Text.sizer.mdLarge],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn(),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
  ),
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
      <Text {...Responsive.args} className="sm:flex-1" />
    </div>
  ),
};
