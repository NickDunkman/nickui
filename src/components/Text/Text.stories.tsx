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
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('A label*');
    await expect(input).toHaveAccessibleDescription('A hint');
    await expect(input).toHaveAccessibleErrorMessage('An error message');
    await expect(input).toHaveClass('border-rose-800');

    const requiredAsterisk = canvas.getByTitle('required');
    await expect(requiredAsterisk).toBeInTheDocument();
    await expect(requiredAsterisk).toHaveTextContent('*');
  },
};

export const Empty: Story = {
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text with no set value',
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('Empty Text with no set value');

    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the input's value
    // should not change.
    await userEvent.type(input, 'a');
    await expect(input).toHaveValue('a');
    await userEvent.type(input, '{backspace}');
  },
};

export const Controlled: Story = {
  args: {
    value: 'Controlled Text',
    onChange: fn(),
    'aria-label': 'Example Text with a controlled value',
  },
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName(
      'Example Text with a controlled value',
    );

    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the input's value
    // should not change.
    await userEvent.type(input, 'a');
    await expect(args.onChange).toHaveBeenCalled();
    await expect(input).toHaveValue('Controlled Text');
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Example Text with an uncontrolled value',
  },
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName(
      'Example Text with an uncontrolled value',
    );

    // The value is uncontrolled, so the input's value should update as you
    // type without having any other mechanism for updating the value prop.
    await userEvent.type(input, 'a');
    await expect(input).toHaveValue(`${args.defaultValue}a`);
    await userEvent.type(input, '{backspace}');
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    onChange: fn(),
    'aria-label': 'Example disabled Text',
  },
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('Example disabled Text');
    await expect(input).toBeDisabled();

    // Typing should not fire any changes
    await userEvent.type(input, 'a');
    await expect(args.onChange).not.toHaveBeenCalled();
    await expect(input).toHaveValue(args.defaultValue);
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
  play: async ({ canvas }) => {
    // The input should have the small sizing
    await expect(canvas.getByRole('textbox')).toHaveClass('text-sm');
    // The wrapping Field should have small sizing
    await expect(canvas.getByText('Small label')).toHaveClass('text-xs');
  },
};

export const Medium: Story = {
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text',
  },
  play: async ({ canvas }) => {
    // The input should have medium sizing
    await expect(canvas.getByRole('textbox')).toHaveClass('text-base');
    // The wrapping Field should have medium sizing
    await expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
  },
};

export const Large: Story = {
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text',
  },
  play: async ({ canvas }) => {
    // The input should have medium sizing
    await expect(canvas.getByRole('textbox')).toHaveClass('text-lg');
    // The wrapping Field should have medium sizing
    await expect(canvas.getByText('Large label')).toHaveClass('text-lg');
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
