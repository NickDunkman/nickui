import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the CheckedField component */
export const checkedFieldStyler = tv({
  slots: {
    root: 'flex relative cursor-pointer',
    control: 'absolute top-0',
    descriptors: 'flex flex-col',
    hint: 'text-gray-500',
  },
  variants: {
    sizer: {
      xs: {
        root: 'gap-2 text-xs',
        hint: 'text-xs',
      },
      sm: {
        root: 'gap-2.5 text-sm',
        hint: 'text-sm',
      },
      base: {
        root: 'gap-3 text-base',
        hint: 'text-sm',
      },
      lg: {
        root: 'gap-3.5 text-lg',
        hint: 'text-base',
      },
      xl: {
        root: 'gap-4 text-xl',
        hint: 'text-lg',
      },
    },
    isDisabled: {
      true: {
        root: 'cursor-not-allowed text-gray-400',
        hint: 'text-gray-300',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
    isDisabled: false,
  },
});
