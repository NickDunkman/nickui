import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

/** tailwind-variants styles for the Fieldset component */
export const styles = tv({
  slots: {
    legend: 'block',
    label: 'font-bold',
    footer: 'flex flex-col',
    hint: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      [Sizer.small]: {
        legend: 'mb-2.5',
        label: 'text-xs',
        footer: 'mt-2.5 gap-1.5',
        hint: 'text-xs',
        error: 'text-xs',
      },
      [Sizer.base]: {
        legend: 'mb-3',
        label: 'text-sm',
        footer: 'mt-3 gap-2',
        hint: 'text-xs',
        error: 'text-sm',
      },
      [Sizer.large]: {
        legend: 'mb-3.5',
        label: 'text-lg',
        footer: 'mt-3.5 gap-2',
        hint: 'text-sm',
        error: 'text-base',
      },
    },
  },
  defaultVariants: {
    sizer: Sizer.base,
  },
});
