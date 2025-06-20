import type { Meta, StoryObj } from '@storybook/react-vite';
import * as formik from 'formik';
import * as React from 'react';

import { Text } from './Text';

const meta = {
  title: 'Forms/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text with no set value',
  },
};

export const Controlled: Story = {
  args: {
    value: 'Controlled Text',
    onChange: () => {},
    'aria-label': 'Example Text with a controlled value',
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Example Text with an uncontrolled value',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Example disabled Text',
  },
};

export const AllControlStates: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
  ),
};

export const Field: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <Text
      label="A label"
      explainer="An explainer"
      error="An error message"
      hint="A hint"
      defaultValue="A problematic value"
    />
  ),
};

export const Small: Story = {
  args: {
    sizer: Text.sizer.small,
    placeholder: 'Small Text (default)',
    'aria-label': 'Example small Text',
  },
};

export const Medium: Story = {
  args: {
    sizer: Text.sizer.medium,
    placeholder: 'Medium Text',
    'aria-label': 'Example medium Text',
  },
};

export const Large: Story = {
  args: {
    sizer: Text.sizer.large,
    placeholder: 'Large Text',
    'aria-label': 'Example large Text',
  },
};

export const AllSizes: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <Text {...Small.args} />
      <Text {...Medium.args} />
      <Text {...Large.args} />
    </div>
  ),
};

export const Formik: Story = {
  tags: ['!dev', '!test'],
  render: (_args) => (
    <formik.Formik initialValues={{ firstName: 'Nick' }} onSubmit={() => {}}>
      {(bag) => (
        <>
          <formik.Field
            name="firstName"
            validate={(value: string) =>
              value !== 'Nick' ? 'That name isn’t Nick!' : undefined
            }
            as={Text}
            sizer={Text.sizer.medium}
            label="First name"
            hint="Try editting!"
            error={bag.errors.firstName}
          />
          <pre className="mt-6 bg-amber-100 p-3 font-mono text-xs">
            {JSON.stringify(bag, null, 2)}
          </pre>
        </>
      )}
    </formik.Formik>
  ),
};
