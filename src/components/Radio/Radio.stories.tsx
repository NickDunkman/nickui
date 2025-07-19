import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

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
  tags: ['field-layout'],
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
  tags: ['control-state'],
  args: {
    label: 'Unchecked Radio',
    onChange: fn(),
  },
  play: ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Radio')).not.toBeChecked();
  },
};

export const Controlled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert `checked` prop works', async () => {
      expect(canvas.getByLabelText('Controlled Radio')).toBeChecked();
    });
  },
};

export const Uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert `defaultChecked` prop works', async () => {
      expect(canvas.getByLabelText('Uncontrolled Radio')).toBeChecked();
    });
  },
};

export const DisabledUnchecked: Story = {
  tags: ['control-state'],
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
  tags: ['control-state'],
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

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: Radio.sizer.xs,
    label: 'Xs Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: Radio.sizer.sm,
    label: 'Sm Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: Radio.sizer.base,
    label: 'Base Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: Radio.sizer.lg,
    label: 'Lg Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
    });
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: Radio.sizer.xl,
    label: 'Xl Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
    });
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: [
      Radio.sizer.xs,
      Radio.sizer.smSm,
      Radio.sizer.mdBase,
      Radio.sizer.lgLg,
      Radio.sizer.xlXl,
    ],
    label: 'Responsive Radio',
    defaultChecked: true,
    onChange: fn(),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...DisabledUnchecked.args} />
      <Radio {...DisabledChecked.args} />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper>
      <Radio {...Xs.args} />
      <Radio {...Sm.args} />
      <Radio {...Base.args} />
      <Radio {...Lg.args} />
      <Radio {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
