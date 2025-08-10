import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/dev/stories/storyArgsTyper';

import { Radio } from './Radio';

const meta = {
  title: 'Form controls/Radio',
  component: Radio,
  argTypes: storyArgsTyper<typeof Radio>({
    formControl: {
      isCheckable: true,
      isDisableable: true,
    },
    isSizerable: true,
  }),
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

export const checkedFieldLayout: Story = {
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

export const unchecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Unchecked Radio',
    onChange: fn(),
  },
  play: ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Radio')).not.toBeChecked();
  },
};

export const controlled: Story = {
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

export const uncontrolled: Story = {
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

export const disabledUnchecked: Story = {
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

export const disabledChecked: Story = {
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

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
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

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4.75');
    });
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5.5');
    });
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Radio',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-6');
    });
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Radio',
    defaultChecked: true,
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Radio {...unchecked.args} />
      <Radio {...controlled.args} />
      <Radio {...uncontrolled.args} />
      <Radio {...disabledUnchecked.args} />
      <Radio {...disabledChecked.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Radio {...xs.args} />
      <Radio {...sm.args} />
      <Radio {...base.args} />
      <Radio {...lg.args} />
      <Radio {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
