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
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    error: 'An error message',
    hint: 'A hint',
    children: <option>An option</option>,
    onChange: fn(),
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
  tags: ['control-state'],
  args: {
    value: 'controlled',
    'aria-label': 'Controlled Select',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="controlled" key="controlled">
        Controlled Select
      </option>,
    ],
    onChange: fn(),
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
  tags: ['control-state'],
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Uncontrolled Select',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>,
    ],
    onChange: fn(),
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
  tags: ['control-state'],
  args: {
    disabled: true,
    'aria-label': 'Disabled Select',
    children: <option value="disabled">Disabled Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert disabled state', async () => {
      expect(canvas.getByLabelText('Disabled Select')).toBeDisabled();
    });
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: Select.sizer.xs,
    label: 'Xs label',
    children: <option>Small Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Xs label')).toHaveClass('text-sm');
        expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Small: Story = {
  tags: ['sizer'],
  args: {
    sizer: Select.sizer.small,
    label: 'Small label',
    children: <option>Small Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the small sizer style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
        expect(canvas.getByText('Small label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: Select.sizer.base,
    label: 'Base label',
    children: <option>Base Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Base label')).toHaveClass('text-base');
        expect(canvas.getByText('Base label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Large: Story = {
  tags: ['sizer'],
  args: {
    sizer: Select.sizer.large,
    label: 'Large label',
    children: <option>Large Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the small sizer style on both the Select & Field',
      async () => {
        expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
        expect(canvas.getByText('Large label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['!test', 'sizer'],
  args: {
    sizer: [Select.sizer.small, Select.sizer.smBase, Select.sizer.mdLarge],
    label: 'Responsive label',
    children: <option>Responsive Select</option>,
    onChange: fn(),
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

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col items-baseline gap-4 sm:flex-row">
      <Select {...Xs.args} className="sm:flex-1" />
      <Select {...Small.args} className="sm:flex-1" />
      <Select {...Base.args} className="sm:flex-1" />
      <Select {...Large.args} className="sm:flex-1" />
      <Select {...Responsive.args} className="sm:flex-1" />
    </div>
  ),
};
