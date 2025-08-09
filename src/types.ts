import * as React from 'react';

import { FLAVORS, SIZERS } from './constants';

export type FlavorType = (typeof FLAVORS)[number];

export type SizerType = (typeof SIZERS)[number];

// (This is how Storybook types its "of" props)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StoriesModule = Record<string, any>;

/**
 * NICKUI components with a `disabled` prop can have their props extend this to
 * promote consistent typing + jsdocs
 */
export interface DisableableProps {
  /** Prevents the user from interacting with the component */
  disabled?: boolean;
}

/**
 * NICKUI components with a `flavor` prop can have their props extend this to
 * promote consistent typing + jsdocs
 */
export interface FlavorableProps {
  /** Changes the color of the component */
  flavor?: FlavorType;
}

/**
 * NICKUI components with a `flavor` & `secondary` prop can have their props
 * extend this to promote consistent typing + jsdocs
 */
export interface SecondaryFlavorableProps extends FlavorableProps {
  /** Set to `true` to use the secondary style of the flavor */
  secondary?: boolean;
}

/**
 * NICKUI components with a `sizer` prop can have their props extend this to
 * promote consistent typing + jsdocs
 */
export interface SizerableProps {
  /**
   * Changes the size of the component. A sizer string, or an array of sizer
   * strings for responsive sizing.
   */
  sizer?: SizerType | SizerType[];
}

/**
 * NICKUI form control components which use Field or Fieldset can have their
 * props extend this to promote consistent typing + jsdocs
 */
export interface FieldableProps<ReactNode = React.ReactNode>
  extends DisableableProps,
    SizerableProps {
  /** The main label to show above the form control(s), naming the field */
  label?: ReactNode;
  /**
   * A hint about what kind of value the field accepts, such as a phone
   * number format
   */
  hint?: ReactNode;
  /**
   * Error message to show beneath the form control(s), or just `true` to
   * trigger the error style without showing an error message.
   */
  error?: ReactNode;
  /** When `true`, adds an asterisk to the label */
  required?: boolean;
}

/**
 * NICKUI checkable form control components which use CheckedField can have
 * their props extend this to promote consistent typing + jsdocs
 */
export interface CheckedFieldableProps
  extends DisableableProps,
    SizerableProps {
  /** The main label to to the right of the form control, naming the field */
  label?: React.ReactNode;
  /** Additional detail about the field, placed directly below the label */
  hint?: React.ReactNode;
}
