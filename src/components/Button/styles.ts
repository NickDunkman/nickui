import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Button component */
export const buttonStyler = tv({
  base: `
    text-nowrap
    appearance-none
    rounded-sm
    text-center
    select-none
    transition-all duration-8 ease-out
    outline-none
  `,
  variants: {
    sizer: {
      xs: 'text-xs py-1.75 px-2.25',
      sm: 'text-sm py-2 px-3',
      base: 'text-base py-3 px-4.5',
      lg: 'text-lg py-4 px-5.5',
      xl: 'text-xl py-5 px-6.5',
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
        bg-gray-300 text-gray-600 cursor-not-allowed shadow-none
        hover:shadow-none hover:translate-y-0 hover:scale-100
        disabled:opacity-100
      `,
    },
    flavor: {
      // All flavor styling is done below in compoundVariants, when isDisabled is false
      neutral: '',
      negative: '',
    },
    isSecondary: {
      false: 'font-medium',
      true: '',
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
      flavor: 'neutral',
      isSecondary: false,
      isDisabled: false,
      class: `
        bg-blue-600 text-white
        hover:bg-blue-500
        active:bg-blue-700
        pointer-coarse:hover:bg-blue-600 pointer-coarse:active:bg-blue-600
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isDisabled: false,
      // The lighter background color accentuates the shadow, so lighten
      // the shadow a bit so it appears the same as the other button flavors
      class: `
        shadow-md/10
        text-blue-950
        bg-blue-200 
        hover:bg-[#c4e4ff]
        active:bg-blue-300 
        pointer-coarse:hover:bg-blue-200  
        pointer-coarse:active:bg-blue-200  
      `,
    },
    {
      flavor: 'negative',
      isDisabled: false,
      class: `
        bg-rose-700 text-white
        hover:bg-rose-600
        active:bg-rose-800
        pointer-coarse:hover:bg-rose-700 pointer-coarse:active:bg-rose-700
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: false,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-blue-700 focus:bg-blue-700 hover:bg-blue-700',
    },
    {
      flavor: 'neutral',
      isSecondary: false,
      isTouched: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-blue-800 pointer-coarse:active:bg-blue-800
        pointer-coarse:hover:bg-blue-800 pointer-coarse:focus:bg-blue-800
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: false,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-blue-500',
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-blue-300 focus:bg-blue-300 hover:bg-blue-300',
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isTouched: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-blue-400 pointer-coarse:active:bg-blue-400
        pointer-coarse:hover:bg-blue-400 pointer-coarse:focus:bg-blue-400
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-[#c4e4ff]',
    },
    {
      flavor: 'negative',
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-rose-800 focus:bg-rose-800 hover:bg-rose-800',
    },
    {
      flavor: 'negative',
      isTouched: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-rose-900 pointer-coarse:active:bg-rose-900
        pointer-coarse:hover:bg-rose-900 pointer-coarse:focus:bg-rose-900
      `,
    },
    {
      flavor: 'negative',
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-rose-600',
    },
    {
      isKeyboardFocused: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'focus:shadow-none focus:translate-y-0.25 focus:scale-99',
    },
  ],
  defaultVariants: {
    sizer: 'base',
    flavor: 'neutral',
    isSecondary: false,
    isDisabled: false,
    isTouched: false,
    isKeyboardFocused: false,
  },
});
