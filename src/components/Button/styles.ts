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
    border-1

    text-(--nickui-button-text-color)

    bg-(--nickui-button-bg-color)
    border-(--nickui-button-border-color)

    hover:bg-(--nickui-button-hover-bg-color)
    hover:border-(--nickui-button-hover-border-color)

    active:bg-(--nickui-button-active-bg-color)
    active:border-(--nickui-button-active-border-color)

    focus:bg-(--nickui-button-focus-bg-color)
    focus:border-(--nickui-button-focus-border-color)

    pointer-coarse:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:hover:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:active:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:focus:bg-(--nickui-button-coarse-bg-color)

    pointer-coarse:border-(--nickui-button-coarse-border-color)
    pointer-coarse:hover:border-(--nickui-button-coarse-border-color)
    pointer-coarse:active:border-(--nickui-button-coarse-border-color)
    pointer-coarse:focus:border-(--nickui-button-coarse-border-color)

    [--nickui-button-hover-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-active-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-focus-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-coarse-bg-color:var(--nickui-button-bg-color)]

    [--nickui-button-border-color:var(--nickui-button-bg-color)]
    [--nickui-button-hover-border-color:var(--nickui-button-hover-bg-color)]
    [--nickui-button-active-border-color:var(--nickui-button-active-bg-color)]
    [--nickui-button-focus-border-color:var(--nickui-button-focus-bg-color)]
    [--nickui-button-coarse-border-color:var(--nickui-button-coarse-bg-color)]
  `,
  variants: {
    sizer: {
      xs: 'text-xs py-1.5 px-2',
      sm: 'text-sm py-1.75 px-2.75',
      base: 'text-base py-2.75 px-4.25',
      lg: 'text-lg py-3.75 px-5.25',
      xl: 'text-xl py-4.75 px-6.25',
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
    // On keyboard-activation, force the active style by overriding relevant
    // focus & hover styles
    ////////////////////////////////////////////////////////////////////////////
    {
      isKeyboardFocused: true,
      isKeyboardActivated: true,
      isDisabled: false,
      class: `
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
        [--nickui-button-hover-bg-color:var(--nickui-button-active-bg-color)]
        [--nickui-button-focus-bg-color:var(--nickui-button-active-bg-color)]
      `,
    },

    ////////////////////////////////////////////////////////////////////////////
    // Hightlight keyboard-focus using the same color as the hover state, across
    // all flavors
    ////////////////////////////////////////////////////////////////////////////
    {
      isKeyboardFocused: true,
      isKeyboardActivated: false,
      isDisabled: false,
      class: `
        [--nickui-button-focus-bg-color:var(--nickui-button-hover-bg-color)]
      `,
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
    // Make the active color when touching a little darker, since we’re
    // transitioning from the base color, rather than the lighter hover color
    {
      flavor: 'neutral',
      isSecondary: false,
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-blue-800)]',
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
        [--nickui-button-text-color:var(--color-blue-950)]
        [--nickui-button-bg-color:var(--color-blue-200)]
        [--nickui-button-hover-bg-color:#c4e4ff]
        [--nickui-button-active-bg-color:var(--color-blue-300)]
      `,
    },
    // Make the active color when touching a little darker, since we’re
    // transitioning from the base color, rather than the lighter hover color
    {
      flavor: 'neutral',
      isSecondary: true,
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-blue-400)]',
    },

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: primary positive
    ////////////////////////////////////////////////////////////////////////////
    {
      flavor: 'positive',
      isSecondary: false,
      isDisabled: false,
      class: `
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-emerald-700)]
        [--nickui-button-hover-bg-color:var(--color-emerald-600)]
        [--nickui-button-active-bg-color:var(--color-emerald-800)]
      `,
    },
    // Make the active color when touching a little darker, since we’re
    // transitioning from the base color, rather than the lighter hover color
    {
      flavor: 'positive',
      isSecondary: false,
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-emerald-900)]',
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
        [--nickui-button-text-color:var(--color-emerald-950)]
        [--nickui-button-bg-color:var(--color-emerald-200)]
        [--nickui-button-hover-bg-color:#bff2d9]
        [--nickui-button-active-bg-color:var(--color-emerald-300)]
      `,
    },
    // Make the active color when touching a little darker, since we’re
    // transitioning from the base color, rather than the lighter hover color
    {
      flavor: 'positive',
      isSecondary: true,
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-emerald-400)]',
    },

    ////////////////////////////////////////////////////////////////////////////
    // Flavor: primary negative
    ////////////////////////////////////////////////////////////////////////////
    {
      flavor: 'negative',
      isDisabled: false,
      class: `
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-rose-700)]
        [--nickui-button-hover-bg-color:var(--color-rose-600)]
        [--nickui-button-active-bg-color:var(--color-rose-800)]
      `,
    },
    // Make the active color when touching a little darker, since we’re
    // transitioning from the base color, rather than the lighter hover color
    {
      flavor: 'negative',
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-rose-900)]',
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
        [--nickui-button-text-color:var(--color-rose-950)]
        [--nickui-button-bg-color:var(--color-rose-200)]
        [--nickui-button-hover-bg-color:#ffdadd]
        [--nickui-button-active-bg-color:var(--color-rose-300)]
      `,
    },
    // Make the active color when touching a little darker, since we’re
    // transitioning from the base color, rather than the lighter hover color
    {
      flavor: 'negative',
      isSecondary: true,
      isTouchActivated: true,
      isDisabled: false,
      class: '[--nickui-button-coarse-bg-color:var(--color-rose-400)]',
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
