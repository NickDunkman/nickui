import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form controls/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckedFieldLayout: Story = {
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

export const Unchecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Unchecked Checkbox',
    onChange: fn(),
  },
  play: ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Checkbox')).not.toBeChecked();
  },
};

export const Controlled: Story = {
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

export const Uncontrolled: Story = {
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

export const DisabledUnchecked: Story = {
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

export const DisabledChecked: Story = {
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

export const Xs: Story = {
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

export const Sm: Story = {
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

export const Base: Story = {
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

export const Lg: Story = {
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

export const Xl: Story = {
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

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Checkbox',
    defaultChecked: true,
    onChange: fn(),
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...DisabledUnchecked.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Checkbox {...Xs.args} />
      <Checkbox {...Sm.args} />
      <Checkbox {...Base.args} />
      <Checkbox {...Lg.args} />
      <Checkbox {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
