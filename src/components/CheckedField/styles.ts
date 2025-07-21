import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

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
      [Sizer.xs]: {
        root: 'gap-2 text-xs',
        hint: 'text-xs',
      },
      [Sizer.sm]: {
        root: 'gap-2.5 text-sm',
        hint: 'text-sm',
      },
      [Sizer.base]: {
        root: 'gap-3 text-base',
        hint: 'text-sm',
      },
      [Sizer.lg]: {
        root: 'gap-3.5 text-lg',
        hint: 'text-base',
      },
      [Sizer.xl]: {
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
    sizer: Sizer.base,
    isDisabled: false,
  },
});
