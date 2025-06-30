import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    children: 'Unchecked Checkbox',
  },
};

export const Controlled: Story = {
  args: {
    children: 'Controlled Checkbox',
    checked: true,
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    children: 'Uncontrolled Checkbox',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'Disabled & checked Checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...Disabled.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    children: 'Small Checkbox (default)',
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Checkbox.sizer.medium,
    children: 'Medium Checkbox',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Checkbox.sizer.large,
    children: 'Large Checkbox',
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col items-baseline gap-5 md:flex-row">
      <Checkbox {...Small.args} />
      <Checkbox {...Medium.args} />
      <Checkbox {...Large.args} />
    </div>
  ),
};
