import { tv } from 'tailwind-variants';

import { NoticeFlavor } from '@/constants';

/** tailwind-variants styles for the Shout component */
export const shoutStyler = tv({
  base: `
    rounded-sm font-medium
  `,
  variants: {
    sizer: {
      xs: 'text-xs px-2.5 py-1.5',
      sm: 'text-sm px-3 py-2',
      base: 'text-base px-4 py-3',
      lg: 'text-lg px-5 py-4',
      xl: 'text-xl px-6 py-5',
    },
    flavor: {
      [NoticeFlavor.info]: 'bg-blue-800 text-white',
      [NoticeFlavor.yep]: 'bg-emerald-700 text-white',
      [NoticeFlavor.maybe]: 'bg-yellow-500',
      [NoticeFlavor.nope]: 'bg-rose-700 text-white',
    },
  },
  defaultVariants: {
    sizer: 'base',
    flavor: NoticeFlavor.info,
  },
});
