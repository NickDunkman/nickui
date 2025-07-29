import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Radio component */
export const toastStyler = tv({
  slots: {
    root: 'p-3 rounded-sm w-full group-[.toaster]:shadow-xl/40 border-1',
    // dismisser is shown in any of these cases:
    // - dismisser is hovered (possible when it was already shown)
    // - the toast is dismissible and the toast is "expanded" (which happens
    //   on toast hover)
    dismisser: `
      hidden
      hover:block
      group-[.toast[data-dismissible="true"][data-expanded="true"]]:block
      p-1.5 size-8 absolute -top-3 -right-3 rounded-full cursor-pointer z-1
    `,
    dismisserIcon: 'flex items-center justify-center rounded-full',
    content: 'flex flex-col gap-2',
    title: 'text-sm font-semibold',
    body: 'text-xs',
  },
  variants: {
    flavor: {
      neutral: {},
      positive: {},
      caution: {},
      negative: {},
    },
    isSecondary: {
      false: {
        dismisser: 'p-1',
        dismisserIcon: 'size-6 border-2 border-white',
      },
      true: {
        dismisser: 'p-1.5',
        dismisserIcon: 'size-5',
      },
    },
  },
  compoundVariants: [
    {
      flavor: 'neutral',
      isSecondary: false,
      class: {
        root: 'bg-blue-700 border-blue-700 text-white',
        dismisserIcon: 'bg-blue-950',
      },
    },
    {
      flavor: 'neutral',
      isSecondary: true,
      class: {
        root: 'bg-blue-50 border-blue-200 text-blue-950',
        dismisserIcon: 'bg-blue-900',
      },
    },
    {
      flavor: 'positive',
      isSecondary: false,
      class: {
        root: 'bg-emerald-700 border-emerald-700 text-white',
        dismisserIcon: 'bg-emerald-900',
      },
    },
    {
      flavor: 'positive',
      isSecondary: true,
      class: {
        root: 'bg-emerald-50 border-emerald-200 text-emerald-950',
        dismisserIcon: 'bg-emerald-800',
      },
    },
    {
      flavor: 'caution',
      isSecondary: false,
      class: {
        root: 'bg-yellow-500 border-yellow-500 text-yellow-950',
        dismisserIcon: 'bg-yellow-600',
      },
    },
    {
      flavor: 'caution',
      isSecondary: true,
      class: {
        root: 'bg-yellow-50 border-yellow-300 text-yellow-950',
        dismisserIcon: 'bg-yellow-600',
      },
    },
    {
      flavor: 'negative',
      isSecondary: false,
      class: {
        root: 'bg-rose-700 border-rose-700 text-white',
        dismisserIcon: 'bg-rose-900',
      },
    },
    {
      flavor: 'negative',
      isSecondary: true,
      class: {
        root: 'bg-rose-50 border-rose-200 text-rose-950',
        dismisserIcon: 'bg-rose-900',
      },
    },
  ],
  defaultVariants: {
    flavor: 'neutral',
    isDisabled: false,
    isKeyboardFocused: false,
    isSecondary: false,
  },
});
