import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Checkbox } from '@/components/Checkbox';

import { Checkboxes } from './Checkboxes';

const meta = {
  title: 'Forms/Checkboxes',
  component: Checkboxes,
} satisfies Meta<typeof Checkboxes>;

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
        <Checkbox {...getRadioProps({ value: 'kinda' })}>
          A little custom
        </Checkbox>
        <span className="text-xs text-gray-500">or</span>
        <Checkbox {...getRadioProps({ value: 'pretty' })}>
          <div className="font-bold text-blue-500">Pretty custom 👨‍🎨</div>
        </Checkbox>
        <span className="text-xs text-gray-500">or</span>
        <Checkbox
          {...getRadioProps({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Checkbox.sizer.large}
        >
          Too custom
        </Checkbox>
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
    sizer: Checkboxes.sizer.small,
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
    sizer: Checkboxes.sizer.medium,
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
    sizer: Checkboxes.sizer.large,
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
      <Checkboxes {...Small.args} />
      <Checkboxes {...Medium.args} />
      <Checkboxes {...Large.args} />
    </div>
  ),
};
