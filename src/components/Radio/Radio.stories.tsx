import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Radio } from './Radio';

const meta = {
  title: 'Forms/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    children: 'Unchecked Radio',
  },
};

export const Controlled: Story = {
  args: {
    children: 'Controlled Radio',
    checked: true,
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    children: 'Uncontrolled Radio',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Radio',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'Disabled & checked Radio',
    disabled: true,
    defaultChecked: true,
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...Disabled.args} />
      <Radio {...DisabledChecked.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    children: 'Small Radio (default)',
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Radio.sizer.medium,
    children: 'Medium Radio',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Radio.sizer.large,
    children: 'Large Radio',
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 md:flex-row">
      <Radio {...Small.args} />
      <Radio {...Medium.args} />
      <Radio {...Large.args} />
    </div>
  ),
};
