import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

import { ButtonFlavor } from './constants';

/** tailwind-variants styles for the Button component */
export const styles = tv({
  base: `
    appearance-none
    border-1 rounded-sm
    text-center
    cursor-pointer select-none
    shadow-md/15
    transition-all duration-8 ease-out

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none


    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-101.5
    focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-101.5

    active:shadow-md/15 active:translate-y-0 active:scale-100
    pointer-coarse:hover:shadow-md/15 pointer-coarse:translate-y-0 pointer-coarse:scale-100
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100
  `,

  variants: {
    sizer: {
      [FieldSizer.small]: 'text-sm py-1.75 px-3',
      [FieldSizer.medium]: 'text-md py-2.75 px-4.5',
      [FieldSizer.large]: 'text-lg py-3.75 px-5.5',
    },
    flavor: {
      [ButtonFlavor.primary]:
        'bg-indigo-600 border-indigo-600 text-white font-medium',
      [ButtonFlavor.secondary]: 'border-gray-600 bg-gray-100',
      [ButtonFlavor.danger]:
        'bg-rose-700 border-rose-700 text-white font-medium',
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    flavor: ButtonFlavor.primary,
  },
});
