import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the CheckedField component */
export const checkedFieldStyler = tv({
  slots: {
    root: 'cursor-pointer',
    innerContainer: 'flex relative',
    control: 'absolute top-0',
    descriptors: 'flex flex-col',
    hint: 'text-gray-500',
  },
  variants: {
    sizer: {
      xs: {
        innerContainer: 'gap-2 text-xs',
      },
      sm: {
        innerContainer: 'gap-2.5 text-sm',
        hint: 'text-xs',
      },
      base: {
        innerContainer: 'gap-3 text-base',
        hint: 'text-sm',
      },
      lg: {
        innerContainer: 'gap-3.5 text-lg',
        hint: 'text-base',
      },
      xl: {
        innerContainer: 'gap-4 text-xl',
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
