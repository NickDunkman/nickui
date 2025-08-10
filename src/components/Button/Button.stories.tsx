import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/dev/stories/storyArgsTyper';

import { ALLOWED_TYPES, Button } from './Button';

const meta = {
  title: 'Form controls/Button',
  component: Button,
  argTypes: storyArgsTyper<typeof Button>({
    formControl: {
      isDisableable: true,
    },
    isFlavorable: true,
    isSizerable: true,
    defaultValues: {
      secondary: false,
      type: 'button',
    },
    types: {
      type: ALLOWED_TYPES,
    },
  }),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const enabled: Story = {
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

export const disabled: Story = {
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

export const xs: Story = {
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

export const sm: Story = {
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

export const base: Story = {
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

export const lg: Story = {
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

export const xl: Story = {
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

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Button',
    onClick: fn(),
  },
};

export const neutral: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    secondary: false,
    children: 'Neutral Button (default)',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the neutral style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-blue-600)]',
      );
    });
  },
};

export const positive: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    secondary: false,
    children: 'Positive Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the positive style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-emerald-700)]',
      );
    });
  },
};

export const caution: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    secondary: false,
    children: 'Caution Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the caution style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-yellow-500)]',
      );
    });
  },
};

export const negative: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    secondary: false,
    children: 'Negative Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the negative style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-rose-700)]',
      );
    });
  },
};

export const secondaryNeutral: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    secondary: true,
    children: 'Secondary neutral Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary neutral style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-blue-50)]',
      );
    });
  },
};

export const secondaryPositive: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    secondary: true,
    children: 'Secondary positive Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary positive style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-emerald-50)]',
      );
    });
  },
};

export const secondaryCaution: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    secondary: true,
    children: 'Secondary caution Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary caution style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-yellow-50)]',
      );
    });
  },
};

export const secondaryNegative: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    secondary: true,
    children: 'Secondary negative Button',
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the secondary negative style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass(
        '[--nickui-button-bg-color:var(--color-rose-50)]',
      );
    });
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex gap-4">
      <Button {...enabled.args} />
      <Button {...disabled.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <div>
        <Button {...xs.args} />
      </div>
      <div>
        <Button {...sm.args} />
      </div>
      <div>
        <Button {...base.args} />
      </div>
      <div>
        <Button {...lg.args} />
      </div>
      <div>
        <Button {...xl.args} />
      </div>
    </AllSizersStoryWrapper>
  ),
};

export const allFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...neutral.args} />
      <Button {...positive.args} />
      <Button {...caution.args} />
      <Button {...negative.args} />
    </div>
  ),
};

export const allSecondaryFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...secondaryNeutral.args} />
      <Button {...secondaryPositive.args} />
      <Button {...secondaryCaution.args} />
      <Button {...secondaryNegative.args} />
    </div>
  ),
};
