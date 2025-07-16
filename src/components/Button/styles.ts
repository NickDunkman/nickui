import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

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


    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
    focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102

    active:shadow-none active:translate-y-0.25 active:scale-99
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100

    pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
    pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
  `,

  variants: {
    sizer: {
      [Sizer.small]: 'text-sm py-1.75 px-3',
      [Sizer.medium]: 'text-base py-2.75 px-4.5',
      [Sizer.large]: 'text-lg py-3.75 px-5.5',
    },
    flavor: {
      [ButtonFlavor.primary]: `
        text-white font-medium
        bg-indigo-600 border-indigo-600
        hover:bg-indigo-800 hover:border-indigo-800
        active:bg-indigo-950 active:border-indigo-950
        pointer-coarse:hover:bg-indigo-600  pointer-coarse:hover:border-indigo-600
        pointer-coarse:active:bg-indigo-600  pointer-coarse:active:border-indigo-600
      `,
      // The border on the secondary accentuates the shadow, so lighten it a bit
      [ButtonFlavor.secondary]: 'border-gray-500 bg-gray-100 shadow-md/8',
      [ButtonFlavor.danger]:
        'bg-rose-700 border-rose-700 text-white font-medium',
    },
    isTouched: {
      true: `
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none
        pointer-coarse:translate-y-0.25 pointer-coarse:hover:translate-y-0.25
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98
      `,
    },
  },
  compoundVariants: [
    {
      flavor: ButtonFlavor.primary,
      isTouched: true,
      class: `
        pointer-coarse:bg-indigo-950 pointer-coarse:border-indigo-950
        pointer-coarse:active:bg-indigo-950  pointer-coarse:active:border-indigo-950
      `,
    },
  ],
  defaultVariants: {
    sizer: Sizer.small,
    flavor: ButtonFlavor.primary,
  },
});
