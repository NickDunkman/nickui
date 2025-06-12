import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the FieldLayout component */
export const styles = tv({
  slots: {
    heading: 'block',
    label: 'font-bold',
    explainer: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-red-800',
    hint: 'text-gray-500',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        heading: 'mb-1.5',
        label: 'text-xs',
        explainer: 'text-xs',
        error: 'text-xs mt-1.5',
        hint: 'text-xs mt-1.5',
      },
      [FieldSizer.medium]: {
        heading: 'mb-2',
        label: 'text-sm',
        error: 'text-sm mt-2',
        hint: 'mt-2',
      },
      [FieldSizer.large]: {
        heading: 'mb-2',
        label: 'text-lg',
        explainer: 'text-sm',
        error: 'text-md mt-2',
        hint: 'text-sm mt-2',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
  },
});
