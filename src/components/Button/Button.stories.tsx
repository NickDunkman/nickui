import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Button } from './Button';

const meta = {
  title: 'Form controls/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  tags: ['control-state'],
  args: {
    children: 'Enabled Button',
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Clicking the Button should trigger `onClick`', async () => {
      await userEvent.click(canvas.getByRole('button'));
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Disabled: Story = {
  tags: ['control-state'],
  args: {
    children: 'Disabled Button',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const button = canvas.getByRole('button');

    await step('Assert the disabled state', async () => {
      await expect(button).toBeDisabled();
    });

    await step('Clicking the Button should have no effect', async () => {
      await userEvent.click(button);
      expect(args.onClick).not.toHaveBeenCalled();
    });
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
  ),
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: 'Xs Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-xs');
    });
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: 'Sm Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: 'Base Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-base');
    });
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: 'Lg Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: 'Xl Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-xl');
    });
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Button',
    onClick: fn(),
  },
};

export const Neutral: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    secondary: false,
    children: 'Neutral Button (default)',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the neutral style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('bg-blue-600');
    });
  },
};

export const Negative: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    secondary: false,
    children: 'Negative Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the negative style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  },
};

export const SecondaryNeutral: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    secondary: true,
    children: 'Secondary neutral Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary neutral style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-blue-200');
    });
  },
};

export const SecondaryNegative: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    secondary: true,
    children: 'Secondary negative Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary negative style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  },
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <div>
        <Button {...Xs.args} />
      </div>
      <div>
        <Button {...Sm.args} />
      </div>
      <div>
        <Button {...Base.args} />
      </div>
      <div>
        <Button {...Lg.args} />
      </div>
      <div>
        <Button {...Xl.args} />
      </div>
    </AllSizersStoryWrapper>
  ),
};

export const AllFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...Neutral.args} />
      <Button {...Negative.args} />
    </div>
  ),
};

export const AllSecondaryFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...SecondaryNeutral.args} />
      <Button {...SecondaryNegative.args} />
    </div>
  ),
};
