import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Switch } from '@/components/Switch';

import { Switches } from './Switches';

const meta = {
  title: 'Form controls/Switches',
  component: Switches,
} satisfies Meta<typeof Switches>;

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
  play: async ({ canvas, step }) => {
    const fieldset = canvas.getByRole('group');
    const requiredAsterisk = canvas.getByTitle('required');

    await step('Assert accessibility of layout elements', async () => {
      expect(fieldset).toHaveAccessibleName('A label*');
      expect(fieldset).toHaveAccessibleDescription('A hint');
      expect(fieldset).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
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
  play: async ({ args, canvas, step, userEvent }) => {
    // When there's no value or defaultValue prop used, it should be able to
    // track an internal uncontrolled value.

    const s1 = canvas.getByLabelText('Option one');
    const s2 = canvas.getByLabelText('Option two');

    await step('Assert initial all-unchecked state', async () => {
      expect(s1).not.toBeChecked();
      expect(s2).not.toBeChecked();
    });

    await step('Check first Switch using the keyboard', async () => {
      await userEvent.tab();
      expect(s1).toHaveFocus();

      await userEvent.keyboard(' ');
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await step('Check second Switch using the mouse', async () => {
      await userEvent.click(s2);
      expect(s1).toBeChecked();
      expect(s2).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });

    await step('Reset all checked states', async () => {
      await userEvent.click(s1);
      expect(s1).not.toBeChecked();
      await userEvent.click(s2);
      expect(s2).not.toBeChecked();
    });
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
  play: async ({ args, canvas, step, userEvent }) => {
    const s1 = canvas.getByLabelText('Option one');
    const s2 = canvas.getByLabelText('Option two');

    await step('Assert `value` prop works', async () => {
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
    });

    await step(
      'Try toggling a Switch. `onChange` should fire, but the value is controlled, so the Switch shouldn’t toggle',
      async () => {
        await userEvent.click(s1);
        expect(args.onChange).toHaveBeenCalled();
        expect(s1).toBeChecked();
        expect(s2).not.toBeChecked();
      },
    );
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
  play: async ({ args, canvas, step, userEvent }) => {
    const s1 = canvas.getByLabelText('Option one');
    const s2 = canvas.getByLabelText('Option two');

    await step('Assert `defaultValue` prop works', async () => {
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
    });

    await step(
      'Toggling a Switch should both fire onChange & toggle the checked state, since the value is uncontrolled.',
      async () => {
        await userEvent.click(s1);
        expect(args.onChange).toHaveBeenCalled();
        expect(s1).not.toBeChecked();
        expect(s2).not.toBeChecked();
      },
    );

    // reset back to original state
    await step('Reset to original value', async () => {
      await userEvent.click(s1);
    });
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
        disabled: false,
      },
      {
        value: 'two',
        label: 'Option two',
      },
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert all Switches are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
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
  play: async ({ canvas, step }) => {
    const s1 = canvas.getByLabelText('Roman Aquila');
    const s2 = canvas.getByLabelText('ISO 8601');
    const s3 = canvas.getByLabelText('High Society');

    await step(
      'Assert the controlled Switches are configured correctly',
      async () => {
        expect(s1).not.toBeChecked();
        expect(s1).not.toBeDisabled();

        expect(s2).toBeChecked();
        expect(s2).not.toBeDisabled();

        expect(s3).not.toBeChecked();
        expect(s3).toBeDisabled();
      },
    );
  },
};

export const CustomLayout: Story = {
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: (checkbox) => (
      <div className="flex flex-row items-baseline gap-x-6">
        <Switch
          {...checkbox({ value: 'colorful' })}
          label={<span className="font-bold text-blue-700">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Switch
          {...checkbox({ value: 'embiggened' })}
          sizer={Switch.sizer.large}
          label="Embiggened"
        />
        <label>
          <input
            type="checkbox"
            {...checkbox({ value: 'native' })}
            aria-label="example using different control component"
          />{' '}
          Native
        </label>
      </div>
    ),
  },
  play: async ({ canvas, step }) => {
    const s1 = canvas.getByLabelText('Colorful');
    const s2 = canvas.getByLabelText('Embiggened');
    const s3 = canvas.getByLabelText('Native');

    await step('Assert the render function’s callback works', async () => {
      expect(s1).toBeChecked();
      expect(s2).toBeChecked();
      expect(s3).not.toBeChecked();
    });
  },
};

export const Small: Story = {
  args: {
    sizer: Switches.sizer.small,
    label: 'Small label',
    hint: 'Small hint',
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the small style of both the Switches & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('h-5');
        });
        expect(canvas.getByText('Small label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Medium: Story = {
  args: {
    sizer: Switches.sizer.medium,
    label: 'Medium label',
    hint: 'Medium hint',
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the medium style of both the Switches & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('h-6');
        });
        expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Large: Story = {
  args: {
    sizer: Switches.sizer.large,
    label: 'Large label',
    hint: 'Large hint',
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the laerge style of both the Switches & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('h-7');
        });
        expect(canvas.getByText('Large label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['!test'],
  args: {
    sizer: [Switches.sizer.smMedium, Switches.sizer.mdLarge],
    label: 'Responsive label',
    hint: 'Responsive hint',
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
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Switches {...NoValue.args} className="sm:flex-1" />
      <Switches {...Controlled.args} className="sm:flex-1" />
      <Switches {...Uncontrolled.args} className="sm:flex-1" />
      <Switches {...Disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Switches {...Small.args} className="sm:flex-1" />
      <Switches {...Medium.args} className="sm:flex-1" />
      <Switches {...Large.args} className="sm:flex-1" />
      <Switches {...Responsive.args} className="sm:flex-1" />
    </div>
  ),
};
