import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Fieldset component */
export const fieldsetStyler = tv({
  slots: {
    legend: 'font-bold',
    footer: 'flex flex-col',
    hint: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      xs: {
        legend: 'text-xs mb-2.5',
        footer: 'mt-2.5 gap-1.5',
        hint: 'text-xs',
        error: 'text-xs',
      },
      sm: {
        legend: 'text-xs mb-2.5',
        footer: 'mt-2.5 gap-1.5',
        hint: 'text-xs',
        error: 'text-xs',
      },
      base: {
        legend: 'text-sm mb-3',
        footer: 'mt-3 gap-2',
        hint: 'text-xs',
        error: 'text-sm',
      },
      lg: {
        legend: 'text-lg mb-3.5',
        footer: 'mt-3.5 gap-2',
        hint: 'text-sm',
        error: 'text-base',
      },
      xl: {
        legend: 'text-lg mb-3.5',
        footer: 'mt-3.5 gap-2',
        hint: 'text-sm',
        error: 'text-base',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
  },
});
