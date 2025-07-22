import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the CheckedField component */
export const checkedFieldStyler = tv({
  slots: {
    container: 'cursor-pointer flex relative',
    control: 'absolute top-0 left-0',
    descriptors: 'flex flex-col',
    hint: 'text-gray-500',
  },
  variants: {
    sizer: {
      xs: {
        container: 'gap-2 text-xs',
      },
      sm: {
        container: 'gap-2.5 text-sm',
        hint: 'text-xs',
      },
      base: {
        container: 'gap-3 text-base',
        hint: 'text-sm',
      },
      lg: {
        container: 'gap-3.5 text-lg',
        hint: 'text-base',
      },
      xl: {
        container: 'gap-4 text-xl',
        hint: 'text-lg',
      },
    },
    isDisabled: {
      true: {
        container: 'cursor-not-allowed text-gray-400',
        hint: 'text-gray-300',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
    isDisabled: false,
  },
});
