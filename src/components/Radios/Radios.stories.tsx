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
      },
    ],
  },
};

export const CustomLayout: Story = {
  args: {
    label: 'How custom do you like it?',
    defaultValue: 'very',
    children: (getRadioProps) => (
      <div className="flex flex-row items-baseline gap-x-4">
        <Radio {...getRadioProps({ value: 'kinda' })}>A little custom</Radio>
        <span className="text-xs text-gray-500">or</span>
        <Radio {...getRadioProps({ value: 'very' })}>
          <div className="font-bold text-blue-500">Very custom 👨‍🎨</div>
        </Radio>
      </div>
    ),
  },
};
