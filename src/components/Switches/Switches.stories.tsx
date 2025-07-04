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
    label: 'Please select a standard',
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
    label: 'How custom do you like it?',
    defaultValue: 'pretty',
    render: (checkbox) => (
      <div className="flex flex-row items-baseline gap-x-4">
        <Switch {...checkbox({ value: 'kinda' })} label="A little custom" />
        <span className="text-xs text-gray-500">or</span>
        <Switch
          {...checkbox({ value: 'pretty' })}
          label={
            <div className="font-bold text-blue-500">Pretty custom 👨‍🎨</div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Switch
          {...checkbox({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Switch.sizer.large}
          label="Too custom"
        />
      </div>
    ),
  },
};

export const FieldsetLayout: Story = {
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
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
