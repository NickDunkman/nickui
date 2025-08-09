import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/utils/storyArgsTyper';

import { Shout } from './Shout';

const meta = {
  title: 'Notices/Shout',
  component: Shout,
  argTypes: storyArgsTyper<typeof Shout>({
    hasFlavors: true,
    hasSizers: true,
  }),
} satisfies Meta<typeof Shout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const neutral: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    children: 'Neutral Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the neutral flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-blue-700');
    });
  },
};

export const positive: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    children: 'Positive Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the positive flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-emerald-700');
    });
  },
};

export const caution: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    children: 'Caution Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the caution flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-yellow-500');
    });
  },
};

export const negative: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    children: 'Negative Shout',
    role: 'alert',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the negative flavor style', async () => {
      expect(canvas.getByRole('alert')).toHaveClass('bg-rose-700');
    });
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: 'Xs Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-xs');
    });
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: 'Sm Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-sm');
    });
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: 'Base Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-base');
    });
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: 'Lg Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-lg');
    });
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: 'Xl Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-xl');
    });
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Shout',
    role: 'status',
  },
};

export const allFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Shout {...neutral.args} />
      <Shout {...positive.args} />
      <Shout {...caution.args} />
      <Shout {...negative.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Shout {...xs.args} className="sm:flex-12" />
      <Shout {...sm.args} className="sm:flex-14" />
      <Shout {...base.args} className="sm:flex-16" />
      <Shout {...lg.args} className="sm:flex-18" />
      <Shout {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
  ),
};
