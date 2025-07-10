import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Slider } from './Slider';

const meta = {
  title: 'Form controls/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

function withMetaHint(
  hint: string,
): Partial<React.ComponentProps<typeof Slider>> {
  return {
    hint: ({ value }) => (
      <div className="flex">
        <div>{hint}</div>
        <div className="ml-auto">{value}</div>
      </div>
    ),
    'aria-label': hint,
  };
}

export const FieldLayout: Story = {
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '50',
  },
};

export const NoValue: Story = {
  args: withMetaHint('Slider with no valueish prop'),
};

export const Controlled: Story = {
  args: {
    value: '50',
    ...withMetaHint('Slider with controlled value'),
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: '50',
    ...withMetaHint('Slider with uncontrolled value'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '50',
    ...withMetaHint('Disabled Slider'),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: () => (
    <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
  ),
};

export const CustomRange: Story = {
  args: {
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500,
    ...withMetaHint('Slider with custom range'),
  },
};

export const Small: Story = {
  args: {
    sizer: Slider.sizer.small,
    defaultValue: '50',
    ...withMetaHint('Small Slider (default)'),
  },
};

export const Medium: Story = {
  args: {
    sizer: Slider.sizer.medium,
    defaultValue: '50',
    ...withMetaHint('Medium Slider'),
  },
};

export const Large: Story = {
  args: {
    sizer: Slider.sizer.large,
    defaultValue: '50',
    ...withMetaHint('Large Slider'),
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: () => (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
