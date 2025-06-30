import * as React from 'react';

import { FieldSizer } from '@/constants';

/**
 * Any component which uses Field or Fieldset as a wrapper take these props!
 */
export type CommonFieldProps = {
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
  /** The main label to show above the form control, naming the field */
  label?: React.ReactNode;
  /**
   * A more detailed label explaining the purpose of the field, placed
   * directly below the main label
   */
  explainer?: React.ReactNode;
  /**
   * A hint about what kind of value the control accepts, such as a phone
   * number format
   */
  hint?: React.ReactNode;
  /**
   * Error message to show along with the field, or just `true` to trigger the
   * error style without showing an error message.
   */
  error?: boolean | React.ReactNode;
  /** When `true`, adds an asterisk to the label */
  required?: boolean;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
};

/** Any component which uses CheckedField as a wrapper take these props! */
export type CommonCheckedFieldProps = {
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
  /** The main label to to the right of the form control, naming the field */
  label?: React.ReactNode;
  /**
   * A more detailed label explaining the purpose of the field, placed
   * directly below the main label
   */
  explainer?: React.ReactNode;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
};
