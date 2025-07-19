import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import Docs from '@/docs';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Fieldset } from './Fieldset';

const meta = {
  title: 'Field layouts/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!test', 'field-layout'],
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

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: Fieldset.sizer.xs,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Xs label',
    hint: 'Xs hint',
    error: 'Xs error',
    required: true,
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: Fieldset.sizer.sm,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Sm label',
    hint: 'Sm hint',
    error: 'Sm error',
    required: true,
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: Fieldset.sizer.base,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Base label',
    hint: 'Base hint',
    error: 'Base error',
    required: true,
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: Fieldset.sizer.lg,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Lg label',
    hint: 'Lg hint',
    error: 'Lg error',
    required: true,
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: Fieldset.sizer.xl,
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Xl label',
    hint: 'Xl hint',
    error: 'Xl error',
    required: true,
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: [
      Fieldset.sizer.xs,
      Fieldset.sizer.smSm,
      Fieldset.sizer.mdBase,
      Fieldset.sizer.lgLg,
      Fieldset.sizer.xlXl,
    ],
    children: [
      <Docs.FormControlPlaceholder key="first" className="mb-2" />,
      <Docs.FormControlPlaceholder key="second" />,
    ],
    label: 'Responsive label',
    hint: 'Responsive hint',
    error: 'Responsive error',
    required: true,
  },
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

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper>
      <Fieldset {...Xs.args} />
      <Fieldset {...Sm.args} />
      <Fieldset {...Base.args} />
      <Fieldset {...Lg.args} />
      <Fieldset {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
