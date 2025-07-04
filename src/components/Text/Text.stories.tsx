import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Text } from './Text';

const meta = {
  title: 'Form controls/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text with no set value',
  },
};

export const Controlled: Story = {
  args: {
    value: 'Controlled Text',
    onChange: () => {},
    'aria-label': 'Example Text with a controlled value',
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Example Text with an uncontrolled value',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Example disabled Text',
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
  ),
};

export const FieldLayout: Story = {
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    defaultValue: 'A problematic value',
  },
};

export const Small: Story = {
  args: {
    sizer: Text.sizer.small,
    placeholder: 'Small Text (default)',
    'aria-label': 'Example small Text',
  },
};

export const Medium: Story = {
  args: {
    sizer: Text.sizer.medium,
    placeholder: 'Medium Text',
    'aria-label': 'Example medium Text',
  },
};

export const Large: Story = {
  args: {
    sizer: Text.sizer.large,
    placeholder: 'Large Text',
    'aria-label': 'Example large Text',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
