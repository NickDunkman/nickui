import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import Docs from '@/docs';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Field } from './Field';

const meta = {
  title: 'Field layouts/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  tags: ['!dev', '!test', 'field-layout'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    hint: 'A hint about the field’s value',
    error: 'An error message',
    required: true,
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: <Docs.FormControlPlaceholder />,
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
    children: <Docs.FormControlPlaceholder />,
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
    children: <Docs.FormControlPlaceholder />,
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
    children: <Docs.FormControlPlaceholder />,
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
    children: <Docs.FormControlPlaceholder />,
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
    children: <Docs.FormControlPlaceholder />,
    label: 'Responsive label',
    hint: 'Responsive hint',
    error: 'Responsive error',
    required: true,
  },
};

export const required: Story = {
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true,
  },
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Field {...xs.args} />
      <Field {...sm.args} />
      <Field {...base.args} />
      <Field {...lg.args} />
      <Field {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
