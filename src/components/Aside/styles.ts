import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Shout component */
export const asideStyler = tv({
  slots: {
    root: 'rounded-sm border-1',
    heading: 'font-semibold',
    paragraph: '',
  },
  variants: {
    sizer: {
      xs: {
        root: 'p-3 text-xs',
        heading: 'text-xs mb-2.5',
        paragraph: 'text-xs [&:not(:last-child)]:mb-2',
      },
      sm: {
        root: 'p-3.5 text-xs',
        heading: 'text-sm mb-3',
        paragraph: 'text-xs [&:not(:last-child)]:mb-2.5',
      },
      base: {
        root: 'p-4 text-sm',
        heading: 'text-base mb-3.5',
        paragraph: 'text-sm [&:not(:last-child)]:mb-3',
      },
      lg: {
        root: 'p-4.5 text-base',
        heading: 'text-lg mb-4',
        paragraph: 'text-base [&:not(:last-child)]:mb-3.5',
      },
      xl: {
        root: 'p-5 text-lg',
        heading: 'text-xl mb-4.5',
        paragraph: 'text-lg [&:not(:last-child)]:mb-4',
      },
    },
    flavor: {
      info: {
        root: 'bg-blue-50 border-blue-200 text-blue-950',
      },
      positive: {
        root: 'bg-emerald-50 border-emerald-200 text-emerald-950',
      },
      maybe: { root: 'bg-yellow-50 border-yellow-300 text-yellow-950' },
      nope: { root: 'bg-rose-50 border-rose-200 text-rose-950' },
    },
  },
  defaultVariants: {
    sizer: 'base',
    flavor: 'info',
  },
});
