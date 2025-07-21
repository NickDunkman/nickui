import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Field component */
export const fieldStyler = tv({
  slots: {
    heading: 'flex flex-col',
    label: 'font-bold',
    hint: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      xs: {
        heading: 'mb-1.5',
        label: 'text-xs',
        hint: 'text-xs mt-1.5',
        error: 'text-xs mt-1.5',
      },
      sm: {
        heading: 'mb-1.5',
        label: 'text-xs',
        hint: 'text-xs mt-1.5',
        error: 'text-xs mt-1.5',
      },
      base: {
        heading: 'mb-2',
        label: 'text-sm',
        hint: 'text-xs mt-2',
        error: 'text-sm mt-2',
      },
      lg: {
        heading: 'mb-2',
        label: 'text-lg',
        hint: 'text-sm mt-2',
        error: 'text-base mt-2',
      },
      xl: {
        heading: 'mb-2',
        label: 'text-lg',
        hint: 'text-sm mt-2',
        error: 'text-base mt-2',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
  },
});
