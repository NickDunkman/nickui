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
    label: 'Unchecked Radio',
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & checked Radio',
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
    label: 'Small Radio (default)',
    explainer: 'Optional explainer',
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Radio.sizer.medium,
    label: 'Medium Radio',
    explainer: 'Optional explainer',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Radio.sizer.large,
    label: 'Large Radio',
    explainer: 'Optional explainer',
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Radio {...Small.args} className="sm:flex-1" />
      <Radio {...Medium.args} className="sm:flex-1" />
      <Radio {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
