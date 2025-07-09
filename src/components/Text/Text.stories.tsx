import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Text } from './Text';

const meta = {
  title: 'Form controls/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldLayout: Story = {
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value',
  },
  play: ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    expect(input).toHaveAccessibleName('A label*');
    expect(input).toHaveAccessibleDescription('A hint');
    expect(input).toHaveAccessibleErrorMessage('An error message');
    expect(input).toHaveClass('border-rose-800');

    expect(canvas.getByTitle('required')).toHaveTextContent('*');
  },
};

export const Empty: Story = {
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text',
  },
  play: async ({ canvas, userEvent }) => {
    // When there's no value or defaultValue prop used, it should be able to
    // track an internal uncontrolled value.
    const input = canvas.getByLabelText('Empty Text');
    await userEvent.type(input, 'a');
    expect(input).toHaveValue('a');

    // reset back to original value
    await userEvent.type(input, '{backspace}');
  },
};

export const Controlled: Story = {
  args: {
    value: 'Controlled Text',
    'aria-label': 'Controlled Text',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the input's value
    // should not change.
    const input = canvas.getByLabelText('Controlled Text');
    await userEvent.type(input, 'a');
    expect(args.onChange).toHaveBeenCalled();
    expect(input).toHaveValue(args.value);
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Uncontrolled Text',
  },
  play: async ({ args, canvas, userEvent }) => {
    // The value is uncontrolled, so the input's value should update as you
    // type without having any other mechanism for updating the value prop.
    const input = canvas.getByLabelText('Uncontrolled Text');
    await userEvent.type(input, 'a');
    expect(input).toHaveValue(`${args.defaultValue}a`);
    await userEvent.type(input, '{backspace}');
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    onChange: fn(),
    'aria-label': 'Disabled Text',
  },
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByLabelText('Disabled Text');
    expect(input).toBeDisabled();

    // Typing should not fire any changes
    await userEvent.type(input, 'a');
    expect(args.onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue(args.defaultValue);
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    sizer: Text.sizer.small,
    label: 'Small label',
    placeholder: 'Small Text (default)',
  },
  play: ({ canvas }) => {
    // The input should have the small sizing
    expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
    // The wrapping Field should have small sizing
    expect(canvas.getByText('Small label')).toHaveClass('text-xs');
  },
};

export const Medium: Story = {
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text',
  },
  play: ({ canvas }) => {
    // The input should have medium sizing
    expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
    // The wrapping Field should have medium sizing
    expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
  },
};

export const Large: Story = {
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text',
  },
  play: ({ canvas }) => {
    // The input should have medium sizing
    expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
    // The wrapping Field should have medium sizing
    expect(canvas.getByText('Large label')).toHaveClass('text-lg');
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
