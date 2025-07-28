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
      <Button onClick={() => toast(ctx.args)}>Open Toast</Button>
      <Toaster />
    </>
  );
};

export const Info: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'info',
    title: 'Info Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const Positive: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'positive',
    title: 'Positive Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const Maybe: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'maybe',
    title: 'Maybe Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const Nope: Story = {
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'nope',
    title: 'Nope Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.',
  },
};

export const AsyncToast: Story = {
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

export const CustomAsyncToast: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <Button
      onClick={() => {
        const errorToastProps: ToastProps = {
          title: 'Failure',
          body: 'There was a problem completing your request.',
          flavor: 'nope',
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

export const AllFlavors: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast(Info.args)}>Info Toast</Button>
      <Button onClick={() => toast(Positive.args)}>Positive Toast</Button>
      <Button onClick={() => toast(Maybe.args)}>Maybe Toast</Button>
      <Button onClick={() => toast(Nope.args)}>Nope Toast</Button>
    </div>
  ),
};
