import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';

import { Slider } from './Slider';

const meta = {
  title: 'Form controls/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

function withMetaHint(
  hint: string,
): Partial<React.ComponentProps<typeof Slider>> {
  return {
    hint: ({ value }) => (
      <div className="flex">
        <div>{hint}</div>
        <div className="ml-auto">{value}</div>
      </div>
    ),
    'aria-label': hint,
  };
}

export const fieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const slider = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');

    await step('Assert accessibility of layout elements', async () => {
      expect(slider).toHaveRole('slider');
      expect(slider).toHaveAccessibleDescription('A hint');
      expect(slider).toHaveAccessibleErrorMessage('An error message');
      expect(slider).toHaveValue(50);
      expect(slider).toHaveAttribute('aria-valuemin', '0');
      expect(slider).toHaveAttribute('aria-valuemax', '100');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert the error style', async () => {
      expect(canvas.getByTestId('fill')).toHaveClass('bg-rose-800');
    });
  },
};

export const noValue: Story = {
  tags: ['control-state'],
  args: {
    ...withMetaHint('Slider with no valueish prop'),
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const slider = canvas.getByRole('slider');

    await step('Increase value using right arrow', async () => {
      expect(slider).toHaveValue(0);
      await userEvent.tab();
      expect(slider).toHaveFocus();

      await userEvent.keyboard('{ArrowRight}');
      expect(slider).toHaveValue(1);
      expect(args.onChange).toHaveBeenCalledOnce();

      await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
      expect(slider).toHaveValue(11);
    });

    await step('Increase value using up arrow', async () => {
      await userEvent.keyboard('{ArrowUp}');
      expect(slider).toHaveValue(12);
      await userEvent.keyboard('{Shift>}{ArrowUp}{/Shift}');
      expect(slider).toHaveValue(22);
    });

    await step('Increase value using page up', async () => {
      await userEvent.keyboard('{PageUp}');
      expect(slider).toHaveValue(32);
    });

    await step('Decrease value using left arrow', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(slider).toHaveValue(31);
      await userEvent.keyboard('{Shift>}{ArrowLeft}{/Shift}');
      expect(slider).toHaveValue(21);
    });

    await step('Decrease value using down arrow', async () => {
      await userEvent.keyboard('{ArrowDown}');
      expect(slider).toHaveValue(20);
      await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
      expect(slider).toHaveValue(10);
    });

    await step('Increase value using page up', async () => {
      await userEvent.keyboard('{PageDown}');
      expect(slider).toHaveValue(0);
    });

    await step('Set value to max using end key', async () => {
      await userEvent.keyboard('{End}');
      expect(slider).toHaveValue(100);
    });

    await step('Set value to min using home key', async () => {
      await userEvent.keyboard('{Home}');
      expect(slider).toHaveValue(0);
      expect(args.onChange).toHaveBeenCalledTimes(12);
    });

    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  },
};

export const controlled: Story = {
  tags: ['control-state'],
  args: {
    ...withMetaHint('Slider with controlled value'),
    value: '50',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const slider = canvas.getByRole('slider');

    await step('Assert `value` works', async () => {
      expect(slider).toHaveValue(50);
    });

    await step('Focus the Slider', async () => {
      await userEvent.tab();
      expect(slider).toHaveFocus();
    });

    await step(
      'Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change',
      async () => {
        await userEvent.keyboard('{ArrowRight}');
        expect(args.onChange).toHaveBeenCalledOnce();
        expect(slider).toHaveValue(50);
      },
    );

    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  },
};

export const uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    ...withMetaHint('Slider with uncontrolled value'),
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const slider = canvas.getByRole('slider');

    await step('Assert `defaultValue` works', async () => {
      expect(slider).toHaveValue(50);
    });

    await step('Focus the Slider', async () => {
      await userEvent.tab();
      expect(slider).toHaveFocus();
    });

    await step(
      'Sliding the Slider should change the value, since it’s uncontrolled',
      async () => {
        await userEvent.keyboard('{ArrowRight}');
        expect(slider).toHaveValue(51);
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(slider).toHaveValue(50);
    });

    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  },
};

export const disabled: Story = {
  tags: ['control-state'],
  args: {
    ...withMetaHint('Disabled Slider'),
    disabled: true,
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step, userEvent }) => {
    const slider = canvas.getByRole('slider');

    await step('Assert disabled state', async () => {
      expect(slider).toHaveAttribute('aria-disabled', 'true');
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  },
};

export const customRange: Story = {
  args: {
    ...withMetaHint('Slider with custom range'),
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500,
    onChange: fn(),
  },
  play: async ({ canvas, step, userEvent }) => {
    const slider = canvas.getByRole('slider');

    await step('Focus the Slider', async () => {
      await userEvent.tab();
      expect(slider).toHaveFocus();
    });

    await step('Increase the value by one step', async () => {
      expect(slider).toHaveValue(0);
      await userEvent.keyboard('{ArrowRight}');
      expect(slider).toHaveValue(0.01);
    });

    await step(
      'Use the shift key to decrease by one "shift step"',
      async () => {
        await userEvent.keyboard('{Shift>}{ArrowLeft}{/Shift}');
        expect(slider).toHaveValue(-4.99);
      },
    );

    await step('Go to the max value', async () => {
      await userEvent.keyboard('{End}');
      expect(slider).toHaveValue(1000);
    });

    await step('Go to the min value', async () => {
      await userEvent.keyboard('{Home}');
      expect(slider).toHaveValue(-1000);
    });

    await step('Reset back to the initial value', async () => {
      await userEvent.keyboard('{Escape}');
      expect(slider).toHaveValue(0);
    });

    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    ...withMetaHint('Xs Slider'),
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style on both the Slider & Field',
      async () => {
        expect(canvas.getByLabelText('Xs Slider')).toHaveClass('h-4');
        expect(
          canvas.getByText('Xs Slider').parentNode?.parentNode,
        ).toHaveClass('text-xs');
      },
    );
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    ...withMetaHint('Sm Slider'),
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the sm sizer style on both the Slider & Field',
      async () => {
        expect(canvas.getByLabelText('Sm Slider')).toHaveClass('h-5');
        expect(
          canvas.getByText('Sm Slider').parentNode?.parentNode,
        ).toHaveClass('text-xs');
      },
    );
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    ...withMetaHint('Base Slider'),
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style on both the Slider & Field',
      async () => {
        expect(canvas.getByLabelText('Base Slider')).toHaveClass('h-6');
        expect(
          canvas.getByText('Base Slider').parentNode?.parentNode,
        ).toHaveClass('text-sm');
      },
    );
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    ...withMetaHint('Lg Slider'),
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the lg sizer style on both the Slider & Field',
      async () => {
        expect(canvas.getByLabelText('Lg Slider')).toHaveClass('h-7');
        expect(
          canvas.getByText('Lg Slider').parentNode?.parentNode,
        ).toHaveClass('text-base');
      },
    );
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    ...withMetaHint('Xl Slider'),
    defaultValue: '50',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xl sizer style on both the Slider & Field',
      async () => {
        expect(canvas.getByLabelText('Xl Slider')).toHaveClass('h-8');
        expect(
          canvas.getByText('Xl Slider').parentNode?.parentNode,
        ).toHaveClass('text-lg');
      },
    );
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50',
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Slider {...noValue.args} />
      <Slider {...controlled.args} />
      <Slider {...uncontrolled.args} />
      <Slider {...disabled.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper>
      <Slider {...xs.args} className="sm:flex-1" />
      <Slider {...sm.args} className="sm:flex-1" />
      <Slider {...base.args} className="sm:flex-1" />
      <Slider {...lg.args} className="sm:flex-1" />
      <Slider {...xl.args} className="sm:flex-1" />
    </AllSizersStoryWrapper>
  ),
};
