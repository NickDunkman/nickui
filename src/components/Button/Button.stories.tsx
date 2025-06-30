import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Button } from './Button';

const meta = {
  title: 'Forms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    children: 'Enabled Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
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
  },
};

export const Medium: Story = {
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: 'Primary Button (default)',
  },
};

export const Secondary: Story = {
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button',
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
