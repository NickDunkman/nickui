import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Select } from './Select';

const meta = {
  title: 'Form controls/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldLayout: Story = {
  args: {
    required: true,
    label: 'A label',
    error: 'An error message',
    hint: 'A hint',
    children: <option>An option</option>,
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('required');

    await step('Assert accessibility of layout elements', async () => {
      expect(select).toHaveRole('combobox');
      expect(select).toHaveAccessibleDescription('A hint');
      expect(select).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert the error style', async () => {
      expect(select).toHaveClass('border-rose-800');
    });
  },
};

export const Controlled: Story = {
  args: {
    value: 'controlled',
    onChange: fn(),
    'aria-label': 'Controlled Select',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="controlled" key="controlled">
        Controlled Select
      </option>,
    ],
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const select = canvas.getByLabelText('Controlled Select');

    await step('Assert `value` works', async () => {
      expect(select).toHaveValue(args.value);
    });

    await step(
      'Try selecting the other option. `onChange` should fire, but the value is controlled, so it shouldn’t change',
      async () => {
        await userEvent.tab();
        expect(select).toHaveFocus();

        await userEvent.selectOptions(select, 'another');
        expect(args.onChange).toHaveBeenCalledOnce();
        expect(select).toHaveValue(args.value);
      },
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Uncontrolled Select',
    onChange: fn(),
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>,
    ],
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const select = canvas.getByLabelText('Uncontrolled Select');

    await step('Assert `defaultValue` works', async () => {
      expect(select).toHaveValue(args.defaultValue);
    });

    await step(
      'Selecting a different option should change the value, since it’s uncontrolled',
      async () => {
        await userEvent.selectOptions(select, 'another');
        expect(select).toHaveValue('another');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.selectOptions(select, 'uncontrolled');
      expect(select).toHaveValue('uncontrolled');
    });
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Disabled Select',
    onChange: fn(),
    children: <option value="disabled">Disabled Select</option>,
  },
  play: async ({ canvas, step }) => {
    await step('Assert disabled state', async () => {
      expect(canvas.getByLabelText('Disabled Select')).toBeDisabled();
    });
  },
};

export const Small: Story = {
  args: {
    label: 'Small label',
    sizer: Select.sizer.small,
    children: <option>Small Select (default)</option>,
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the small style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
        expect(canvas.getByText('Small label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium label',
    sizer: Select.sizer.medium,
    children: <option>Medium Select</option>,
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the medium style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
        expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Large: Story = {
  args: {
    label: 'Large label',
    sizer: Select.sizer.large,
    children: <option>Large Select</option>,
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the small style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
        expect(canvas.getByText('Large label')).toHaveClass('text-lg');
      },
    );
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

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col items-baseline gap-4 sm:flex-row">
      <div className="flex-1">
        <Select {...Small.args} />
      </div>
      <div className="flex-1">
        <Select {...Medium.args} />
      </div>
      <div className="flex-1">
        <Select {...Large.args} />
      </div>
    </div>
  ),
};
