import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Fieldset component */
export const fieldsetStyler = tv({
  slots: {
    legend: 'font-bold',
    footing: '',
    hint: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      xs: {
        legend: 'text-xs mb-2',
        footer: 'mb-2',
        hint: 'text-xs',
        error: 'text-xs',
      },
      sm: {
        legend: 'text-sm mb-2.25',
        footer: 'mt-2.25',
        hint: 'text-xs',
        error: 'text-sm',
      },
      base: {
        legend: 'text-base mb-2.5',
        footer: 'mt-2.5',
        hint: 'text-sm',
        error: 'text-sm',
      },
      lg: {
        legend: 'text-lg mb-2.75',
        footer: 'mt-2.75',
        hint: 'text-base',
        error: 'text-base',
      },
      xl: {
        legend: 'text-xl mb-3',
        footer: 'mt-3',
        hint: 'text-lg',
        error: 'text-lg',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
  },
});
