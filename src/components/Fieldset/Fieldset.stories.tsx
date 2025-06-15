import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Select } from '@/components/Select/Select';
import { Text } from '@/components/Text/Text';

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
      <Text
        className="mb-2"
        placeholder="First field"
        aria-label="First field"
        key="first"
      />,
      <Text
        placeholder="Second field"
        aria-label="Second field"
        key="second"
      />,
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
      <Text
        className="mb-2"
        placeholder="First field"
        aria-label="First field"
        key="first"
      />,
      <Text
        placeholder="Second field"
        aria-label="Second field"
        key="second"
      />,
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
      <Text
        className="mb-2"
        placeholder="First field"
        aria-label="First field"
        sizer={Text.sizer.medium}
        key="first"
      />,
      <Text
        placeholder="Second field"
        aria-label="Second field"
        sizer={Text.sizer.medium}
        key="second"
      />,
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
      <Text
        className="mb-2"
        placeholder="First field"
        aria-label="First field"
        sizer={Text.sizer.large}
        key="first"
      />,
      <Text
        placeholder="Second field"
        aria-label="Second field"
        sizer={Text.sizer.large}
        key="second"
      />,
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
      <Fieldset {...Small.args} />
      <Fieldset {...Medium.args} />
      <Fieldset {...Large.args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: [
      <Select key="apples" className="mb-2" error aria-label="First comparable">
        <option>Apples</option>
      </Select>,
      <Select key="oranges" error aria-label="Second comparable">
        <option>Oranges</option>
      </Select>,
    ],
    label: 'Select some comparables',
    error: 'These cannot be compared',
  },
};

export const Required: Story = {
  args: {
    children: [
      <Text
        className="mb-2"
        placeholder="First name"
        required
        aria-label="First name"
        key="first"
      />,
      <Text
        placeholder="Last name"
        required
        aria-label="Last name"
        key="last"
      />,
    ],
    label: 'Your name',
    required: true,
  },
};
