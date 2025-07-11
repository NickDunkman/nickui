import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Switch } from '@/components/Switch';

import { Switches } from './Switches';

const meta = {
  title: 'Form controls/Switches',
  component: Switches,
} satisfies Meta<typeof Switches>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardLayout: Story = {
  args: {
    label: 'Please select some standards',
    defaultValue: '8601',
    options: [
      {
        value: 'aquila',
        label: 'Roman Aquila',
      },
      {
        value: '8601',
        label: 'ISO 8601',
      },
      {
        value: 'high-society',
        label: 'High Society',
        disabled: true,
      },
    ],
  },
};

export const CustomLayout: Story = {
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: (checkbox) => (
      <div className="flex flex-row items-baseline gap-x-6">
        <Switch
          {...checkbox({ value: 'colorful' })}
          label={<span className="font-bold text-blue-700">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Switch
          {...checkbox({ value: 'embiggened' })}
          sizer={Switch.sizer.large}
          label="Embiggened"
        />
        <div>
          <input
            type="checkbox"
            {...checkbox({ value: 'native' })}
            aria-label="example using different control component"
          />{' '}
          Native
        </div>
      </div>
    ),
  },
};

export const FieldsetLayout: Story = {
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
};

export const Small: Story = {
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Switches.sizer.small,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Switches.sizer.medium,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
};

export const Large: Story = {
  args: {
    label: 'Large label',
    hint: 'Large hint',
    sizer: Switches.sizer.large,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-x-12 gap-y-8 sm:flex-row sm:items-baseline">
      <Switches {...Small.args} className="sm:flex-1" />
      <Switches {...Medium.args} className="sm:flex-1" />
      <Switches {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
