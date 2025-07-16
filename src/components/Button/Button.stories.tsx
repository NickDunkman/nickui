import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Form controls/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    children: 'Enabled Button',
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Clicking the Button should trigger `onClick`', async () => {
      await userEvent.click(canvas.getByRole('button'));
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const button = canvas.getByRole('button');

    await step('Assert the disabled state', async () => {
      await expect(button).toBeDisabled();
    });

    await step('Clicking the Button should have no effect', async () => {
      await userEvent.click(button);
      expect(args.onClick).not.toHaveBeenCalled();
    });
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  },
};

export const Medium: Story = {
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-base');
    });
  },
};

export const Large: Story = {
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  },
};

export const Responsive: Story = {
  tags: ['!test'],
  args: {
    sizer: [Button.sizer.smMedium, Button.sizer.mdLarge],
    children: 'Responsive Button',
    onClick: fn(),
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
      <Button {...Responsive.args} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    flavor: Button.flavor.primary,
    children: 'Primary Button (default)',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the primary style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('bg-indigo-600');
    });
  },
};

export const Secondary: Story = {
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-gray-100');
    });
  },
};

export const Danger: Story = {
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  },
};

export const AllFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
  ),
};
