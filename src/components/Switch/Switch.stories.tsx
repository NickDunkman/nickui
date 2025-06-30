import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Switch } from './Switch';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    children: 'Unchecked Switch',
  },
};

export const Controlled: Story = {
  args: {
    children: 'Controlled Switch',
    checked: true,
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    children: 'Uncontrolled Switch',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'Disabled & checked Switch',
    disabled: true,
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
      <Switch {...Disabled.args} />
      <Switch {...DisabledChecked.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    children: 'Small Switch (default)',
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Switch.sizer.medium,
    children: 'Medium Switch',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Switch.sizer.large,
    children: 'Large Switch',
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col items-baseline gap-5 md:flex-row">
      <Switch {...Small.args} />
      <Switch {...Medium.args} />
      <Switch {...Large.args} />
    </div>
  ),
};
