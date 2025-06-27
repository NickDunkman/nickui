import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { FormControlPlaceholder } from '@/docs';

import { Fieldset } from './Fieldset';

const meta = {
  title: 'Forms/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!test'],
  args: {
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'A label for the fieldset',
    explainer: 'An explanation about the fieldset',
    hint: 'A hint about the fieldset’s values',
  },
};

export const Small: Story = {
  args: {
    sizer: Fieldset.sizer.small,
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
  },
};

export const Medium: Story = {
  args: {
    sizer: Fieldset.sizer.medium,
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
  },
};

export const Large: Story = {
  args: {
    sizer: Fieldset.sizer.large,
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex-1">
        <Fieldset {...Small.args} />
      </div>
      <div className="flex-1">
        <Fieldset {...Medium.args} />
      </div>
      <div className="flex-1">
        <Fieldset {...Large.args} />
      </div>
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Select some comparables',
    error: 'These cannot be compared',
  },
};

export const Required: Story = {
  args: {
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Your name',
    required: true,
  },
};
