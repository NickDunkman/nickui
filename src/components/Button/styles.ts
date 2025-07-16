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
    outline-none

    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
    active:shadow-none active:translate-y-0.25 active:scale-99

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none
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
      [ButtonFlavor.secondary]: `
        shadow-md/8
        bg-gray-100 border-gray-500 
        hover:bg-gray-200 hover:border-gray-600
        active:bg-gray-300 active:border-gray-700
        pointer-coarse:hover:bg-gray-100  pointer-coarse:hover:border-gray-500
        pointer-coarse:active:bg-gray-100  pointer-coarse:active:border-gray-500
      `,
      [ButtonFlavor.danger]: `
        text-white font-medium
        bg-rose-700 border-rose-700 
        hover:bg-rose-800 hover:border-rose-800
        active:bg-rose-950 active:border-rose-950
        pointer-coarse:hover:bg-rose-700  pointer-coarse:hover:border-rose-700
        pointer-coarse:active:bg-rose-700  pointer-coarse:active:border-rose-700
      `,
    },
    isKeyboardFocused: {
      true: 'focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102',
    },
    isKeyboardActivated: {
      true: `
        active:shadow-none active:translate-y-0.25 active:scale-99
        hover:shadow-none hover:translate-y-0.25 hover:scale-99
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
      `,
    },
    isTouched: {
      true: `
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `,
    },
  },
  compoundVariants: [
    {
      flavor: ButtonFlavor.primary,
      isKeyboardActivated: true,
      class: `
        active:bg-indigo-950 active:border-indigo-950
        focus:bg-indigo-950 focus:border-indigo-950
        hover:bg-indigo-950 hover:border-indigo-950
      `,
    },
    {
      flavor: ButtonFlavor.primary,
      isTouched: true,
      class: `
        pointer-coarse:bg-indigo-950 pointer-coarse:border-indigo-950
        pointer-coarse:active:bg-indigo-950  pointer-coarse:active:border-indigo-950
        pointer-coarse:hover:bg-indigo-950  pointer-coarse:hover:border-indigo-950
        pointer-coarse:focus:bg-indigo-950  pointer-coarse:focus:border-indigo-950
      `,
    },
    {
      flavor: ButtonFlavor.primary,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      class: 'focus:bg-indigo-800 focus:border-indigo-800',
    },
    {
      flavor: ButtonFlavor.secondary,
      isKeyboardActivated: true,
      class: `
        active:bg-gray-300 active:border-gray-700
        focus:bg-gray-300 focus:border-gray-700
        hover:bg-gray-300 hover:border-gray-700
      `,
    },
    {
      flavor: ButtonFlavor.secondary,
      isTouched: true,
      class: `
        pointer-coarse:bg-gray-300 pointer-coarse:border-gray-700
        pointer-coarse:active:bg-gray-300  pointer-coarse:active:border-gray-700
        pointer-coarse:hover:bg-gray-300  pointer-coarse:hover:border-gray-700
        pointer-coarse:focus:bg-gray-300  pointer-coarse:focus:border-gray-700
      `,
    },
    {
      flavor: ButtonFlavor.secondary,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      class: 'focus:bg-gray-200 focus:border-gray-600',
    },
    {
      flavor: ButtonFlavor.danger,
      isKeyboardActivated: true,
      class: `
        active:bg-rose-950 active:border-rose-950
        focus:bg-rose-950 focus:border-rose-950
        hover:bg-rose-950 hover:border-rose-950
      `,
    },
    {
      flavor: ButtonFlavor.danger,
      isTouched: true,
      class: `
        pointer-coarse:bg-rose-950 pointer-coarse:border-rose-950
        pointer-coarse:active:bg-rose-950  pointer-coarse:active:border-rose-950
        pointer-coarse:hover:bg-rose-950  pointer-coarse:hover:border-rose-950
        pointer-coarse:focus:bg-rose-950  pointer-coarse:focus:border-rose-950
      `,
    },
    {
      flavor: ButtonFlavor.danger,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      class: 'focus:bg-rose-800 focus:border-rose-800',
    },
    {
      isKeyboardFocused: true,
      isKeyboardActivated: true,
      class: 'focus:shadow-none focus:translate-y-0.25 focus:scale-99',
    },
  ],
  defaultVariants: {
    sizer: Sizer.small,
    flavor: ButtonFlavor.primary,
    isTouched: false,
    isKeyboardFocused: false,
  },
});
