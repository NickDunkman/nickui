import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Select } from './Select';

const meta = {
  title: 'Forms/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {
    value: 'controlled',
    onChange: () => {},
    'aria-label': 'Example Select with a controlled value',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="controlled" key="controlled">
        Controlled Select
      </option>,
    ],
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Example Select with an uncontrolled value',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Example disabled Select',
    children: <option>Disabled Select</option>,
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Select {...Controlled.args} />
      <Select {...Uncontrolled.args} />
      <Select {...Disabled.args} />
    </div>
  ),
};

export const Field: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <Select
      label="A label"
      explainer="An explainer"
      error="An error message"
      hint="A hint"
      defaultValue="A problematic value"
    >
      <option>An option</option>
    </Select>
  ),
};

export const Small: Story = {
  args: {
    sizer: Select.sizer.small,
    'aria-label': 'Example small Select',
    children: <option>Small Select (default)</option>,
  },
};

export const Medium: Story = {
  args: {
    sizer: Select.sizer.medium,
    'aria-label': 'Example medium Select',
    children: <option>Medium Select</option>,
  },
};

export const Large: Story = {
  args: {
    sizer: Select.sizer.large,
    'aria-label': 'Example large Select',
    children: <option>Large Select</option>,
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Select {...Small.args} />
      <Select {...Medium.args} />
      <Select {...Large.args} />
    </div>
  ),
};
