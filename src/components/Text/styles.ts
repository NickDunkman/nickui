import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Text component */
export const textStyler = tv({
  base: `
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,
  variants: {
    sizer: {
      xs: 'text-xs py-1.25 px-2',
      sm: 'text-sm py-1.5 px-2',
      base: 'text-base py-2.5 px-3.5',
      lg: 'text-lg py-3.5 px-4.5',
      xl: 'text-xl py-4.5 px-5.5',
    },
    hasError: {
      true: 'border-rose-800 focus:border-rose-800 focus:shadow-rose-300',
    },
  },
  defaultVariants: {
    sizer: 'base',
    hasError: false,
  },
});
