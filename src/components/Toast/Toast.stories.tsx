import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { DecoratorFunction } from 'storybook/internal/csf';

import { Button } from '@/components//Button';

import { Toast, ToastProps } from './Toast';
import { Toaster } from './Toaster';
import { toast } from './toastFn';

const meta = {
  title: 'Notices/Toast',
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithButtonOpener: DecoratorFunction<
  ReactRenderer,
  React.ComponentProps<typeof Toast>
> = (_, ctx) => {
  return (
    <>
      <Button onClick={() => toast(ctx.args)} flavor={ctx.args.flavor}>
        {ctx.name} Toast
      </Button>
      <Toaster />
    </>
  );
};

export const neutral: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'neutral',
    title: 'Neutral Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const positive: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'positive',
    title: 'Positive Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const caution: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'caution',
    title: 'Caution Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const negative: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'negative',
    title: 'Negative Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const secondaryNeutral: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'neutral',
    secondary: true,
    title: 'Secondary neutral Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const secondaryPositive: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'positive',
    secondary: true,
    title: 'Secondary positive Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const secondaryCaution: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'caution',
    secondary: true,
    title: 'Secondary caution Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const secondaryNegative: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'negative',
    secondary: true,
    title: 'Secondary negative Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const asyncToast: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <Button
      onClick={() =>
        toast.promise(
          new Promise((resolve) => {
            setTimeout(
              () =>
                resolve({
                  title: 'Success',
                  body: 'Your request has been completed successfully!',
                  flavor: 'positive',
                }),
              2000,
            );
          }),
        )
      }
    >
      Async Toast
    </Button>
  ),
};

export const customAsyncToast: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <Button
      onClick={() => {
        const errorToastProps: ToastProps = {
          title: 'Failure',
          body: 'There was a problem completing your request.',
          flavor: 'negative',
        };

        const task = new Promise<ToastProps>((_resolve, reject) => {
          setTimeout(() => {
            reject('oh no!');
          }, 2000);
        });

        const taskWithErrorHandling = task.catch(() => errorToastProps);

        toast.promise(taskWithErrorHandling, {
          loadingToastProps: {
            body: <>We’re working on it &hellip;</>,
          },
          sonnerOptions: {
            dismissible: false,
            duration: 3000,
          },
        });
      }}
    >
      Customized async Toast
    </Button>
  ),
};

const flavors = [neutral, positive, caution, negative];
export const allFlavors: Story = {
  tags: ['!dev', '!test'],
  parameters: {
    source: `
      import { Button, toast } from 'nickui';

      <div className="flex gap-4 flex-wrap">${flavors
        .map(
          (s) => `
        <Button
          flavor="${s.args?.flavor}"
          onClick={() => toast(${JSON.stringify(s.args, null, 2).replace(
            /\n(\s*)("(\w+)"|(}))/g,
            '\n$1          $3$4',
          )})}
        >
          ${s.args?.title}
        </Button>`,
        )
        .join('')}
      </div>
    `,
  },
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      {flavors.map((s) => (
        <Button
          key={s.name}
          flavor={s.args?.flavor}
          onClick={() => toast(s.args)}
        >
          {s.args?.title}
        </Button>
      ))}
    </div>
  ),
};

const secondaryFlavors = [
  secondaryNeutral,
  secondaryPositive,
  secondaryCaution,
  secondaryNegative,
];

export const allSecondaryFlavors: Story = {
  tags: ['!dev', '!test'],
  parameters: {
    source: `
      import { Button, toast } from 'nickui';

      <div className="flex gap-4 flex-wrap">${secondaryFlavors
        .map(
          (s) => `
        <Button
          flavor="${s.args?.flavor}"
          secondary
          onClick={() => toast(${JSON.stringify(s.args, null, 2).replace(
            /\n(\s*)("(\w+)"|(}))/g,
            '\n$1          $3$4',
          )})}
        >
          ${s.args?.title}
        </Button>`,
        )
        .join('')}
      </div>
    `,
  },
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      {secondaryFlavors.map((s) => (
        <Button
          key={s.name}
          flavor={s.args?.flavor}
          secondary
          onClick={() => toast(s.args)}
        >
          {s.args?.title}
        </Button>
      ))}
    </div>
  ),
};
