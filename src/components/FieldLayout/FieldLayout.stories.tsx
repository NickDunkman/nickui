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
    size: FieldLayout.size.small,
    children: <input className="border" id="small-input" />,
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
    controlId: 'small-input',
  },
};

export const Medium: Story = {
  args: {
    size: FieldLayout.size.medium,
    children: <input className="border" id="medium-input" />,
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
    controlId: 'medium-input',
  },
};

export const Large: Story = {
  args: {
    size: FieldLayout.size.large,
    children: <input className="border" id="large-input" />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input',
  },
};

export const Error: Story = {
  args: {
    children: (
      <input
        className="border"
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
    children: <input className="border" id="required-input" required />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true,
  },
};
