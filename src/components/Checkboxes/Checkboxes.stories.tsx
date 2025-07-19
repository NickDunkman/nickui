import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Checkbox } from '@/components/Checkbox';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Checkboxes } from './Checkboxes';

const meta = {
  title: 'Form controls/Checkboxes',
  component: Checkboxes,
} satisfies Meta<typeof Checkboxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldsetLayout: Story = {
  tags: ['field-layout'],
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
    onChange: fn(),
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
  tags: ['control-state'],
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

    const cb1 = canvas.getByLabelText('Option one');
    const cb2 = canvas.getByLabelText('Option two');

    await step('Assert initial all-unchecked state', async () => {
      expect(cb1).not.toBeChecked();
      expect(cb2).not.toBeChecked();
    });

    await step('Check first Checkbox using the keyboard', async () => {
      await userEvent.tab();
      expect(cb1).toHaveFocus();

      await userEvent.keyboard(' ');
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await step('Check second Checkbox using the mouse', async () => {
      await userEvent.click(cb2);
      expect(cb1).toBeChecked();
      expect(cb2).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });

    await step('Reset all checked states', async () => {
      await userEvent.click(cb1);
      expect(cb1).not.toBeChecked();
      await userEvent.click(cb2);
      expect(cb2).not.toBeChecked();
    });
  },
};

export const Controlled: Story = {
  tags: ['control-state'],
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
    const cb1 = canvas.getByLabelText('Option one');
    const cb2 = canvas.getByLabelText('Option two');

    await step('Assert `value` prop works', async () => {
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
    });

    await step(
      'Try toggling a Checkbox. `onChange` should fire, but the value is controlled, so the Checkbox shouldn’t toggle',
      async () => {
        await userEvent.click(cb1);
        expect(args.onChange).toHaveBeenCalled();
        expect(cb1).toBeChecked();
        expect(cb2).not.toBeChecked();
      },
    );
  },
};

export const Uncontrolled: Story = {
  tags: ['control-state'],
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
    const cb1 = canvas.getByLabelText('Option one');
    const cb2 = canvas.getByLabelText('Option two');

    await step('Assert `defaultValue` prop works', async () => {
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
    });

    await step(
      'Toggling a Checkbox should both fire onChange & toggle the checked state, since the value is uncontrolled.',
      async () => {
        await userEvent.click(cb1);
        expect(args.onChange).toHaveBeenCalled();
        expect(cb1).not.toBeChecked();
        expect(cb2).not.toBeChecked();
      },
    );

    // reset back to original state
    await step('Reset to original value', async () => {
      await userEvent.click(cb1);
    });
  },
};

export const Disabled: Story = {
  tags: ['control-state'],
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
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert all Checkboxes are disabled', async () => {
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
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const cb1 = canvas.getByLabelText('Roman Aquila');
    const cb2 = canvas.getByLabelText('ISO 8601');
    const cb3 = canvas.getByLabelText('High Society');

    await step(
      'Assert the controlled Checkboxes are configured correctly',
      async () => {
        expect(cb1).not.toBeChecked();
        expect(cb1).not.toBeDisabled();

        expect(cb2).toBeChecked();
        expect(cb2).not.toBeDisabled();

        expect(cb3).not.toBeChecked();
        expect(cb3).toBeDisabled();
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
        <Checkbox
          {...checkbox({ value: 'colorful' })}
          label={<span className="font-bold text-blue-700">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Checkbox
          {...checkbox({ value: 'embiggened' })}
          sizer={Checkbox.sizer.lg}
          label="Embiggened"
        />
        <label>
          <input type="checkbox" {...checkbox({ value: 'native' })} /> Native
        </label>
      </div>
    ),
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const cb1 = canvas.getByLabelText('Colorful');
    const cb2 = canvas.getByLabelText('Embiggened');
    const cb3 = canvas.getByLabelText('Native');

    await step('Assert the render function’s callback works', async () => {
      expect(cb1).toBeChecked();
      expect(cb2).toBeChecked();
      expect(cb3).not.toBeChecked();
    });
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    label: 'Xs label',
    hint: 'Xs hint',
    sizer: Checkboxes.sizer.xs,
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style of both the Checkboxes & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-3.5');
        });
        expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    label: 'Sm label',
    hint: 'Sm hint',
    sizer: Checkboxes.sizer.sm,
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the sm sizer style of both the Checkboxes & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-3.5');
        });
        expect(canvas.getByText('Sm label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    label: 'Base label',
    hint: 'Base hint',
    sizer: Checkboxes.sizer.base,
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style of both the Checkboxes & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-4');
        });
        expect(canvas.getByText('Base label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    label: 'Lg label',
    hint: 'Lg hint',
    sizer: Checkboxes.sizer.lg,
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the lg style of both the Checkboxes & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-5');
        });
        expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    label: 'Xl label',
    hint: 'Xl hint',
    sizer: Checkboxes.sizer.xl,
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
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xl style of both the Checkboxes & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-5');
        });
        expect(canvas.getByText('Xl label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    label: 'Responsive label',
    hint: 'Responsive hint',
    sizer: [
      Checkboxes.sizer.xs,
      Checkboxes.sizer.smSm,
      Checkboxes.sizer.mdBase,
      Checkboxes.sizer.lgLg,
      Checkboxes.sizer.xlXl,
    ],
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

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper>
      <Checkboxes {...Xs.args} />
      <Checkboxes {...Sm.args} />
      <Checkboxes {...Base.args} />
      <Checkboxes {...Lg.args} />
      <Checkboxes {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
