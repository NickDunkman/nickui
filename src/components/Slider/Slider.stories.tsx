import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Slider } from './Slider';

const meta = {
  title: 'Forms/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

function renderWithMetadata(
  ariaLabel: string,
): Partial<React.ComponentProps<typeof Slider>> {
  return {
    'aria-label': ariaLabel,
    children: ({ control, value }) => (
      <>
        {control}
        <div className="flex text-xs text-gray-600">
          <div>{ariaLabel}</div>
          <div className="ml-auto">{value}</div>
        </div>
      </>
    ),
  };
}

export const NoValue: Story = {
  args: renderWithMetadata('Slider with no valueish prop'),
};

export const Controlled: Story = {
  args: {
    value: '50',
    ...renderWithMetadata('Slider with controlled value'),
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: '50',
    ...renderWithMetadata('Slider with uncontrolled value'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '50',
    ...renderWithMetadata('Disabled Slider'),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
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
    ...renderWithMetadata('Slider with custom range'),
  },
};

export const FieldLayout: Story = {
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    defaultValue: '50',
  },
};

export const Small: Story = {
  args: {
    sizer: Slider.sizer.small,
    defaultValue: '50',
    'aria-label': 'Small Slider',
  },
};

export const Medium: Story = {
  args: {
    sizer: Slider.sizer.medium,
    defaultValue: '50',
    'aria-label': 'Medium Slider',
  },
};

export const Large: Story = {
  args: {
    sizer: Slider.sizer.large,
    defaultValue: '50',
    'aria-label': 'Large Slider',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Slider {...Small.args} />
      <Slider {...Medium.args} />
      <Slider {...Large.args} />
    </div>
  ),
};
