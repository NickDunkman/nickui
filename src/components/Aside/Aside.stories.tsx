import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/dev/stories/storyArgsTyper';

import { Aside } from './Aside';

const meta = {
  title: 'Notices/Aside',
  component: Aside,
  subcomponents: {
    'Aside.Heading': Aside.Heading,
    'Aside.Paragraph': Aside.Paragraph,
  },
  argTypes: storyArgsTyper<typeof Aside>({
    isFlavorable: true,
    isSizerable: true,
  }),
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const neutral: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    children: [
      <Aside.Heading key="1">Neutral Aside</Aside.Heading>,
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
    await step('Assert the neutral flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-blue-50');
    });
  },
};

export const positive: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    children: [
      <Aside.Heading key="1">Positive Aside</Aside.Heading>,
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
    await step('Assert the positive flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-emerald-50');
    });
  },
};

export const caution: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    children: [
      <Aside.Heading key="1">Caution Aside</Aside.Heading>,
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
    await step('Assert the caution flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-yellow-50');
    });
  },
};

export const negative: Story = {
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    children: [
      <Aside.Heading key="1">Negative Aside</Aside.Heading>,
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
    await step('Assert the negative flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-rose-50');
    });
  },
};

export const xs: Story = {
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

export const sm: Story = {
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

export const base: Story = {
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

export const lg: Story = {
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

export const xl: Story = {
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

export const responsive: Story = {
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

export const allFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Aside {...neutral.args} />
      <Aside {...positive.args} />
      <Aside {...caution.args} />
      <Aside {...negative.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper keepStacked>
      <Aside {...xs.args} />
      <Aside {...sm.args} />
      <Aside {...base.args} />
      <Aside {...lg.args} />
      <Aside {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
