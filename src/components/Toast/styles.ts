import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Radio component */
export const toastStyler = tv({
  slots: {
    root: 'p-3 rounded-sm w-full group-[.toaster]:shadow-xl border-1',
    // dismisser is shown in any of these cases:
    // - dismisser is hovered (possible when it was already shown)
    // - the toast is dismissible and the toast is "expanded" (which happens
    //   on toast hover)
    dismisser: `
      hidden
      hover:block
      group-[.toast[data-dismissible="true"][data-expanded="true"]]:block
      p-1.5 size-8 absolute rounded-full -top-3 -right-3 cursor-pointer z-1
    `,
    dismisserIcon: `
      flex items-center justify-center
      size-5
      rounded-full
    `,
    content: 'flex flex-col gap-2',
    title: 'text-sm font-semibold',
    body: 'text-xs',
  },
  variants: {
    flavor: {
      info: {
        root: 'bg-blue-50 border-blue-200 text-blue-950',
        dismisserIcon: 'bg-blue-900',
      },
      yep: {
        root: 'bg-emerald-50 border-emerald-200 text-emerald-950',
        dismisserIcon: 'bg-emerald-800',
      },
      maybe: {
        root: 'bg-yellow-50 border-yellow-300 text-yellow-950',
        dismisserIcon: 'bg-yellow-600',
      },
      nope: {
        root: 'bg-rose-50 border-rose-200 text-rose-950',
        dismisserIcon: 'bg-rose-900',
      },
    },
  },
  defaultVariants: {
    flavor: 'info',
    isDisabled: false,
    isKeyboardFocused: false,
  },
});
