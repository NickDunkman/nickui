import * as React from 'react';

import { Fieldset } from '@/components/Fieldset';
import { Radio } from '@/components/Radio';
import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';

/**
 * These are all the RadioGroup-specific props (it also takes all props that
 * Fieldset takes)
 */
interface RadiosProps {
  /** The name applied to each of the radios */
  name?: string;
  /**
   * Render function used to render customized radios. Call the provided
   * callback to get props to pass down to each radio.
   */
  children?: (
    getRadioProps: (getRadioProps: {
      value: React.ComponentProps<'input'>['value'];
      disabled?: boolean;
    }) => React.ComponentProps<'input'>,
  ) => React.ReactNode;
  /** Adds radios in the standard layout */
  options?: {
    value: React.ComponentProps<'input'>['value'];
    label: React.ReactNode;
    disabled?: boolean;
  }[];
  /** Sets all of the radios in the group to disabled */
  disabled?: boolean;
  /** Called when the group’s value changes */
  onChange?: React.ComponentProps<'input'>['onChange'];
  /**
   * Sets the checked radio when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: React.ComponentProps<'input'>['value'];
  /** Sets the checked radio when using it as an uncontrolled component */
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
      value: radioValue,
      checked: radioValue === value,
      onChange: handleRadioChange,
      disabled: disabled || radioDisabled,
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
        {/* Standard layout using `options` */}
        {options && (
          <>
            {options.map((option) => (
              <Radio
                key={option.value?.toString()}
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

        {/* Customized layout using `childre4n` */}
        {!options && children?.(getRadioProps)}
      </div>
    </Fieldset>
  );
}

Radios.sizer = FieldSizer;
