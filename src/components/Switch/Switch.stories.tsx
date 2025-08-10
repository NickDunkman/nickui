import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/dev/stories/storyArgsTyper';

import { Switch } from './Switch';

const meta = {
  title: 'Form controls/Switch',
  component: Switch,
  argTypes: storyArgsTyper<typeof Switch>({
    formControl: {
      isCheckable: true,
      isDisableable: true,
    },
    isSizerable: true,
  }),
} satisfies Meta<typeof Switch>;

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
    const swtch = canvas.getByLabelText('A label');

    await step('Assert accessibility of layout elements', async () => {
      expect(swtch).toHaveRole('checkbox');
      expect(swtch).toHaveAccessibleDescription('A hint');
    });

    await step('Assert initial unchecked state', async () => {
      expect(swtch).not.toBeChecked();
    });

    await step('Toggle the Switch by clicking the label', async () => {
      await userEvent.click(canvas.getByText('A label'));
      expect(swtch).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });

    await step('Toggle the Switch by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(swtch).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  },
};

export const unchecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Unchecked Switch',
    onChange: fn(),
  },
  play: async ({ canvas }) => {
    expect(canvas.getByLabelText('Unchecked Switch')).not.toBeChecked();
  },
};

export const controlled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Controlled Switch');

    await step('Assert `checked` prop works', () => {
      expect(swtch).toBeChecked();
    });

    await step(
      'Try unchecking the Switch. `onChange` should fire, but the checked state is controlled, so it shouldn’t change',
      async () => {
        await userEvent.click(swtch);
        expect(args.onChange).toHaveBeenCalled();
        expect(swtch).toBeChecked();
      },
    );
  },
};

export const uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Uncontrolled Switch');

    await step('Assert `defaultChecked` prop works', () => {
      expect(swtch).toBeChecked();
    });

    // The Switch is uncontrolled, so clicking should cause the checked
    // state to change.
    await step(
      'Clicking the Switch should toggle the checked state, since it’s uncontrolled',
      async () => {
        await userEvent.click(swtch);
        expect(args.onChange).toHaveBeenCalled();
        expect(swtch).not.toBeChecked();
      },
    );

    await step('Reset to checked state', async () => {
      await userEvent.click(swtch);
      expect(swtch).toBeChecked();
    });
  },
};

export const disabledUnchecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Disabled & unchecked Switch',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Disabled & unchecked Switch');

    await step('Assert disabled & unchecked state', async () => {
      expect(swtch).toBeDisabled();
      expect(swtch).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-300');
    });

    await step('Clicking the Switch should have no effect', async () => {
      await userEvent.click(swtch);
      expect(swtch).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const disabledChecked: Story = {
  tags: ['control-state'],
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const swtch = canvas.getByLabelText('Disabled & checked Switch');

    await step('Assert disabled & checked state', async () => {
      expect(swtch).toBeDisabled();
      expect(swtch).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-300');
    });

    await step('Clicking the Switch should have no effect', async () => {
      await userEvent.click(swtch);
      expect(swtch).toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the xs sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-4');
    });
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-5');
    });
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the base sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-6');
    });
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the lg sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-7');
    });
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Switch',
    defaultChecked: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert the the xl sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-8');
    });
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Switch',
    defaultChecked: true,
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Switch {...unchecked.args} />
      <Switch {...controlled.args} />
      <Switch {...uncontrolled.args} />
      <Switch {...disabledUnchecked.args} />
      <Switch {...disabledChecked.args} />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Switch {...xs.args} />
      <Switch {...sm.args} />
      <Switch {...base.args} />
      <Switch {...lg.args} />
      <Switch {...xl.args} />
    </AllSizersStoryWrapper>
  ),
};
