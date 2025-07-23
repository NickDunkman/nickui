import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Radio } from '@/components/Radio';
import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Radios } from './Radios';

const meta = {
  title: 'Form controls/Radios',
  component: Radios,
} satisfies Meta<typeof Radios>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Helper function for resetting a radio to unchecked during a test runner, such
 * as to test multiple checkings, or to reset a story back to its unchecked
 * state for the Storybook UI.
 */
async function uncheckAll(
  canvas: Parameters<NonNullable<Story['play']>>[0]['canvas'],
  step: Parameters<NonNullable<Story['play']>>[0]['step'],
) {
  await step('Programmatically resetting the radios to unchecked', async () => {
    canvas.getAllByRole('radio').forEach((radio) => {
      (radio as HTMLInputElement).checked = false;
      expect(radio).not.toBeChecked();
    });
  });
}

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

    const r1 = canvas.getByLabelText('Option one');
    const r2 = canvas.getByLabelText('Option two');

    await step('Assert initial all-unchecked state', async () => {
      expect(r1).not.toBeChecked();
      expect(r2).not.toBeChecked();
    });

    await step('Check first Radio using the keyboard', async () => {
      await userEvent.tab();
      expect(r1).toHaveFocus();

      await userEvent.keyboard(' ');
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await step('Focus on second Radio using keyboard', async () => {
      await userEvent.keyboard('{ArrowDown}');
      expect(r2).toHaveFocus();
    });

    await step('Check second Radio using the mouse', async () => {
      await userEvent.click(r2);
      expect(r1).not.toBeChecked();
      expect(r2).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });

    uncheckAll(canvas, step);
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
    const r1 = canvas.getByLabelText('Option one');
    const r2 = canvas.getByLabelText('Option two');

    await step('Assert `value` prop works', async () => {
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
    });

    await step(
      'Try checking the other Radio. `onChange` should fire, but the value is controlled, so the Radio shouldn’t check',
      async () => {
        await userEvent.click(r2);
        expect(args.onChange).toHaveBeenCalled();
        expect(r1).toBeChecked();
        expect(r2).not.toBeChecked();
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
    const r1 = canvas.getByLabelText('Option one');
    const r2 = canvas.getByLabelText('Option two');

    await step('Assert `defaultValue` prop works', async () => {
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
    });

    await step(
      'Check the other Radio. `onChange` should fire & the Radio should become checked, since the value is uncontrolled.',
      async () => {
        await userEvent.click(r2);
        expect(args.onChange).toHaveBeenCalled();
        expect(r1).not.toBeChecked();
        expect(r2).toBeChecked();
      },
    );

    // reset back to original state
    await step('Reset to original value', async () => {
      await userEvent.click(r1);
      expect(r1).toBeChecked();
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
    await step('Assert all Radios are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
  },
};

export const StandardLayout: Story = {
  args: {
    name: 'standard',
    label: 'Please select a standard',
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
    const r1 = canvas.getByLabelText('Roman Aquila');
    const r2 = canvas.getByLabelText('ISO 8601');
    const r3 = canvas.getByLabelText('High Society');

    await step(
      'Assert the controlled Checkboxes are configured correctly',
      async () => {
        expect(r1).not.toBeChecked();
        expect(r1).not.toBeDisabled();

        expect(r2).toBeChecked();
        expect(r2).not.toBeDisabled();

        expect(r3).not.toBeChecked();
        expect(r3).toBeDisabled();
      },
    );
  },
};

export const CustomLayout: Story = {
  args: {
    name: 'how-custom',
    label: 'How custom do you like it?',
    defaultValue: 'nice-and-custom',
    render: (radio) => (
      <div className="flex items-baseline gap-4">
        <Radio {...radio({ value: 'plain' })} label="Just plain" />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'nice-and-custom' })}
          label={
            <div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-emerald-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer="lg"
          label="Too custom"
        />
      </div>
    ),
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const r1 = canvas.getByLabelText('Just plain');
    const r2 = canvas.getByLabelText('👨‍🎨 Nice and custom');
    const r3 = canvas.getByLabelText('Too custom');

    await step('Assert the render function’s callback works', async () => {
      expect(r1).not.toBeChecked();
      expect(r2).toBeChecked();
      expect(r3).not.toBeChecked();
    });
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs label',
    hint: 'Xs hint',
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
      'Assert the xs sizer style of both the Radios & Fieldset',
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
    sizer: 'sm',
    label: 'Sm label',
    hint: 'Sm hint',
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
      'Assert the sm sizer style of both the Radios & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-4');
        });
        expect(canvas.getByText('Sm label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base label',
    hint: 'Base hint',
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
      'Assert the base sizer style of both the Radios & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-4.75');
        });
        expect(canvas.getByText('Base label')).toHaveClass('text-base');
      },
    );
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg label',
    hint: 'Lg hint',
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
      'Assert the lg sizer style of both the Radios & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-5.5');
        });
        expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl label',
    hint: 'Xl hint',
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
      'Assert the xl sizer style of both the Radios & Fieldset',
      async () => {
        canvas.getAllByTestId('indicator').forEach((indicator) => {
          expect(indicator).toHaveClass('size-6');
        });
        expect(canvas.getByText('Xl label')).toHaveClass('text-xl');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
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
    onChange: fn(),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Radios {...NoValue.args} className="sm:flex-1" />
      <Radios {...Controlled.args} className="sm:flex-1" />
      <Radios {...Uncontrolled.args} className="sm:flex-1" />
      <Radios {...Disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Radios {...Xs.args} />
      <Radios {...Sm.args} />
      <Radios {...Base.args} />
      <Radios {...Lg.args} />
      <Radios {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
