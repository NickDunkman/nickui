import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Textarea } from './Textarea';

const meta = {
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: 'Empty Textarea',
    'aria-label': 'Empty Textarea with no set value',
  },
};

export const Controlled: Story = {
  args: {
    value: 'Controlled Textarea',
    onChange: () => {},
    'aria-label': 'Example Textarea with a controlled value',
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Uncontrolled Textarea',
    'aria-label': 'Example Textarea with an uncontrolled value',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled Textarea',
    disabled: true,
    'aria-label': 'Example disabled Textarea',
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Textarea {...Empty.args} />
      <Textarea {...Controlled.args} />
      <Textarea {...Uncontrolled.args} />
      <Textarea {...Disabled.args} />
    </div>
  ),
};

export const FieldLayout: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <Textarea
      label="A label"
      explainer="An explainer"
      error="An error message"
      hint="A hint"
      defaultValue="A problematic value"
    />
  ),
};

export const Small: Story = {
  args: {
    sizer: Textarea.sizer.small,
    placeholder: 'Small Textarea (default)',
    'aria-label': 'Example small Textarea',
  },
};

export const Medium: Story = {
  args: {
    sizer: Textarea.sizer.medium,
    placeholder: 'Medium Textarea',
    'aria-label': 'Example medium Textarea',
  },
};

export const Large: Story = {
  args: {
    sizer: Textarea.sizer.large,
    placeholder: 'Large Textarea',
    'aria-label': 'Example large Textarea',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Textarea {...Small.args} />
      <Textarea {...Medium.args} />
      <Textarea {...Large.args} />
    </div>
  ),
};

export const MinimumHeight: Story = {
  args: {
    defaultValue: 'Some minimal text',
    'aria-label': 'Example Textarea using its minimum height',
    rows: 3,
  },
};

export const AutoResize: Story = {
  args: {
    'aria-label': 'Example Textarea using autoResize',
    defaultValue:
      'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    autoResize: true,
  },
};

export const MaximumHeight: Story = {
  args: {
    'aria-label': 'Example Textarea using autoResize + maxRows',
    defaultValue:
      'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    autoResize: true,
    maxRows: 3,
  },
};

export const AllResizables: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Textarea {...AutoResize.args} />
      <Textarea {...MaximumHeight.args} />
    </div>
  ),
};

export const DisableManualResize: Story = {
  args: {
    'aria-label': 'Example Textarea that can’t be manually resized',
    defaultValue: 'This Textarea has no resize handle at the bottom right!',
    disableManualResize: true,
  },
};
