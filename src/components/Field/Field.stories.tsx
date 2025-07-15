import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import Docs from '@/docs';

import { Field } from './Field';

const meta = {
  title: 'Field layouts/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    hint: 'A hint about the field’s value',
    error: 'An error message',
    required: true,
  },
};

export const Small: Story = {
  args: {
    sizer: Field.sizer.small,
    children: <Docs.FormControlPlaceholder />,
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    required: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Field.sizer.medium,
    children: <Docs.FormControlPlaceholder />,
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    required: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Field.sizer.large,
    children: <Docs.FormControlPlaceholder />,
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    required: true,
  },
};

export const Responsive: Story = {
  tags: ['!test'],
  args: {
    sizer: [Field.sizer.smMedium, Field.sizer.mdLarge],
    children: <Docs.FormControlPlaceholder />,
    label: 'Responsive label',
    hint: 'Responsive hint',
    error: 'Responsive error',
    required: true,
  },
};

export const Required: Story = {
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
      <Field {...Responsive.args} className="sm:flex-1" />
    </div>
  ),
};
