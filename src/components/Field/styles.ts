import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the Field component */
export const styles = tv({
  slots: {
    heading: 'flex flex-col',
    label: 'font-bold',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    hint: 'text-gray-500',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        heading: 'mb-1.5',
        label: 'text-xs',
        error: 'text-xs mt-1.5',
        hint: 'text-xs mt-1.5',
      },
      [FieldSizer.medium]: {
        heading: 'mb-2',
        label: 'text-sm',
        error: 'text-sm mt-2',
        hint: 'text-xs mt-2',
      },
      [FieldSizer.large]: {
        heading: 'mb-2',
        label: 'text-lg',
        error: 'text-base mt-2',
        hint: 'text-sm mt-2',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
  },
});
