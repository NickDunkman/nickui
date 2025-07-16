import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Switch } from './Switch';

const meta = {
  title: 'Form controls/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckedFieldLayout: Story = {
  args: {
    label: 'A label',
    hint: 'A hint',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('A label');

    await step('Assert accessibility of layout elements', async () => {
      expect(swtch).toHaveRole('checkbox');
      expect(swtch).toHaveAccessibleDescription('A hint');
    });

    await step('Assert initial unchecked state', async () => {
      expect(swtch).not.toBeChecked();
    });

    await step('Toggle the Switch by clicking the label', async () => {
      await userEvent.click(canvas.getByText('A label'));
      expect(swtch).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await step('Toggle the Switch by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(swtch).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Switch',
    onChange: fn(),
  },
  play: async ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Switch')).not.toBeChecked();
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Controlled Switch');

    await step('Assert `checked` prop works', () => {
      expect(swtch).toBeChecked();
    });

    await step(
      'Try unchecking the Switch. `onChange` should fire, but the checked state is controlled, so it shouldn’t change',
      async () => {
        await userEvent.click(swtch);
        expect(args.onChange).toHaveBeenCalled();
        expect(swtch).toBeChecked();
      },
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Uncontrolled Switch');

    await step('Assert `defaultChecked` prop works', () => {
      expect(swtch).toBeChecked();
    });

    // The Switch is uncontrolled, so clicking should cause the checked
    // state to change.
    await step(
      'Clicking the Switch should toggle the checked state, since it’s uncontrolled',
      async () => {
        await userEvent.click(swtch);
        expect(args.onChange).toHaveBeenCalled();
        expect(swtch).not.toBeChecked();
      },
    );

    await step('Reset to checked state', async () => {
      await userEvent.click(swtch);
      expect(swtch).toBeChecked();
    });
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled & unchecked Switch',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Disabled & unchecked Switch');

    await step('Assert disabled & unchecked state', async () => {
      expect(swtch).toBeDisabled();
      expect(swtch).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-300');
    });

    await step('Clicking the Switch should have no effect', async () => {
      await userEvent.click(swtch);
      expect(swtch).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Disabled & checked Switch');

    await step('Assert disabled & checked state', async () => {
      expect(swtch).toBeDisabled();
      expect(swtch).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-300');
    });

    await step('Clicking the Switch should have no effect', async () => {
      await userEvent.click(swtch);
      expect(swtch).toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const Small: Story = {
  args: {
    label: 'Small Switch (default)',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the small style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-5');
    });
  },
};

export const Medium: Story = {
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the medium style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-6');
    });
  },
};

export const Large: Story = {
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the large style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-7');
    });
  },
};

export const Responsive: Story = {
  tags: ['!test'],
  args: {
    sizer: [Switch.sizer.smMedium, Switch.sizer.mdLarge],
    label: 'Responsive Switch',
    defaultChecked: true,
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...DisabledUnchecked.args} />
      <Switch {...DisabledChecked.args} />
    </div>
  ),
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
      <Switch {...Responsive.args} className="sm:flex-1" />
    </div>
  ),
};
