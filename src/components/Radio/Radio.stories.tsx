import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { Radio } from './Radio';

const meta = {
  title: 'Form controls/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Helper function for resetting a radio to unchecked during a test runner, such
 * as to test multiple checkings, or to reset a story back to its unchecked
 * state for the Storybook UI.
 */
async function uncheck(
  radio: HTMLElement,
  step: Parameters<NonNullable<Story['play']>>[0]['step'],
) {
  await step('Programmatically resetting the radio to unchecked', async () => {
    (radio as HTMLInputElement).checked = false;
    expect(radio).not.toBeChecked();
  });
}

export const CheckedFieldLayout: Story = {
  args: {
    label: 'A label',
    hint: 'A hint',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const radio = canvas.getByLabelText('A label');

    await step('Assert accessibility of layout elements', async () => {
      expect(radio).toHaveRole('radio');
      expect(radio).toHaveAccessibleDescription('A hint');
    });

    await step('Assert initial unchecked state', async () => {
      expect(radio).not.toBeChecked();
    });

    await step('Toggle the Radio by clicking the label', async () => {
      await userEvent.click(canvas.getByText('A label'));
      expect(radio).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await uncheck(radio, step);

    await step('Toggle the Radio by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(radio).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });

    await uncheck(radio, step);
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Radio',
  },
  play: ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Radio')).not.toBeChecked();
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: () => {},
  },
  play: async ({ canvas, step }) => {
    await step('Assert `checked` prop works', async () => {
      expect(canvas.getByLabelText('Controlled Radio')).toBeChecked();
    });
  },
};

export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true,
  },
  play: async ({ canvas, step }) => {
    await step('Assert `defaultChecked` prop works', async () => {
      expect(canvas.getByLabelText('Uncontrolled Radio')).toBeChecked();
    });
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled & unchecked Radio',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const radio = canvas.getByLabelText('Disabled & unchecked Radio');

    await step('Assert disabled & unchecked state', async () => {
      expect(radio).toBeDisabled();
      expect(radio).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });

    await step('Clicking the Radio should have no effect', async () => {
      await userEvent.click(radio);
      expect(radio).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & checked Radio',
    disabled: true,
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const radio = canvas.getByLabelText('Disabled & checked Radio');

    await step('Assert the disabled & checked state', async () => {
      expect(radio).toBeDisabled();
      expect(radio).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...DisabledUnchecked.args} />
      <Radio {...DisabledChecked.args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    label: 'Small Radio (default)',
    defaultChecked: true,
  },
  play: async ({ canvas, step }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  },
};

export const Medium: Story = {
  args: {
    sizer: Radio.sizer.medium,
    label: 'Medium Radio',
    defaultChecked: true,
  },
  play: async ({ canvas, step }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  },
};

export const Large: Story = {
  args: {
    sizer: Radio.sizer.large,
    label: 'Large Radio',
    defaultChecked: true,
  },
  play: async ({ canvas, step }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
    });
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: () => (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Radio {...Small.args} className="sm:flex-1" />
      <Radio {...Medium.args} className="sm:flex-1" />
      <Radio {...Large.args} className="sm:flex-1" />
    </div>
  ),
};
