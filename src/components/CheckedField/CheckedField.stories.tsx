import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { FormControlPlaceholder } from '@/docs';

import { CheckedField } from './CheckedField';

const meta = {
  title: 'Forms/CheckedField',
  component: CheckedField,
} satisfies Meta<typeof CheckedField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!test'],
  args: {
    children: <FormControlPlaceholder tiny />,
    label: 'A label for the field',
    explainer: 'An explanation about the field',
  },
};

export const Small: Story = {
  args: {
    sizer: CheckedField.sizer.small,
    children: <FormControlPlaceholder tiny />,
    label: 'Small label',
    explainer: 'Small explanation',
  },
};

export const Medium: Story = {
  args: {
    sizer: CheckedField.sizer.medium,
    children: <FormControlPlaceholder tiny />,
    label: 'Medium label',
    explainer: 'Medium explanation',
  },
};

export const Large: Story = {
  args: {
    sizer: CheckedField.sizer.large,
    children: <FormControlPlaceholder tiny />,
    label: 'Large label',
    explainer: 'Large explanation',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Medium.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
