import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

import { ButtonFlavor } from './constants';

/** tailwind-variants styles for the Button component */
export const buttonStyler = tv({
  base: `
    appearance-none
    border-1 rounded-sm
    text-center
    select-none
    transition-all duration-8 ease-out
    outline-none
  `,
  variants: {
    sizer: {
      [Sizer.xs]: 'text-sm py-1.75 px-3',
      [Sizer.sm]: 'text-sm py-1.75 px-3',
      [Sizer.base]: 'text-base py-2.75 px-4.5',
      [Sizer.lg]: 'text-lg py-3.75 px-5.5',
    },
    isDisabled: {
      false: `
        cursor-pointer 
        shadow-md/15
        hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
        active:shadow-none active:translate-y-0.25 active:scale-99
        pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
        pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
      `,
      true: `
        bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed shadow-none
        hover:shadow-none hover:translate-y-0 hover:scale-100
        disabled:opacity-100
      `,
    },
    flavor: {
      // Most flavor styling is done below in compoundVariants, when isDisabled is false
      [ButtonFlavor.primary]: 'font-medium',
      [ButtonFlavor.secondary]: '',
      [ButtonFlavor.danger]: 'font-medium',
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
      isDisabled: false,
      class: `
        text-white
        bg-blue-600 border-blue-600
        hover:bg-blue-500 hover:border-blue-500
        active:bg-blue-700 active:border-blue-700
        pointer-coarse:hover:bg-blue-600  pointer-coarse:hover:border-blue-600
        pointer-coarse:active:bg-blue-600  pointer-coarse:active:border-blue-600
      `,
    },
    {
      // The border on the secondary accentuates the shadow, so lighten it a bit
      flavor: ButtonFlavor.secondary,
      isDisabled: false,
      class: `
        shadow-md/8
        bg-gray-100 border-gray-500 
        hover:bg-gray-50 hover:border-gray-400
        active:bg-gray-200 active:border-gray-600
        pointer-coarse:hover:bg-gray-100  pointer-coarse:hover:border-gray-500
        pointer-coarse:active:bg-gray-100  pointer-coarse:active:border-gray-500
      `,
    },
    {
      flavor: ButtonFlavor.danger,
      isDisabled: false,
      class: `
        text-white
        bg-rose-700 border-rose-700 
        hover:bg-rose-600 hover:border-rose-600
        active:bg-rose-800 active:border-rose-800
        pointer-coarse:hover:bg-rose-700  pointer-coarse:hover:border-rose-700
        pointer-coarse:active:bg-rose-700  pointer-coarse:active:border-rose-700
      `,
    },
    {
      flavor: ButtonFlavor.primary,
      isKeyboardActivated: true,
      isDisabled: false,
      class: `
        active:bg-blue-700 active:border-blue-700
        focus:bg-blue-700 focus:border-blue-700
        hover:bg-blue-700 hover:border-blue-700
      `,
    },
    {
      flavor: ButtonFlavor.primary,
      isTouched: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-blue-800 pointer-coarse:border-blue-800
        pointer-coarse:active:bg-blue-800  pointer-coarse:active:border-blue-800
        pointer-coarse:hover:bg-blue-800  pointer-coarse:hover:border-blue-800
        pointer-coarse:focus:bg-blue-800  pointer-coarse:focus:border-blue-800
      `,
    },
    {
      flavor: ButtonFlavor.primary,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-blue-500 focus:border-blue-500',
    },
    {
      flavor: ButtonFlavor.secondary,
      isKeyboardActivated: true,
      isDisabled: false,
      class: `
        active:bg-gray-200 active:border-gray-600
        focus:bg-gray-200 focus:border-gray-600
        hover:bg-gray-200 hover:border-gray-600
      `,
    },
    {
      flavor: ButtonFlavor.secondary,
      isTouched: true,
      isDisabled: false,
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
      isDisabled: false,
      class: 'focus:bg-gray-50 focus:border-gray-400',
    },
    {
      flavor: ButtonFlavor.danger,
      isKeyboardActivated: true,
      isDisabled: false,
      class: `
        active:bg-rose-800 active:border-rose-800
        focus:bg-rose-800 focus:border-rose-800
        hover:bg-rose-800 hover:border-rose-800
      `,
    },
    {
      flavor: ButtonFlavor.danger,
      isTouched: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-rose-900 pointer-coarse:border-rose-900
        pointer-coarse:active:bg-rose-900  pointer-coarse:active:border-rose-900
        pointer-coarse:hover:bg-rose-900  pointer-coarse:hover:border-rose-900
        pointer-coarse:focus:bg-rose-900  pointer-coarse:focus:border-rose-900
      `,
    },
    {
      flavor: ButtonFlavor.danger,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-rose-600 focus:border-rose-600',
    },
    {
      isKeyboardFocused: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'focus:shadow-none focus:translate-y-0.25 focus:scale-99',
    },
  ],
  defaultVariants: {
    sizer: Sizer.base,
    flavor: ButtonFlavor.primary,
    isDisabled: false,
    isTouched: false,
    isKeyboardFocused: false,
  },
});
