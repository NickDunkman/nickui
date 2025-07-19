import { tv } from 'tailwind-variants';

import { NoticeFlavor, Sizer } from '@/constants';

/** tailwind-variants styles for the Shout component */
export const shoutStyles = tv({
  base: `
    rounded-sm font-medium
  `,
  variants: {
    sizer: {
      [Sizer.small]: 'text-sm px-3 py-2',
      [Sizer.base]: 'text-base px-4 py-3',
      [Sizer.large]: 'text-lg px-5 py-4',
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
