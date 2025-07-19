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
  tags: ['!dev', '!test', 'field-layout'],
  args: {
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field',
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: CheckedField.sizer.xs,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Xs label',
    hint: 'Xs hint',
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: CheckedField.sizer.sm,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Sm label',
    hint: 'Sm hint',
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: CheckedField.sizer.base,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Base label',
    hint: 'Base hint',
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: CheckedField.sizer.lg,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Lg label',
    hint: 'Lg hint',
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: CheckedField.sizer.xl,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Xl label',
    hint: 'Xl hint',
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: [CheckedField.sizer.smBase, CheckedField.sizer.mdLg],
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Responsive label',
    hint: 'Responsive hint',
  },
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Xs.args} className="sm:flex-1" />
      <CheckedField {...Sm.args} className="sm:flex-1" />
      <CheckedField {...Base.args} className="sm:flex-1" />
      <CheckedField {...Lg.args} className="sm:flex-1" />
      <CheckedField {...Xl.args} className="sm:flex-1" />
    </div>
  ),
};
