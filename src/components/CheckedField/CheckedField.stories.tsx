import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import Docs from '@/docs';

import { CheckedField } from './CheckedField';

const meta = {
  title: 'Field layouts/CheckedField',
  component: CheckedField,
} satisfies Meta<typeof CheckedField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field',
  },
};

export const Small: Story = {
  args: {
    sizer: CheckedField.sizer.small,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Small label',
    hint: 'Small hint',
  },
};

export const Medium: Story = {
  args: {
    sizer: CheckedField.sizer.medium,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Medium label',
    hint: 'Medium hint',
  },
};

export const Large: Story = {
  args: {
    sizer: CheckedField.sizer.large,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Large label',
    hint: 'Large hint',
  },
};

export const Responsive: Story = {
  tags: ['!test'],
  args: {
    sizer: [CheckedField.sizer.smMedium, CheckedField.sizer.mdLarge],
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Responsive label',
    hint: 'Responsive hint',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Medium.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
      <CheckedField {...Responsive.args} className="sm:flex-1" />
    </div>
  ),
};
