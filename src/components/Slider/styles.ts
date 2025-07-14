import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

/** tailwind-variants styles for the Slider component */
export const styles = tv({
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
      [Sizer.small]: {
        root: 'h-5', // same aggregate height as small Text
        track: `
          h-1 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,
        thumb: 'size-5',
      },
      [Sizer.medium]: {
        root: 'h-6', // same aggregate height as medium Text
        track: `
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,
        thumb: 'size-6',
      },
      [Sizer.large]: {
        root: 'h-7', // same aggregate height as large Text
        track: `
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,
        thumb: 'size-7',
      },
    },
    isFocused: {
      true: {
        thumb: `
          border-indigo-800
          after:absolute after:inset-3/10 after:bg-indigo-600 after:rounded-full 
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
      isFocused: true,
      hasError: true,
      className: {
        thumb: 'after:bg-rose-800',
      },
    },
    {
      hasFieldHeader: true,
      sizer: Sizer.small,
      className: { root: 'mt-2' },
    },
    {
      hasFieldHeader: true,
      sizer: Sizer.medium,
      className: { root: 'mt-3' },
    },
    {
      hasFieldHeader: true,
      sizer: Sizer.large,
      className: { root: 'mt-4' },
    },
    {
      hasFieldFooter: true,
      sizer: Sizer.small,
      className: { root: 'mb-2' },
    },
    {
      hasFieldFooter: true,
      sizer: Sizer.medium,
      className: { root: 'mb-3' },
    },
    {
      hasFieldFooter: true,
      sizer: Sizer.large,
      className: { root: 'mb-4' },
    },
  ],
  defaultVariants: {
    sizer: Sizer.small,
    isFocused: false,
    isDisabled: false,
    atMin: true,
    atMax: false,
  },
});
