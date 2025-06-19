import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Radio } from '@/components/Radio';

import { Radios } from './Radios';

const meta = {
  title: 'Forms/Radios',
  component: Radios,
} satisfies Meta<typeof Radios>;

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
    children: (getRadioProps) => (
      <div className="flex flex-row items-baseline gap-x-4">
        <Radio {...getRadioProps({ value: 'kinda' })}>A little custom</Radio>
        <span className="text-xs text-gray-500">or</span>
        <Radio {...getRadioProps({ value: 'pretty' })}>
          <div className="font-bold text-blue-500">Pretty custom 👨‍🎨</div>
        </Radio>
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...getRadioProps({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Radio.sizer.medium}
        >
          Too custom
        </Radio>
      </div>
    ),
  },
};

export const Fieldset: Story = {
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
    <div className="flex flex-col gap-x-12 gap-y-8 md:flex-row">
      <Radios {...Small.args} />
      <Radios {...Medium.args} />
      <Radios {...Large.args} />
    </div>
  ),
};
