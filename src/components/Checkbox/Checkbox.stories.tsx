import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { getStoryArgTypes } from '@/dev/stories/getStoryArgTypes';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form controls/Checkbox',
  component: Checkbox,
  argTypes: getStoryArgTypes<typeof Checkbox>({
    formControl: {
      isCheckable: true,
      isDisableable: true,
    },
    isSizerable: true,
  }),
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const checkedFieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    label: 'A label',
    hint: 'A hint',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const checkbox = canvas.getByLabelText('A label');

    await step('Assert accessibility of layout elements', async () => {
      expect(checkbox).toHaveRole('checkbox');
      expect(checkbox).toHaveAccessibleDescription('A hint');
    });

    await step('Assert initial unchecked state', async () => {
      expect(checkbox).not.toBeChecked();
    });

    await step('Toggle the Checkbox by clicking the label', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await step('Toggle the Checkbox by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(checkbox).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  },
};

export const unchecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Unchecked Checkbox',
    onChange: fn(),
  },
  play: ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Checkbox')).not.toBeChecked();
  },
};

export const controlled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const checkbox = canvas.getByLabelText('Controlled Checkbox');

    await step('Assert `checked` prop works', () => {
      expect(checkbox).toBeChecked();
    });

    await step(
      'Try unchecking the Checkbox. `onChange` should fire, but the checked state is controlled, so it shouldn’t change',
      async () => {
        await userEvent.click(checkbox);
        expect(args.onChange).toHaveBeenCalled();
        expect(checkbox).toBeChecked();
      },
    );
  },
};

export const uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled Checkbox',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const checkbox = canvas.getByLabelText('Uncontrolled Checkbox');

    await step('Assert `defaultChecked` prop works', () => {
      expect(checkbox).toBeChecked();
    });

    // The Checkbox is uncontrolled, so clicking should cause the checked
    // state to change.
    await step(
      'Clicking the Checkbox should toggle the checked state, since it’s uncontrolled',
      async () => {
        await userEvent.click(checkbox);
        expect(args.onChange).toHaveBeenCalled();
        expect(checkbox).not.toBeChecked();
      },
    );

    await step('Reset to checked state', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  },
};

export const disabledUnchecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Disabled & unchecked Checkbox',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const checkbox = canvas.getByLabelText('Disabled & unchecked Checkbox');

    await step('Assert disabled & unchecked state', async () => {
      expect(checkbox).toBeDisabled();
      expect(checkbox).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });

    await step('Clicking the Checkbox should have no effect', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const disabledChecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Disabled & checked Checkbox',
    disabled: true,
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const checkbox = canvas.getByLabelText('Disabled & checked Checkbox');

    await step('Assert disabled & checked state', async () => {
      expect(checkbox).toBeDisabled();
      expect(checkbox).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });

    await step('Clicking the Checkbox should have no effect', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Checkbox',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the xs sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Checkbox',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Checkbox',
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
    label: 'Lg Checkbox',
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
    label: 'Xl Checkbox',
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
    label: 'Responsive Checkbox',
    defaultChecked: true,
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Checkbox {...unchecked.args} />
      <Checkbox {...controlled.args} />
      <Checkbox {...uncontrolled.args} />
      <Checkbox {...disabledUnchecked.args} />
      <Checkbox {...disabledChecked.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Checkbox {...xs.args} />
      <Checkbox {...sm.args} />
      <Checkbox {...base.args} />
      <Checkbox {...lg.args} />
      <Checkbox {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
