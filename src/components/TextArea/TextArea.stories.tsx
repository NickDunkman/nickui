import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, fn } from 'storybook/test';

import { AllSizersStoryWrapper } from '@/utils/AllSizersStoryWrapper';
import { fastType } from '@/utils/fastType';

import { TextArea } from './TextArea';

const meta = {
  title: 'Form controls/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldLayout: Story = {
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    const textarea = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('required');

    await step('Assert accessibility of layout elements', async () => {
      expect(textarea).toHaveRole('textbox');
      expect(textarea).toHaveAccessibleDescription('A hint');
      expect(textarea).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });

    await step('Assert the error style', async () => {
      expect(textarea).toHaveClass('border-rose-800');
    });
  },
};

export const Empty: Story = {
  tags: ['control-state'],
  args: {
    placeholder: 'Empty TextArea',
    'aria-label': 'Empty TextArea',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const textarea = canvas.getByLabelText('Empty TextArea');

    await step(
      'Assert Text is functional without an initial value',
      async () => {
        await userEvent.type(textarea, 'a');
        expect(textarea).toHaveValue('a');
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.type(textarea, '{backspace}');
      expect(textarea).toHaveValue('');
    });
  },
};

export const Controlled: Story = {
  tags: ['control-state'],
  args: {
    value: 'Controlled TextArea',
    'aria-label': 'Controlled TextArea',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const textarea = canvas.getByLabelText('Controlled TextArea');

    await step('Assert `value` works', async () => {
      expect(textarea).toHaveValue(args.value);
    });

    await step(
      'Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change',
      async () => {
        await userEvent.type(textarea, 'a');
        expect(args.onChange).toHaveBeenCalledOnce();
        expect(textarea).toHaveValue(args.value);
      },
    );
  },
};

export const Uncontrolled: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: 'Uncontrolled TextArea',
    'aria-label': 'Uncontrolled TextArea',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const textarea = canvas.getByLabelText('Uncontrolled TextArea');

    await step('Assert `defaultValue` works', async () => {
      expect(textarea).toHaveValue(args.defaultValue);
    });

    await step(
      'Typing into the TextArea should amend the value, since it’s uncontrolled',
      async () => {
        await userEvent.type(textarea, 'a');
        expect(textarea).toHaveValue(`${args.defaultValue}a`);
        expect(args.onChange).toHaveBeenCalledOnce();
      },
    );

    await step('Reset the value', async () => {
      await userEvent.type(textarea, '{backspace}');
      expect(textarea).toHaveValue(args.defaultValue);
    });
  },
};

export const Disabled: Story = {
  tags: ['control-state'],
  args: {
    defaultValue: 'Disabled TextArea',
    disabled: true,
    'aria-label': 'Disabled TextArea',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const textarea = canvas.getByLabelText('Disabled TextArea');

    await step('Assert disabled state', async () => {
      expect(textarea).toBeDisabled();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(textarea, 'a');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(textarea).toHaveValue(args.defaultValue);
    });
  },
};

export const Xs: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs label',
    placeholder: 'Xs TextArea',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xs sizer style on both the TextArea & Field',
      async () => {
        expect(canvas.getByLabelText('Xs label')).toHaveClass('text-xs');
        expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
      },
    );
  },
};

export const Sm: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm label',
    placeholder: 'Sm TextArea',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the sm sizer style on both the TextArea & Field',
      async () => {
        expect(canvas.getByLabelText('Sm label')).toHaveClass('text-sm');
        expect(canvas.getByText('Sm label')).toHaveClass('text-sm');
      },
    );
  },
};

export const Base: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base label',
    placeholder: 'Base TextArea',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the base sizer style on both the TextArea & Field',
      async () => {
        expect(canvas.getByLabelText('Base label')).toHaveClass('text-base');
        expect(canvas.getByText('Base label')).toHaveClass('text-base');
      },
    );
  },
};

export const Lg: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg label',
    placeholder: 'Lg TextArea',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the lg sizer style on both the TextArea & Field',
      async () => {
        expect(canvas.getByLabelText('Lg label')).toHaveClass('text-lg');
        expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
      },
    );
  },
};

export const Xl: Story = {
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl label',
    placeholder: 'Xl TextArea',
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'Assert the xl sizer style on both the TextArea & Field',
      async () => {
        expect(canvas.getByLabelText('Xl label')).toHaveClass('text-xl');
        expect(canvas.getByText('Xl label')).toHaveClass('text-xl');
      },
    );
  },
};

export const Responsive: Story = {
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn(),
  },
};

export const AutoResizableHeight: Story = {
  args: {
    'aria-label': 'Autoresizable TextArea',
    defaultValue:
      'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    lang: 'la',
    minRows: 1,
    maxRows: 10,
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const textarea = canvas.getByLabelText('Autoresizable TextArea');

    function getCurrentRows() {
      return parseInt(textarea.getAttribute('rows') || '0');
    }

    await step(
      'The textarea should use the minRows after clearing the value',
      async () => {
        await userEvent.clear(textarea);
        expect(getCurrentRows()).toEqual(1);
      },
    );

    await step(
      'The textarea should use the maxRows after adding an absolute chunk of text',
      async () => {
        // userEvent.type does a character at a time -- first add a bunch programmatically to avoid the time delay
        await fastType(
          userEvent.type,
          textarea,
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`,
        );
        // then trigger a regular change with a single key press
        expect(getCurrentRows()).toEqual(10);
      },
    );

    await step('Reset to the original value', async () => {
      await userEvent.clear(textarea);
      await fastType(userEvent.type, textarea, args.defaultValue);
      expect(getCurrentRows()).toBeGreaterThanOrEqual(1);
      expect(getCurrentRows()).toBeLessThanOrEqual(10);
    });
  },
};

export const FixedHeight: Story = {
  args: {
    'aria-label': 'Fixed height TextArea',
    defaultValue:
      'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    rows: 3,
    minRows: 1,
    maxRows: 10,
    lang: 'la',
    onChange: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const textarea = canvas.getByLabelText('Fixed height TextArea');

    function getCurrentRows() {
      return parseInt(textarea.getAttribute('rows') || '0');
    }

    await step(
      'The textarea should use the fixed `rows` after clearing the value',
      async () => {
        await userEvent.clear(textarea);
        expect(getCurrentRows()).toEqual(3);
      },
    );

    await step(
      'The textarea should use the fixed `rows` after adding an absolute chunk of text',
      async () => {
        // userEvent.type does a character at a time -- first add a bunch programmatically to avoid the time delay
        await fastType(
          userEvent.type,
          textarea,
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`,
        );
        // then trigger a regular change with a single key press
        expect(getCurrentRows()).toEqual(3);
      },
    );

    await step('Reset to the original value', async () => {
      await userEvent.clear(textarea);
      await fastType(userEvent.type, textarea, args.defaultValue);
      expect(getCurrentRows()).toEqual(3);
    });
  },
};

export const DisableManualResize: Story = {
  args: {
    'aria-label': 'Disabled manual resize TextArea',
    defaultValue: 'This TextArea has no resize handle at the bottom right!',
    disableManualResize: true,
    onChange: fn(),
  },
  play: async ({ canvas, step }) => {
    await step(
      'The TextArea should have the resize handle hidden',
      async () => {
        expect(
          canvas.getByLabelText('Disabled manual resize TextArea'),
        ).toHaveClass('resize-none');
      },
    );
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <TextArea {...Empty.args} />
      <TextArea {...Controlled.args} />
      <TextArea {...Uncontrolled.args} />
      <TextArea {...Disabled.args} />
    </div>
  ),
};

export const AllSizers: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <AllSizersStoryWrapper alignBaseline>
      <TextArea {...Xs.args} />
      <TextArea {...Sm.args} />
      <TextArea {...Base.args} />
      <TextArea {...Lg.args} />
      <TextArea {...Xl.args} />
    </AllSizersStoryWrapper>
  ),
};
