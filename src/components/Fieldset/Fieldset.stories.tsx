import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import Docs from '@/docs';

import { Fieldset } from './Fieldset';

const meta = {
  title: 'Field layouts/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!test'],
  args: {
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'A label for the fieldset',
    hint: 'A hint about the fieldset’s values',
    error: 'An error message',
    required: true,
  },
};

export const Small: Story = {
  args: {
    sizer: Fieldset.sizer.small,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    required: true,
  },
};

export const Medium: Story = {
  args: {
    sizer: Fieldset.sizer.medium,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    required: true,
  },
};

export const Large: Story = {
  args: {
    sizer: Fieldset.sizer.large,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    required: true,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: () => (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Fieldset {...Small.args} className="sm:flex-1" />
      <Fieldset {...Medium.args} className="sm:flex-1" />
      <Fieldset {...Large.args} className="sm:flex-1" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Select some comparables',
    error: 'These cannot be compared',
  },
};

export const Required: Story = {
  args: {
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Your name',
    required: true,
  },
};
