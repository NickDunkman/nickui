import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the Fieldset component */
export const styles = tv({
  slots: {
    legend: 'block',
    label: 'font-bold',
    explainer: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    hint: 'text-gray-500',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        legend: 'mb-1.5',
        label: 'text-xs',
        explainer: 'text-xs',
        error: 'text-xs mt-1.5',
        hint: 'text-xs mt-1.5',
      },
      [FieldSizer.medium]: {
        legend: 'mb-2',
        label: 'text-sm',
        explainer: 'text-xs',
        error: 'text-sm mt-2',
        hint: 'text-xs mt-2',
      },
      [FieldSizer.large]: {
        legend: 'mb-2',
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
