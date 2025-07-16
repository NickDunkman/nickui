import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

/** tailwind-variants styles for the Switch component */
export const styles = tv({
  slots: {
    root: '',
    labelWithOffset: 'pt-0.5',
    input: 'peer opacity-0 absolute -z-1',
    indicator: `
      relative rounded-l-full rounded-r-full bg-gray-300
      peer-checked:bg-emerald-500
      transition-colors duration-100 east-out
      after:border-transparent
      pointer-events-none

      after:bg-white after:rounded-full after:absolute after:m-0.5
      after:transition-transform after:duration-100 after:east-out
      after:shadow-md/15
    `,
  },
  variants: {
    sizer: {
      [Sizer.small]: {
        root: 'min-h-5',
        indicator:
          'w-8 h-5 after:size-4 after:border-5 peer-checked:after:translate-x-3',
      },
      [Sizer.base]: {
        root: 'min-h-6',
        indicator:
          'w-10 h-6 after:size-5 after:border-6 peer-checked:after:translate-x-4',
      },
      [Sizer.large]: {
        root: 'min-h-7',
        indicator:
          'w-12 h-7 after:size-6 after:border-7 peer-checked:after:translate-x-5',
      },
    },
    isDisabled: {
      true: {
        indicator:
          'bg-gray-300 after:bg-gray-100 peer-checked:bg-gray-300 after:shadow-none',
      },
    },
    isKeyboardFocused: {
      true: {
        indicator: `
          after:bg-indigo-600 after:border-white
        `,
      },
    },
  },
  defaultVariants: {
    sizer: Sizer.base,
    isDisabled: false,
    isKeyboardFocused: false,
  },
});
