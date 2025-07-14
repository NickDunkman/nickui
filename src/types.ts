import * as React from 'react';

import { Sizer } from '@/constants';

/**
 * Any component which uses Field or Fieldset as a wrapper take these props!
 */
export type CommonFieldProps<ReactNode = React.ReactNode> = {
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: Sizer | Sizer[];
  /** The main label to show above the form control, naming the field */
  label?: ReactNode;
  /**
   * A hint about what kind of value the control accepts, such as a phone
   * number format
   */
  hint?: ReactNode;
  /**
   * Error message to show along with the field, or just `true` to trigger the
   * error style without showing an error message.
   */
  error?: ReactNode;
  /** When `true`, adds an asterisk to the label */
  required?: boolean;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
};

/**
 * Any component which uses Field or Fieldset as a wrapper take these props!
 */
export type CommonFieldsetProps = {
  /** Optionally add utility classes to the root element */
  className?: string;
  /**
   * Changes the size of the field ("small", "medium", "large", "sm:small",
   * "md:large", etc)
   */
  sizer?: Sizer | Sizer[];
  /** The main label to show above the form control, naming the field */
  label?: React.ReactNode;
  /**
   * A hint about what kind of value the control accepts, such as a phone
   * number format
   */
  hint?: React.ReactNode;
  /** Error message to show along with the field */
  error?: React.ReactNode;
  /** Adds an asterisk to the label */
  required?: boolean;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
};

/** Any component which uses CheckedField as a wrapper take these props! */
export type CommonCheckedFieldProps = {
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: Sizer | Sizer[];
  /** The main label to to the right of the form control, naming the field */
  label?: React.ReactNode;
  /** Additional detail about the field, placed directly below the label */
  hint?: React.ReactNode;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
};

// (This is how Storybook types its "of" props)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StoriesModule = Record<string, any>;
