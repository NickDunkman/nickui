import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { FormControlPlaceholder } from '@/dev/stories/FormControlPlaceholder';

import { Fieldset } from './Fieldset';

const meta = {
  title: 'Field layouts/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  tags: ['!dev', '!test', 'field-layout'],
  args: {
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'A label for the fieldset',
    hint: 'A hint about the fieldset’s values',
    error: 'An error message',
    required: true,
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Xs label',
    hint: 'Xs hint',
    error: 'Xs error',
    required: true,
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Sm label',
    hint: 'Sm hint',
    error: 'Sm error',
    required: true,
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Base label',
    hint: 'Base hint',
    error: 'Base error',
    required: true,
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Lg label',
    hint: 'Lg hint',
    error: 'Lg error',
    required: true,
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Xl label',
    hint: 'Xl hint',
    error: 'Xl error',
    required: true,
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Responsive label',
    hint: 'Responsive hint',
    error: 'Responsive error',
    required: true,
  },
};

export const error: Story = {
  args: {
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Select some comparables',
    error: 'These cannot be compared',
  },
};

export const required: Story = {
  args: {
    children: [
      <FormControlPlaceholder key="first" className="mb-2" />,
      <FormControlPlaceholder key="second" />,
    ],
    label: 'Your name',
    required: true,
  },
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Fieldset {...xs.args} />
      <Fieldset {...sm.args} />
      <Fieldset {...base.args} />
      <Fieldset {...lg.args} />
      <Fieldset {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
