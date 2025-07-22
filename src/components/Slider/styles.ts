import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Slider component */
export const sliderStyler = tv({
  slots: {
    root: 'w-full relative outline-0 cursor-pointer',
    track: `
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,
    fill: 'bg-emerald-500 absolute top-0 left-0 bottom-0 right-0',
    thumb: `
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,
    input: 'hidden',
  },
  variants: {
    sizer: {
      xs: {
        root: 'h-4', // same height as xs text
        track: `
          h-1 left-2 right-2
          before:w-2 before:-left-2
          after:w-2 after:-right-2
        `,
        thumb: 'size-4',
      },
      sm: {
        root: 'h-5', // same height as sm text
        track: `
          h-1.25 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,
        thumb: 'size-5',
      },
      base: {
        root: 'h-6', // same height as base text
        track: `
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,
        thumb: 'size-6',
      },
      lg: {
        root: 'h-7', // same height as lg text
        track: `
          h-1.75 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,
        thumb: 'size-7',
      },
      xl: {
        root: 'h-8', // same height as xl text
        track: `
          h-2 left-4 right-4
          before:w-4 before:-left-4
          after:w-4 after:-right-4
        `,
        thumb: 'size-8',
      },
    },
    isKeyboardFocused: {
      true: {
        thumb: `
          border-blue-800
          after:absolute after:inset-3/10 after:bg-blue-600 after:rounded-full 
        `,
      },
    },
    isDisabled: {
      true: {
        root: 'cursor-not-allowed',
        track: 'bg-gray-100 before:bg-gray-300',
        fill: 'bg-gray-300',
        thumb: 'bg-gray-100 border-gray-300 shadow-none',
      },
    },
    hasError: {
      true: {
        track: 'before:bg-rose-800',
        fill: 'bg-rose-800',
        thumb: 'border-rose-800',
      },
    },
    hasFieldHeader: { true: {} },
    hasFieldFooter: { true: {} },
    // When the thumb is all the way to the right or left, hide the
    // corresponding end-piece of the track so that it doesn't peak out from
    // under the curvature of the thumb. It's only half the width of the thumb,
    // so this doesn't risk showing a missing portion of the track.
    atMin: { true: { track: 'before:hidden' } },
    atMax: { true: { track: 'after:hidden' } },
  },
  compoundVariants: [
    {
      isKeyboardFocused: true,
      hasError: true,
      className: {
        thumb: 'after:bg-rose-800',
      },
    },
    {
      hasFieldHeader: true,
      sizer: 'xs',
      className: { root: 'mt-2' },
    },
    {
      hasFieldHeader: true,
      sizer: 'sm',
      className: { root: 'mt-2' },
    },
    {
      hasFieldHeader: true,
      sizer: 'base',
      className: { root: 'mt-3' },
    },
    {
      hasFieldHeader: true,
      sizer: 'lg',
      className: { root: 'mt-4' },
    },
    {
      hasFieldHeader: true,
      sizer: 'xl',
      className: { root: 'mt-4' },
    },
    {
      hasFieldFooter: true,
      sizer: 'xs',
      className: { root: 'mb-2' },
    },
    {
      hasFieldFooter: true,
      sizer: 'sm',
      className: { root: 'mb-2' },
    },
    {
      hasFieldFooter: true,
      sizer: 'base',
      className: { root: 'mb-3' },
    },
    {
      hasFieldFooter: true,
      sizer: 'lg',
      className: { root: 'mb-4' },
    },
    {
      hasFieldFooter: true,
      sizer: 'xl',
      className: { root: 'mb-4' },
    },
  ],
  defaultVariants: {
    sizer: 'base',
    isKeyboardFocused: false,
    isDisabled: false,
    atMin: true,
    atMax: false,
  },
});
