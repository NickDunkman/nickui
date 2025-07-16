import { tv } from 'tailwind-variants';

import { NoticeFlavor, Sizer } from '@/constants';

/** tailwind-variants styles for the Shout component */
export const shoutStyles = tv({
  base: `
    rounded-sm font-semibold
  `,
  variants: {
    sizer: {
      [Sizer.small]: 'text-sm px-3 py-2',
      [Sizer.medium]: 'text-base px-4 py-3',
      [Sizer.large]: 'text-lg px-5 py-4',
    },
    flavor: {
      [NoticeFlavor.info]: 'bg-indigo-800 text-white',
      [NoticeFlavor.yep]: 'bg-emerald-700 text-white',
      [NoticeFlavor.maybe]: 'bg-yellow-500',
      [NoticeFlavor.nope]: 'bg-rose-800 text-white',
    },
  },
  defaultVariants: {
    sizer: Sizer.small,
    flavor: NoticeFlavor.info,
  },
});
