import { TextInput } from '../TextInput/TextInput';
import { FieldLayout } from './FieldLayout';
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

const meta = {
  component: FieldLayout,
} satisfies Meta<typeof FieldLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    sizer: FieldLayout.sizer.small,
    children: <TextInput sizer={TextInput.sizer.small} id="small-input" />,
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
    controlId: 'small-input',
  },
};

export const Medium: Story = {
  args: {
    sizer: FieldLayout.sizer.medium,
    children: <TextInput sizer={TextInput.sizer.medium} id="medium-input" />,
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
    controlId: 'medium-input',
  },
};

export const Large: Story = {
  args: {
    sizer: FieldLayout.sizer.large,
    children: <TextInput sizer={TextInput.sizer.large} id="large-input" />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-5 md:flex-row">
      <FieldLayout {...Small.args} />
      <FieldLayout {...Medium.args} />
      <FieldLayout {...Large.args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: (
      <TextInput
        id="input-with-error"
        value="12345"
        aria-errormessage="error-message-id"
      />
    ),
    label: 'Phone number',
    error: 'That is not a valid phone number',
    errorId: 'error-message-id',
    controlId: 'input-with-error',
  },
};

export const Required: Story = {
  args: {
    children: <TextInput id="required-input" required />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true,
  },
};
