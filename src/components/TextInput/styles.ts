import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the TextInput component */
export const styles = tv({
  base: `
    w-full
    border-2 rounded-sm
    py-1.5 px-2
    text-sm placeholder:opacity-100 placeholder:text-gray-400
    focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,
  variants: {
    sizer: {
      [FieldSizer.small]: '', // default
      [FieldSizer.medium]: 'text-md py-2.5 px-3.5',
      [FieldSizer.large]: 'text-lg py-3.5 px-4.5',
    },
    hasError: {
      false: '', // default
      true: 'border-red-800 focus:border-red-800 focus:shadow-red-300',
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    hasError: false,
  },
});
