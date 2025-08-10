import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { FormControlPlaceholder } from '@/dev/stories/FormControlPlaceholder';

import { CheckedField } from './CheckedField';

const meta = {
  title: 'Field layouts/CheckedField',
  component: CheckedField,
} satisfies Meta<typeof CheckedField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  tags: ['!dev', '!test', 'field-layout'],
  args: {
    children: <FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field',
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: <FormControlPlaceholder tiny />,
    label: 'Xs label',
    hint: 'Xs hint',
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: <FormControlPlaceholder tiny />,
    label: 'Sm label',
    hint: 'Sm hint',
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: <FormControlPlaceholder tiny />,
    label: 'Base label',
    hint: 'Base hint',
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: <FormControlPlaceholder tiny />,
    label: 'Lg label',
    hint: 'Lg hint',
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: <FormControlPlaceholder tiny />,
    label: 'Xl label',
    hint: 'Xl hint',
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: <FormControlPlaceholder tiny />,
    label: 'Responsive label',
    hint: 'Responsive hint',
  },
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <CheckedField {...xs.args} />
      <CheckedField {...sm.args} />
      <CheckedField {...base.args} />
      <CheckedField {...lg.args} />
      <CheckedField {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
