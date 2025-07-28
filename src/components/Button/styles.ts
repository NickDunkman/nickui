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

    bg-(--nickui-button-bg-color)
    text-(--nickui-button-text-color)
    hover:bg-(--nickui-button-hover-bg-color)
    active:bg-(--nickui-button-active-bg-color)
    focus:bg-(--nickui-button-focus-bg-color)

    pointer-coarse:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:hover:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:active:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:focus:bg-(--nickui-button-coarse-bg-color)

    [--nickui-button-hover-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-active-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-focus-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-coarse-bg-color:var(--nickui-button-bg-color)]
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
    // All flavor styling is done below in compoundVariants
    flavor: {
      neutral: '',
      positive: '',
      negative: '',
    },
    ////////////////////////////////////////////////////////////////////////////
    // Primary buttons have heavier text
    ////////////////////////////////////////////////////////////////////////////
    isSecondary: {
      false: 'font-semibold',
      true: '',
    },
    ////////////////////////////////////////////////////////////////////////////
    // Focusing with the keyboard (tabbing to it) should have the same style
    // as mouse-hoving. Push upwards & darken the shadow.
    ////////////////////////////////////////////////////////////////////////////
    isKeyboardFocused: {
      true: 'focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102',
    },
    ////////////////////////////////////////////////////////////////////////////
    // Activating the button with a keyboard (pressing enter or spacebar) should
    // have the same styles as mouse-activating. Push downwards & remove shadow.
    ////////////////////////////////////////////////////////////////////////////
    isKeyboardActivated: {
      true: `
        active:shadow-none active:translate-y-0.25 active:scale-99
        hover:shadow-none hover:translate-y-0.25 hover:scale-99
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
      `,
    },
    ////////////////////////////////////////////////////////////////////////////
    // Activating the button with a touch (on touch screens) should have the
    // same styles as mouse-activating. Push downwards & remove shadow.
    ////////////////////////////////////////////////////////////////////////////
    isTouchActivated: {
      true: `
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `,
    },
  },
  compoundVariants: [
    ////////////////////////////////////////////////////////////////////////////
    // Some keyboard-activated styles need to override some keyboard-focused
    // styles
    ////////////////////////////////////////////////////////////////////////////
    {
      isKeyboardFocused: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'focus:shadow-none focus:translate-y-0.25 focus:scale-99',
    },

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: primary neutral
    ////////////////////////////////////////////////////////////////////////////
    {
      flavor: 'neutral',
      isSecondary: false,
      isDisabled: false,
      class: `
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-blue-600)]
        [--nickui-button-hover-bg-color:var(--color-blue-500)]
        [--nickui-button-active-bg-color:var(--color-blue-700)]
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: false,
      isKeyboardActivated: true,
      isDisabled: false,
      class: `
        [--nickui-button-hover-bg-color:var(--color-blue-700)]
        [--nickui-button-active-bg-color:var(--color-blue-700)]
        [--nickui-button-focus-bg-color:var(--color-blue-700)]
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: false,
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-blue-800)]',
    },
    {
      flavor: 'neutral',
      isSecondary: false,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: '[--nickui-button-focus-bg-color:var(--color-blue-500)]',
    },

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: secondary neutral
    ////////////////////////////////////////////////////////////////////////////
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
      flavor: 'neutral',
      isSecondary: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-blue-300 focus:bg-blue-300 hover:bg-blue-300',
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isTouchActivated: true,
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

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: primary positive
    ////////////////////////////////////////////////////////////////////////////
    {
      flavor: 'positive',
      isSecondary: false,
      isDisabled: false,
      class: `
        bg-emerald-700 text-white
        hover:bg-emerald-600
        active:bg-emerald-800
        pointer-coarse:hover:bg-emerald-700 pointer-coarse:active:bg-emerald-700
      `,
    },
    {
      flavor: 'positive',
      isSecondary: false,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-emerald-800 focus:bg-emerald-800 hover:bg-emerald-800',
    },
    {
      flavor: 'positive',
      isSecondary: false,
      isTouchActivated: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-emerald-900 pointer-coarse:active:bg-emerald-900
        pointer-coarse:hover:bg-emerald-900 pointer-coarse:focus:bg-emerald-900
      `,
    },
    {
      flavor: 'positive',
      isSecondary: false,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-emerald-600',
    },

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: secondary positive
    ////////////////////////////////////////////////////////////////////////////
    {
      flavor: 'positive',
      isSecondary: true,
      isDisabled: false,
      // The lighter background color accentuates the shadow, so lighten
      // the shadow a bit so it appears the same as the other button flavors
      class: `
        shadow-md/10
        text-emerald-950
        bg-emerald-200
        hover:bg-[#bff2d9]
        active:bg-emerald-300 
        pointer-coarse:hover:bg-emerald-200  
        pointer-coarse:active:bg-emerald-200  
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-emerald-300 focus:bg-emerald-300 hover:bg-emerald-300',
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isTouchActivated: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-emerald-400 pointer-coarse:active:bg-emerald-400
        pointer-coarse:hover:bg-emerald-400 pointer-coarse:focus:bg-emerald-400
      `,
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-[#bff2d9]',
    },

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: primary negative
    ////////////////////////////////////////////////////////////////////////////
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
      flavor: 'negative',
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-rose-800 focus:bg-rose-800 hover:bg-rose-800',
    },
    {
      flavor: 'negative',
      isTouchActivated: true,
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

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: secondary negative
    ////////////////////////////////////////////////////////////////////////////
    {
      flavor: 'negative',
      isSecondary: true,
      isDisabled: false,
      // The lighter background color accentuates the shadow, so lighten
      // the shadow a bit so it appears the same as the other button flavors
      class: `
        shadow-md/10
        text-rose-950
        bg-rose-200 
        hover:bg-[#ffdadd]
        active:bg-rose-300 
        pointer-coarse:hover:bg-rose-200  
        pointer-coarse:active:bg-rose-200  
      `,
    },
    {
      flavor: 'negative',
      isSecondary: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: 'active:bg-rose-300 focus:bg-rose-300 hover:bg-rose-300',
    },
    {
      flavor: 'negative',
      isSecondary: true,
      isTouchActivated: true,
      isDisabled: false,
      class: `
        pointer-coarse:bg-rose-400 pointer-coarse:active:bg-rose-400
        pointer-coarse:hover:bg-rose-400 pointer-coarse:focus:bg-rose-400
      `,
    },
    {
      flavor: 'negative',
      isSecondary: true,
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: 'focus:bg-[#ffdadd]',
    },
  ],
  defaultVariants: {
    sizer: 'base',
    flavor: 'neutral',
    isSecondary: false,
    isDisabled: false,
    isTouchActivated: false,
    isKeyboardFocused: false,
  },
});
