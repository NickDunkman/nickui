import { tv } from 'tailwind-variants';

/**
 * tailwind-variants styles for the Currency component. Meant to be used in
 * conjuction with the Text component styler
 */
export const currencyStyler = tv({
  slots: {
    visibleInputsContainer: 'relative',
    placeholderInput:
      'select-none pointer-events-none text-gray-400 disabled:text-gray-400',
    interactiveInput:
      'peer absolute top-0 right-0 left-0 !bg-transparent !border-transparent',
    hiddenInput: 'hidden',
    currencySymbol:
      'absolute scale-140 text-gray-400 peer-disabled:text-gray-400 select-none pointer-events-none',
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
    hasWorkingValue: {
      true: {},
    },
  },
  compoundVariants: [
    {
      hasError: false,
      hasWorkingValue: true,
      class: {
        currencySymbol: 'text-black',
      },
    },
  ],
  defaultVariants: {
    sizer: 'base',
    hasError: false,
    hasValue: false,
  },
});
