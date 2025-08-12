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
 * NICKUI components which use Field or Fieldset can have their props extend
 * this to promote consistent typing + jsdocs
 */
export interface FieldableProps<DescriptorType = React.ReactNode>
  extends SizerableProps {
  /** The main label to show above the form control(s), naming the field */
  label?: DescriptorType;
  /**
   * A hint about what kind of value the field accepts, such as a phone
   * number format
   */
  hint?: DescriptorType;
  /**
   * Error message to show beneath the form control(s), or just `true` to
   * trigger the error style without showing an error message.
   */
  error?: DescriptorType;
  /** When `true`, adds an asterisk to the label */
  required?: boolean;
}

/**
 * NICKUI form control components which use Field or Fieldset can have their
 * props extend this to promote consistent typing + jsdocs
 */
export type FieldableFormControlProps<
  /**
   * The type of the `value` & `defaultValue` props. Defaults to `string` since
   * most NickUI form controls accept strings only.
   */
  ValueType extends React.ComponentProps<'input'>['value'] = string,
  /**
   * The base intrinsic element’s props to base off of. Either an intrinsic
   * name (like 'input' or 'select'), or subset of an intrinsic's props. The
   * latter allows you the ability to omit props, such as if yout to omit
   * an input’s type prop with `Omit<React.ComponentProps<'input'>, 'type'>`.
   */
  Intrinsic extends
    | keyof React.JSX.IntrinsicElements
    | Partial<React.HTMLAttributes<HTMLElement>> = 'input',
  /**
   * Option to override the type used for the `label`, `hint`, and `error`
   * props. Defaults to `React.ReactNode`. For example, this is used by the
   * Slider component to allow you to optionally pass render functions to each.
   */
  DescriptorType = React.ReactNode,
  /**
   * Used internally to convert the `Intrinic` generic to its props, when an
   * intrinsic name is specified. You probably don’t want to override this!
   */
  IntrinsicProps = Intrinsic extends keyof React.JSX.IntrinsicElements
    ? React.JSX.IntrinsicElements[Intrinsic]
    : Intrinsic,
> =
  // All of the Fieldable props
  FieldableProps<DescriptorType> &
    // + `disabled` prop
    DisableableProps &
    // + all of the specified intrinsic props (except those we’ll override below)
    Omit<IntrinsicProps, 'value' | 'defaultValue'> &
    // + some overrides
    {
      /**
       * Sets the value of the component when using it as a
       * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
       */
      value?: ValueType;
      /**
       * Sets the value of the component when using it as an uncontrolled component
       */
      defaultValue?: ValueType;
      /** The name of the field  */
      name?: string;
    };

/**
 * NICKUI checkable form control components which use CheckedField can have
 * their props extend this to promote consistent typing + jsdocs
 */
export interface CheckedFieldableProps<DescriptorType = React.ReactNode>
  extends SizerableProps,
    DisableableProps {
  /** The main label to to the right of the form control, naming the field */
  label?: DescriptorType;
  /** Additional detail about the field, placed directly below the label */
  hint?: DescriptorType;
}

/**
 * NICKUI form control components which use CheckedField can have their props
 * extend this to promote consistent typing + jsdocs
 */
export type CheckedFieldableFormControlProps<
  /**
   * The base intrinsic element’s props to base off of. Either an intrinsic
   * name (like 'input' or 'select'), or subset of an intrinsic's props. The
   * latter allows you the ability to omit props, such as if yout to omit
   * an input’s type prop with `Omit<React.ComponentProps<'input'>, 'type'>`.
   */
  Intrinsic extends
    | keyof React.JSX.IntrinsicElements
    | Partial<React.HTMLAttributes<HTMLElement>> = 'input',
  /**
   * Option to override the type used for the `label`, `hint`, and `error`
   * props. Defaults to `React.ReactNode`. For example, this is used by the
   * Slider component to allow you to optionally pass render functions to each.
   */
  DescriptorType = React.ReactNode,
  /**
   * Used internally to convert the `Intrinic` generic to its props, when an
   * intrinsic name is specified. You probably don’t want to override this!
   */
  IntrinsicProps = Intrinsic extends keyof React.JSX.IntrinsicElements
    ? React.JSX.IntrinsicElements[Intrinsic]
    : Intrinsic,
> =
  // All of the CheckedFieldable props
  CheckedFieldableProps<DescriptorType> &
    // + `disabled` prop
    DisableableProps &
    // + all of the specified intrinsic props (except those we’ll override below)
    IntrinsicProps &
    // + some overrides
    {
      /**
       * Sets the checked state of the component when using it as a
       * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
       */
      checked?: boolean;
      /**
       * Sets the checked state of the component when using it as a uncontrolled
       * component
       */
      defaultChecked?: boolean;
      /** The name of the field  */
      name?: string;
    };

/**
 * Props for NICKUI form control components which use multiple checkables
 * for one field, such as Checkboxes, Radios, & Switches.
 */
export interface CheckedFieldableFormControlsProps
  extends FieldableFormControlProps<
    string,
    Omit<React.ComponentProps<'input'>, 'children'>
  > {
  /**
   * Render function used to render customized checkable inputs. Call the
   * provided callback to get props to pass down to each input.
   */
  render?: (
    inputProps: (config: {
      value: string;
      disabled?: boolean;
    }) => React.ComponentProps<'input'>,
  ) => React.ReactNode;
  /** Adds the controls in the standard layout */
  options?: {
    value: string;
    label: React.ReactNode;
    hint?: React.ReactNode;
    disabled?: boolean;
  }[];
  /**
   * Optionally override the delimiter used to split the value into individual
   * checkable values
   */
  delimiter?: string;
}
