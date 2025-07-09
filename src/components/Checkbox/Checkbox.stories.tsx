import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form controls/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckedFieldLayout: Story = {
  args: {
    label: 'A label',
    hint: 'A hint',
  },
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toHaveAccessibleName('A label');
    expect(checkbox).toHaveAccessibleDescription('A hint');
    expect(checkbox).not.toBeChecked();

    // ensure that you can click the label & hint to toggle the checkbox

    const label = canvas.getByText('A label');
    await userEvent.click(label);
    expect(checkbox).toBeChecked();

    const hint = canvas.getByText('A hint');
    await userEvent.click(hint);
    expect(checkbox).not.toBeChecked();
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Checkbox',
  },
  play: ({ canvas }) => {
    const checkbox = canvas.getByLabelText('Unchecked Checkbox');
    expect(checkbox).not.toBeChecked();
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const checkbox = canvas.getByLabelText('Controlled Checkbox');
    expect(checkbox).toBeChecked();

    // The Checkbox is controlled, and we don't have a wrapper setup to pass in
    // the new checked state, so while a change event should be fired, the
    // Checkbox should still be checked.
    await userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  },
};

export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Checkbox',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const checkbox = canvas.getByLabelText('Uncontrolled Checkbox');
    expect(checkbox).toBeChecked();

    // The Checkbox is uncontrolled, so clicking should cause the checked
    // state to change.
    await userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();

    // Reset back to checked
    await userEvent.click(checkbox);
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const checkbox = canvas.getByLabelText('Disabled Checkbox');
    expect(checkbox).toBeDisabled();

    // Disabled style should be activated
    const indicator = canvas.getByTestId('indicator');
    expect(indicator).toHaveClass('bg-gray-100');

    // The Checkbox is uncontrolled, so clicking should cause the checked
    // state to change.
    await userEvent.click(checkbox);
    expect(args.onChange).not.toHaveBeenCalled();
  },
};

export const DisabledChecked: Story = {
  tags: ['!test'],
  args: {
    label: 'Disabled & checked Checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...Disabled.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    sizer: Checkbox.sizer.small,
    label: 'Small Checkbox (default)',
    defaultChecked: true,
  },
  play: ({ canvas }) => {
    // Small style should be activated
    expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
  },
};

export const Medium: Story = {
  args: {
    sizer: Checkbox.sizer.medium,
    label: 'Medium Checkbox',
    defaultChecked: true,
  },
  play: ({ canvas }) => {
    // Medium style should be activated
    expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
  },
};

export const Large: Story = {
  args: {
    sizer: Checkbox.sizer.large,
    label: 'Large Checkbox',
    defaultChecked: true,
  },
  play: ({ canvas }) => {
    // Large style should be activated
    expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Medium.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
