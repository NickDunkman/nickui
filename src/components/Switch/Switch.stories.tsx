import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Switch } from './Switch';

const meta = {
  title: 'Form controls/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckedFieldLayout: Story = {
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint',
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Switch',
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true,
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: () => (
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
    label: 'Small Switch (default)',
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: () => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
