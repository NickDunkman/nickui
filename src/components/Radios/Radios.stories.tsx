import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Radio } from '@/components/Radio';

import { Radios } from './Radios';

const meta = {
  title: 'Form controls/Radios',
  component: Radios,
} satisfies Meta<typeof Radios>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldsetLayout: Story = {
  tags: ['!dev', '!test'],
  args: {
    required: true,
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

export const StandardLayout: Story = {
  args: {
    name: 'standard',
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
    name: 'how-custom',
    label: 'How custom do you like it?',
    defaultValue: 'nice-and-custom',
    render: (radio) => (
      <div className="flex items-baseline gap-4">
        <Radio {...radio({ value: 'plain' })} label="Just plain" />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'nice-and-custom' })}
          sizer={Radio.sizer.medium}
          label={
            <div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-green-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Radio.sizer.large}
          label="Too custom"
        />
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Radios.sizer.small,
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
    sizer: Radios.sizer.medium,
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
    sizer: Radios.sizer.large,
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
    <div className="flex flex-col gap-x-12 gap-y-8 sm:flex-row">
      <div className="flex-1">
        <Radios {...Small.args} />
      </div>
      <div className="flex-1">
        <Radios {...Medium.args} />
      </div>
      <div className="flex-1">
        <Radios {...Large.args} />
      </div>
    </div>
  ),
};
