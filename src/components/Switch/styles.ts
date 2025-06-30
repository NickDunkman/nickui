import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the Switch component */
export const styles = tv({
  slots: {
    root: 'flex relative cursor-pointer',
    input: 'peer opacity-0 absolute -z-1',
    indicator: `
      absolute left-0 top-0 rounded-l-full rounded-r-full bg-gray-300
      peer-checked:bg-emerald-500
      transition-colors duration-100 east-out
      after:border-transparent
      pointer-events-none

      after:bg-white after:rounded-full after:absolute
after:m-0.5
      after:transition-transform after:duration-100 after:east-out
      after:shadow-md/15
    `,
    label: '',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        root: 'min-h-5 pl-8 pt-0.5 gap-2.5 text-xs',
        indicator:
          'w-8 h-5 after:size-4 after:border-5 peer-checked:after:translate-x-3',
      },
      [FieldSizer.medium]: {
        root: 'min-h-6 pl-10 pt-0.5 gap-3 text-sm',
        indicator:
          'w-10 h-6 after:size-5 after:border-6 peer-checked:after:translate-x-4',
      },
      [FieldSizer.large]: {
        root: 'min-h-7 pl-12 pt-0.5 gap-3 text-md',
        indicator:
          'w-12 h-7 after:size-6 after:border-7 peer-checked:after:translate-x-5',
      },
    },
    isDisabled: {
      true: {
        root: 'cursor-not-allowed text-gray-400',
        indicator:
          'bg-gray-300 after:bg-gray-100 peer-checked:bg-gray-300 after:shadow-none',
      },
    },
    isFocused: {
      true: {
        indicator: `
          after:bg-indigo-600 after:border-white
        `,
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    isDisabled: false,
  },
});
