import * as React from 'react';

import { Fieldset } from '@/components/Fieldset';
import { Radio } from '@/components/Radio';
import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';

import { Field } from '../Field';

/**
 * These are all the RadioGroup-specific props (it also takes all props that
 * Fieldset takes)
 */
interface RadiosProps {
  /** The name applied to each of the radios */
  name?: string;
  /** Render function used to render customized layouts within the group (it's
   * more common to use the `options` prop!)
   */
  children?: (
    getRadioProps: (getRadioProps: {
      value: React.ComponentProps<'input'>['value'];
      disabled?: boolean;
    }) => React.ComponentProps<'input'>,
  ) => React.ReactNode;
  /** Adds radios to the group in the standard layout (for a customized layout,
   * use `children` instead) */
  options?: {
    className?: string;
    value: React.ComponentProps<'input'>['value'];
    label: React.ReactNode;
    disabled?: boolean;
  }[];
  /** Sets all of the radios in the group to disabled */
  disabled?: boolean;
  /** Called when the group's value changes */
  onChange?: React.ComponentProps<'input'>['onChange'];
  /** Sets the group's value when using as a
   * [controlled component](https://reactjs.org/link/controlled-components) */
  value?: React.ComponentProps<'input'>['value'];
  /** Sets the group's value when using as an _uncontrolled_ component */
  defaultValue?: React.ComponentProps<'input'>['defaultValue'];
}

/** Radios renders multiple <Radio> as one field in a Fieldset */
export function Radios({
  name: controlledName,
  children,
  options,
  disabled = false,
  onChange,
  value: controlledValue,
  defaultValue,
  sizer,
  ...fieldsetLayoutProps
}: RadiosProps & Omit<React.ComponentProps<typeof Fieldset>, 'children'>) {
  // Generate a `name` to use if none is provided, so that the child Radios
  // always function together.
  const [uncontrolledName] = React.useState(randomId());
  const name = controlledName || uncontrolledName;

  // track a value for *uncontrolled* mode, if necessary
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const isControlledComponent = controlledValue !== undefined;
  const value = isControlledComponent ? controlledValue : uncontrolledValue;

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlledComponent) {
      setUncontrolledValue(event.target.value);
    }
    onChange?.(event);
  }

  // This function will generate Props to pass to each Radio
  function getRadioProps({
    value: radioValue,
    disabled: radioDisabled = false,
  }: {
    value: React.ComponentProps<'input'>['value'];
    disabled?: boolean;
  }) {
    return {
      name,
      disabled: disabled || radioDisabled,
      onChange: handleRadioChange,
      value: radioValue,
      checked: radioValue === value,
    };
  }

  return (
    <Fieldset sizer={sizer} {...fieldsetLayoutProps}>
      <div
        className={
          // create a standard layout when self-rendering the Radios
          // (otherwise, the caller should manage the layout within `children`)
          // TODO: adjust gaps according to sizer
          options &&
          clsw('flex flex-col', {
            'gap-y-2': !sizer || sizer === FieldSizer.small,
            'gap-y-2.5': sizer === FieldSizer.medium,
            'gap-y-3': sizer === FieldSizer.large,
          })
        }
      >
        {/* When there are `options`, render a standard Radio layout */}
        {options && (
          <>
            {options.map((option) => (
              <Radio
                key={option.value?.toString()}
                className={option.className}
                sizer={sizer}
                {...getRadioProps({
                  value: option.value,
                  disabled: option.disabled,
                })}
              >
                {option.label}
              </Radio>
            ))}
          </>
        )}
        {/* Else, render the radios using the children-render-function */}
        {!options && children?.(getRadioProps)}
      </div>
    </Fieldset>
  );
}

Radios.sizer = FieldSizer;
