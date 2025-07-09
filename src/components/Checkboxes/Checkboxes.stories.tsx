import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Checkbox } from '@/components/Checkbox';

import { Checkboxes } from './Checkboxes';

const meta = {
  title: 'Form controls/Checkboxes',
  component: Checkboxes,
} satisfies Meta<typeof Checkboxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldsetLayout: Story = {
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
  play: ({ canvas }) => {
    const fieldset = canvas.getByRole('group');
    expect(fieldset).toHaveAccessibleName('A label*');
    expect(fieldset).toHaveAccessibleDescription('A hint');
    expect(fieldset).toHaveAccessibleErrorMessage('An error message');

    expect(canvas.getByTitle('required')).toHaveTextContent('*');

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toHaveRole('checkbox');
    expect(cb1).not.toBeChecked();

    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).toHaveRole('checkbox');
    expect(cb2).not.toBeChecked();
  },
};

export const NoValue: Story = {
  args: {
    label: 'No valueish prop',
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    // When there's no value or defaultValue prop used, it should be able to
    // track an internal uncontrolled value.

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).not.toBeChecked();

    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).not.toBeChecked();

    await userEvent.click(cb1);
    expect(cb1).toBeChecked();
    expect(cb2).not.toBeChecked();
    expect(args.onChange).toHaveBeenCalled();

    await userEvent.click(cb2);
    expect(cb1).toBeChecked();
    expect(cb2).toBeChecked();

    await userEvent.click(cb1);
    expect(cb1).not.toBeChecked();
    expect(cb2).toBeChecked();

    await userEvent.click(cb2);
    expect(cb1).not.toBeChecked();
    expect(cb2).not.toBeChecked();
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled',
    value: 'one',
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the checkboxes
    // shouldn't change checked status.

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toBeChecked();

    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).not.toBeChecked();

    await userEvent.click(cb1);
    expect(args.onChange).toHaveBeenCalled();
    expect(cb1).toBeChecked();
    expect(cb2).not.toBeChecked();
  },
};

export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled',
    defaultValue: 'one',
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    // The value is uncontrolled, so the checked statuses should change  without
    // having any other mechanism for updating the value prop.

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toBeChecked();

    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).not.toBeChecked();

    await userEvent.click(cb1);
    expect(args.onChange).toHaveBeenCalled();
    expect(cb1).not.toBeChecked();
    expect(cb2).not.toBeChecked();

    // reset back to original state
    await userEvent.click(cb1);
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    defaultValue: 'one',
    disabled: true,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toBeDisabled();

    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).toBeDisabled();

    await userEvent.click(cb1);
    expect(args.onChange).not.toHaveBeenCalled();
  },
};

export const StandardLayout: Story = {
  args: {
    label: 'Please select some standards',
    defaultValue: '8601',
    options: [
      {
        value: 'aquila',
        label: 'Roman Aquila',
      },
      {
        value: '8601',
        label: 'ISO 8601',
      },
      {
        value: 'high-society',
        label: 'High Society',
        disabled: true,
      },
    ],
  },
  play: ({ canvas }) => {
    const cb1 = canvas.getByLabelText('Roman Aquila');
    expect(cb1).not.toBeChecked();
    expect(cb1).not.toBeDisabled();

    const cb2 = canvas.getByLabelText('ISO 8601');
    expect(cb2).toBeChecked();
    expect(cb2).not.toBeDisabled();

    const cb3 = canvas.getByLabelText('High Society');
    expect(cb3).not.toBeChecked();
    expect(cb3).toBeDisabled();
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Checkboxes {...NoValue.args} className="sm:flex-1" />
      <Checkboxes {...Controlled.args} className="sm:flex-1" />
      <Checkboxes {...Uncontrolled.args} className="sm:flex-1" />
      <Checkboxes {...Disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const CustomLayout: Story = {
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: (checkbox) => (
      <div className="flex flex-row items-baseline gap-x-6">
        <Checkbox
          {...checkbox({ value: 'colorful' })}
          label={<span className="font-bold text-blue-700">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Checkbox
          {...checkbox({ value: 'embiggened' })}
          sizer={Checkbox.sizer.large}
          label="Embiggened"
        />
        <label>
          <input type="checkbox" {...checkbox({ value: 'native' })} /> Native
        </label>
      </div>
    ),
  },
  play: ({ canvas }) => {
    const cb1 = canvas.getByLabelText('Colorful');
    expect(cb1).toBeChecked();

    const cb2 = canvas.getByLabelText('Embiggened');
    expect(cb2).toBeChecked();

    const cb3 = canvas.getByLabelText('Native');
    expect(cb3).not.toBeChecked();
  },
};

export const Small: Story = {
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Checkboxes.sizer.small,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
  play: ({ canvas }) => {
    // The checkboxes should use small sizing
    canvas.getAllByTestId('indicator').forEach((indicator) => {
      expect(indicator).toHaveClass('size-3.5');
    });
    // The wrapping Fieldset should use small sizing
    expect(canvas.getByText('Small label')).toHaveClass('text-xs');
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Checkboxes.sizer.medium,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
  play: ({ canvas }) => {
    // The checkboxes should use medium sizing
    canvas.getAllByTestId('indicator').forEach((indicator) => {
      expect(indicator).toHaveClass('size-4');
    });
    // The wrapping Fieldset should use medium sizing
    expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
  },
};

export const Large: Story = {
  args: {
    label: 'Large label',
    hint: 'Large hint',
    sizer: Checkboxes.sizer.large,
    options: [
      {
        value: 'one',
        label: 'Option one',
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
  play: ({ canvas }) => {
    // The checkboxes should use large sizing
    canvas.getAllByTestId('indicator').forEach((indicator) => {
      expect(indicator).toHaveClass('size-5');
    });
    // The wrapping Fieldset should use large sizing
    expect(canvas.getByText('Large label')).toHaveClass('text-lg');
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Checkboxes {...Small.args} className="sm:flex-1" />
      <Checkboxes {...Medium.args} className="sm:flex-1" />
      <Checkboxes {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
