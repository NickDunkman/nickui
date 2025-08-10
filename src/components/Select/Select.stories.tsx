import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/dev/stories/AllSizersStoryWrapper';
import { storyArgsTyper } from '@/dev/stories/storyArgsTyper';

import { Select } from './Select';

const meta = {
  title: 'Form controls/Select',
  component: Select,
  argTypes: storyArgsTyper<typeof Select>({
    formControl: {
      isDisableable: true,
      valueType: 'string',
    },
    isSizerable: true,
  }),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const fieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    error: 'An error message',
    hint: 'A hint',
    children: <option>An option</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');

    await step('Assert accessibility of layout elements', async () => {
      expect(select).toHaveRole('combobox');
      expect(select).toHaveAccessibleDescription('A hint');
      expect(select).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert the error style', async () => {
      expect(select).toHaveClass('border-rose-800');
    });
  },
};

export const controlled: Story = {
  tags: ['control-state'],
  args: {
    value: 'controlled',
    'aria-label': 'Controlled Select',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="controlled" key="controlled">
        Controlled Select
      </option>,
    ],
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const select = canvas.getByLabelText('Controlled Select');

    await step('Assert `value` works', async () => {
      expect(select).toHaveValue(args.value);
    });

    await step(
      'Try selecting the other option. `onChange` should fire, but the value is controlled, so it shouldn’t change',
      async () => {
        await userEvent.tab();
        expect(select).toHaveFocus();

        await userEvent.selectOptions(select, 'another');
        expect(args.onChange).toHaveBeenCalledOnce();
        expect(select).toHaveValue(args.value);
      },
    );
  },
};

export const uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Uncontrolled Select',
    children: [
      <option value="another" key="another">
        Another option
      </option>,
      <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>,
    ],
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const select = canvas.getByLabelText('Uncontrolled Select');

    await step('Assert `defaultValue` works', async () => {
      expect(select).toHaveValue(args.defaultValue);
    });

    await step(
      'Selecting a different option should change the value, since it’s uncontrolled',
      async () => {
        await userEvent.selectOptions(select, 'another');
        expect(select).toHaveValue('another');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.selectOptions(select, 'uncontrolled');
      expect(select).toHaveValue('uncontrolled');
    });
  },
};

export const disabled: Story = {
  tags: ['control-state'],
  args: {
    disabled: true,
    'aria-label': 'Disabled Select',
    children: <option value="disabled">Disabled Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step('Assert disabled state', async () => {
      expect(canvas.getByLabelText('Disabled Select')).toBeDisabled();
    });
  },
};

export const xs: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Select',
    sizer: 'xs',
    children: <option>Xs Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('Xs Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step(
      'Assert the xs sizer style on both the Select & Field',
      async () => {
        expect(select).toHaveClass('text-xs');
        expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
      },
    );
  },
};

export const sm: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Select',
    sizer: 'sm',
    children: <option>Sm Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('Sm Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step(
      'Assert the sm sizer style on both the Select & Field',
      async () => {
        expect(select).toHaveClass('text-sm');
        expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
      },
    );
  },
};

export const base: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Select',
    sizer: 'base',
    children: <option>Base Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('Base Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step(
      'Assert the base sizer style on both the Select & Field',
      async () => {
        expect(select).toHaveClass('text-base');
        expect(field).toHaveAttribute('data-nickui-sizer', 'base');
      },
    );
  },
};

export const lg: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Select',
    sizer: 'lg',
    children: <option>Lg Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('Lg Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step(
      'Assert the lg sizer style on both the Select & Field',
      async () => {
        expect(select).toHaveClass('text-lg');
        expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
      },
    );
  },
};

export const xl: Story = {
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Select',
    sizer: 'xl',
    children: <option>Xl Select</option>,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const select = canvas.getByLabelText('Xl Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step(
      'Assert the xl sizer style on both the Select & Field',
      async () => {
        expect(select).toHaveClass('text-xl');
        expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
      },
    );
  },
};

export const responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    children: <option>Responsive Select</option>,
    onChange: fn(),
  },
};

export const allControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Select {...controlled.args} className="sm:flex-1" />
      <Select {...uncontrolled.args} className="sm:flex-1" />
      <Select {...disabled.args} className="sm:flex-1" />
    </div>
  ),
};

export const allSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <Select {...xs.args} className="sm:flex-12" />
      <Select {...sm.args} className="sm:flex-14" />
      <Select {...base.args} className="sm:flex-16" />
      <Select {...lg.args} className="sm:flex-18" />
      <Select {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
  ),
};
