import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { FormControlPlaceholder } from '@/docs';

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
    children: <FormControlPlaceholder />,
    label: 'A label for the field',
    explainer: 'An explanation about the field',
    hint: 'A hint about the field’s value',
    controlId: 'basic-input',
  },
};

export const Small: Story = {
  args: {
    sizer: Field.sizer.small,
    children: <FormControlPlaceholder />,
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
    controlId: 'small-input',
  },
};

export const Medium: Story = {
  args: {
    sizer: Field.sizer.medium,
    children: <FormControlPlaceholder />,
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
    controlId: 'medium-input',
  },
};

export const Large: Story = {
  args: {
    sizer: Field.sizer.large,
    children: <FormControlPlaceholder />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: <FormControlPlaceholder />,
    label: 'Phone number',
    error: 'That is not a valid phone number',
    errorId: 'error-message-id',
    controlId: 'input-with-error',
  },
};

export const Required: Story = {
  args: {
    children: <FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true,
  },
};
