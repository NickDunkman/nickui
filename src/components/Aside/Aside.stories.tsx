import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Aside } from './Aside';

const meta = {
  title: 'Notices/Aside',
  component: Aside,
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'info',
    children: [
      <Aside.Heading key="1">Info Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the info flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-blue-50');
    });
  },
};

export const Yep: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'yep',
    children: [
      <Aside.Heading key="1">Yep Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the yep flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-emerald-50');
    });
  },
};

export const Maybe: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'maybe',
    children: [
      <Aside.Heading key="1">Maybe Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the maybe flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-yellow-50');
    });
  },
};

export const Nope: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'nope',
    children: [
      <Aside.Heading key="1">Nope Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the nope flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-rose-50');
    });
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: [
      <Aside.Heading key="1">Xs Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-xs');
      expect(canvas.getByRole('heading')).toHaveClass('text-xs');
    });
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: [
      <Aside.Heading key="1">Sm Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-xs');
      expect(canvas.getByRole('heading')).toHaveClass('text-sm');
    });
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: [
      <Aside.Heading key="1">Base Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-sm');
      expect(canvas.getByRole('heading')).toHaveClass('text-base');
    });
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: [
      <Aside.Heading key="1">Lg Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-base');
      expect(canvas.getByRole('heading')).toHaveClass('text-lg');
    });
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: [
      <Aside.Heading key="1">Xl Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
  play: async ({ canvas, step }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-lg');
      expect(canvas.getByRole('heading')).toHaveClass('text-xl');
    });
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: [
      <Aside.Heading key="1">Responsive Aside</Aside.Heading>,
      <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>,
    ],
  },
};

export const AllFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Aside {...Info.args} />
      <Aside {...Yep.args} />
      <Aside {...Maybe.args} />
      <Aside {...Nope.args} />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper keepStacked>
      <Aside {...Xs.args} />
      <Aside {...Sm.args} />
      <Aside {...Base.args} />
      <Aside {...Lg.args} />
      <Aside {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
