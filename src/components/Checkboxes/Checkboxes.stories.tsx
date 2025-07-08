import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Checkbox } from '@/components/Checkbox';

import { Checkboxes } from './Checkboxes';

const meta = {
  title: 'Form controls/Checkboxes',
  component: Checkboxes,
} satisfies Meta<typeof Checkboxes>;

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
        <Checkbox
          {...checkbox({ value: 'colorful' })}
          label={<span className="font-bold text-blue-700">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Checkbox
          {...checkbox({ value: 'embiggened' })}
          sizer={Checkbox.sizer.large}
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
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Checkboxes {...Small.args} className="sm:flex-1" />
      <Checkboxes {...Medium.args} className="sm:flex-1" />
      <Checkboxes {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
