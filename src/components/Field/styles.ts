import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Field component */
export const fieldStyler = tv({
  slots: {
    heading: 'flex flex-col',
    label: 'font-bold',
    footing: '',
    hint: 'text-gray-500',
    error: 'before:content-["✘"] before:mr-1 text-rose-800',
    requiredAsterisk: 'ml-0.5 no-underline cursor-help',
  },
  variants: {
    sizer: {
      xs: {
        heading: 'mb-1.5',
        label: 'text-xs',
        footing: 'mt-1.5',
        hint: 'text-xs',
        error: 'text-xs',
      },
      sm: {
        heading: 'mb-1.75',
        label: 'text-sm',
        footing: 'mt-1.75',
        hint: 'text-xs',
        error: 'text-sm',
      },
      base: {
        heading: 'mb-2',
        label: 'text-base',
        footing: 'mt-2',
        hint: 'text-sm',
        error: 'text-sm',
      },
      lg: {
        heading: 'mb-2.25',
        label: 'text-lg',
        footing: 'mt-2.25',
        hint: 'text-base',
        error: 'text-base',
      },
      xl: {
        heading: 'mb-2.5',
        label: 'text-xl',
        footing: 'mt-2.5',
        hint: 'text-lg',
        error: 'text-lg',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
  },
});
