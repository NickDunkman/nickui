import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';

import { Shout } from './Shout';

const meta = {
  title: 'Notices/Shout',
  component: Shout,
} satisfies Meta<typeof Shout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  tags: ['flavor'],
  args: {
    flavor: Shout.flavor.info,
    children: 'Info Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the info flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-blue-800');
    });
  },
};

export const Yep: Story = {
  tags: ['flavor'],
  args: {
    flavor: Shout.flavor.yep,
    children: 'Yep Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the yep flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-emerald-700');
    });
  },
};

export const Maybe: Story = {
  tags: ['flavor'],
  args: {
    flavor: Shout.flavor.maybe,
    children: 'Maybe Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the maybe flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-yellow-500');
    });
  },
};

export const Nope: Story = {
  tags: ['flavor'],
  args: {
    flavor: Shout.flavor.nope,
    children: 'Nope Shout',
    role: 'alert',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the nope flavor style', async () => {
      expect(canvas.getByRole('alert')).toHaveClass('bg-rose-700');
    });
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: Shout.sizer.xs,
    children: 'Xs Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-sm');
    });
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: Shout.sizer.sm,
    children: 'Sm Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-sm');
    });
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: Shout.sizer.base,
    children: 'Base Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-base');
    });
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: Shout.sizer.lg,
    children: 'Lg Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-lg');
    });
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: Shout.sizer.xl,
    children: 'Xl Shout',
    role: 'status',
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-lg');
    });
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: [
      Shout.sizer.xs,
      Shout.sizer.smSm,
      Shout.sizer.mdBase,
      Shout.sizer.lgLg,
      Shout.sizer.xlXl,
    ],
    children: 'Responsive Shout',
    role: 'status',
  },
};

export const AllFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Shout {...Info.args} />
      <Shout {...Yep.args} />
      <Shout {...Maybe.args} />
      <Shout {...Nope.args} />
    </div>
  ),
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Shout {...Xs.args} />
      <Shout {...Sm.args} />
      <Shout {...Base.args} />
      <Shout {...Lg.args} />
      <Shout {...Xl.args} />
    </div>
  ),
};
