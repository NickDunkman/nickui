import { tv } from 'tailwind-variants';

import { NoticeFlavor, Sizer } from '@/constants';

/** tailwind-variants styles for the Shout component */
export const shoutStyler = tv({
  base: `
    rounded-sm font-medium
  `,
  variants: {
    sizer: {
      [Sizer.xs]: 'text-xs px-2.5 py-1.5',
      [Sizer.sm]: 'text-sm px-3 py-2',
      [Sizer.base]: 'text-base px-4 py-3',
      [Sizer.lg]: 'text-lg px-5 py-4',
      [Sizer.xl]: 'text-xl px-6 py-5',
    },
    flavor: {
      [NoticeFlavor.info]: 'bg-blue-800 text-white',
      [NoticeFlavor.yep]: 'bg-emerald-700 text-white',
      [NoticeFlavor.maybe]: 'bg-yellow-500',
      [NoticeFlavor.nope]: 'bg-rose-700 text-white',
    },
  },
  defaultVariants: {
    sizer: Sizer.base,
    flavor: NoticeFlavor.info,
  },
});
