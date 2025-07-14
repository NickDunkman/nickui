import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

/** tailwind-variants styles for the Textarea component */
export const styles = tv({
  slots: {
    root: 'relative',
    textarea: `
      border-black rounded-sm
      bg-white
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,
    hiddenTextarea: 'invisible absolute -z-1 pointer-events-none select-none',
  },
  // Some of the styles applied to textarea should also be applied to
  // hiddenTextarea, so that the height caculations on hiddenTextarea are
  // accurate
  compoundSlots: [
    {
      slots: ['textarea', 'hiddenTextarea'],
      className: 'appearance-none w-full border-2',
    },
    {
      slots: ['textarea', 'hiddenTextarea'],
      sizer: Sizer.small,
      className: 'text-sm py-1.5 px-2',
    },
    {
      slots: ['textarea', 'hiddenTextarea'],
      sizer: Sizer.medium,
      className: 'text-base py-2.5 px-3.5',
    },
    {
      slots: ['textarea', 'hiddenTextarea'],
      sizer: Sizer.large,
      className: 'text-lg py-3.5 px-4.5',
    },
  ],

  variants: {
    sizer: {
      [Sizer.small]: {},
      [Sizer.medium]: {},
      [Sizer.large]: {},
    },
    hasError: {
      false: {},
      true: {
        textarea: 'border-rose-800 focus:border-rose-800 focus:shadow-rose-300',
      },
    },
    disableManualResize: {
      false: {},
      true: {
        textarea: 'resize-none',
      },
    },
  },
  defaultVariants: {
    sizer: Sizer.small,
    hasError: false,
  },
});
