import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the Fieldset component */
export const styles = tv({
  slots: {
    legend: 'block',
    label: 'font-bold',
    footer: 'flex flex-col',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    hint: 'text-gray-500',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        legend: 'mb-2.5',
        label: 'text-xs',
        footer: 'mt-2.5 gap-1.5',
        error: 'text-xs',
        hint: 'text-xs',
      },
      [FieldSizer.medium]: {
        legend: 'mb-3',
        label: 'text-sm',
        footer: 'mt-3 gap-2',
        error: 'text-sm',
        hint: 'text-xs',
      },
      [FieldSizer.large]: {
        legend: 'mb-3.5',
        label: 'text-lg',
        footer: 'mt-3.5 gap-2',
        error: 'text-base',
        hint: 'text-sm',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
  },
});
