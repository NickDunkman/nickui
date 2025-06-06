import { TextInput } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: 'Empty TextInput',
    'aria-label': 'Empty TextInput with no set value',
  },
};

export const Controlled: Story = {
  args: {
    value: 'Controlled TextInput',
    onChange: () => {},
    'aria-label': 'Example TextInput with a controlled value',
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Uncontrolled TextInput',
    'aria-label': 'Example TextInput with an uncontrolled value',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled TextInput',
    disabled: true,
    'aria-label': 'Example disabled TextInput',
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <TextInput {...Empty.args} />
      <TextInput {...Controlled.args} />
      <TextInput {...Uncontrolled.args} />
      <TextInput {...Disabled.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    sizer: TextInput.sizer.small,
    placeholder: 'Small TextInput (default)',
    'aria-label': 'Example small TextInput',
  },
};

export const Medium: Story = {
  args: {
    sizer: TextInput.sizer.medium,
    placeholder: 'Medium TextInput',
    'aria-label': 'Example medium TextInput',
  },
};

export const Large: Story = {
  args: {
    sizer: TextInput.sizer.large,
    placeholder: 'Large TextInput',
    'aria-label': 'Example large TextInput',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <TextInput {...Small.args} />
      <TextInput {...Medium.args} />
      <TextInput {...Large.args} />
    </div>
  ),
};

//export const Error: Story = {
//  args: {
//    children: (
//      <input
//        className="border"
//        id="input-with-error"
//        value="12345"
//        aria-errormessage="error-message-id"
//      />
//    ),
//    label: 'Phone number',
//    error: 'That is not a valid phone number',
//    errorId: 'error-message-id',
//    controlId: 'input-with-error',
//  },
//};
//
//export const Required: Story = {
//  args: {
//    children: <input className="border" id="required-input" required />,
//    label: 'Necessary information',
//    controlId: 'required-input',
//    required: true,
//  },
//};
//
