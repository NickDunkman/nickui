import { tv } from 'tailwind-variants';

/**
 * tailwind-variants styles for the Currency component. Meant to be used in
 * conjuction with the Text component styler
 */
export const currencyStyler = tv({
  slots: {
    visibleInputsContainer: 'relative',
    placeholderInput: 'user-select-none pointer-events-none',
    interactiveInput:
      'absolute top-0 right-0 left-0 !bg-transparent !border-transparent',
    hiddenInput: 'hidden',
    currencySymbol: 'absolute scale-140 text-gray-400',
  },
  variants: {
    sizer: {
      xs: {},
      sm: {},
      base: {
        placeholderInput: 'pl-9',
        interactiveInput: 'pl-9',
        currencySymbol: 'top-3 left-4',
      },
      lg: {},
      xl: {},
    },
    hasError: {
      true: {
        currencySymbol: 'text-rose-800',
      },
    },
    hasValue: {
      true: {},
    },
    hasDecimalPointOnlyValue: {
      true: {
        interactiveInput: '!text-transparent caret-black',
      },
    },
  },
  compoundVariants: [
    {
      hasError: false,
      hasValue: true,
      hasDecimalPointOnlyValue: false,
      class: {
        currencySymbol: 'text-black',
      },
    },
    {
      hasError: false,
      hasDecimalPointOnlyValue: true,
      class: {
        currencySymbol: 'text-gray-400',
      },
    },
  ],
  defaultVariants: {
    sizer: 'base',
    hasError: false,
    hasValue: false,
    hasDecimalPointOnlyValue: false,
  },
});
