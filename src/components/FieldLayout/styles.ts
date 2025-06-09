import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the FieldLayout component */
export const styles = tv({
  slots: {
    heading: 'block mb-1.5',
    label: 'text-xs font-bold',
    explainer: 'text-xs text-gray-500',
    error: 'text-xs mt-1.5 before:content-["✘"] before:mr-1 text-red-800',
    hint: 'text-xs mt-1.5 text-gray-500',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        /* default */
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
