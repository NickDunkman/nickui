import * as React from 'react';

import { Fieldset } from '@/components/Fieldset';
import { Radio } from '@/components/Radio';
import { FieldSizer } from '@/constants';
import type { CommonFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';

interface RadiosProps
  extends Omit<React.ComponentProps<'input'>, 'children' | 'className'> {
  /** The name applied to each of the radios */
  name?: string;
  /**
   * Render function used to render customized radios. Call the provided
   * callback to get props to pass down to each radio.
   */
  children?: (
    radio: (radio: {
      value: React.ComponentProps<'input'>['value'];
      disabled?: boolean;
    }) => React.ComponentProps<'input'>,
  ) => React.ReactNode;
  /** Adds radios in the standard layout */
  options?: {
    value: React.ComponentProps<'input'>['value'];
    label: React.ReactNode;
    explainer?: React.ReactNode;
    disabled?: boolean;
  }[];
  /** Called when the value changes */
  onChange?: React.ComponentProps<'input'>['onChange'];
  /**
   * Sets the value when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: React.ComponentProps<'input'>['value'];
  /** Sets the value when using it as an uncontrolled component */
  defaultValue?: React.ComponentProps<'input'>['defaultValue'];
}

/**
 * Renders multiple radios as one field in a Fieldset.
 * @props {@link RadiosProps} + {@link CommonFieldProps}
 */
export function Radios({
  // Fieldset props
  className,
  label,
  explainer,
  hint,
  error,
  sizer,
  disabled,
  required,
  // Radios-specific props
  name: controlledName,
  value: controlledValue,
  defaultValue,
  options,
  children,
  onChange,
  onBlur,
  // The rest are those brought in from React.CopponentProps<'input'>
  ...otherHiddenInputProps
}: RadiosProps & CommonFieldProps) {
  const containerRef = React.createRef<HTMLDivElement>();

  const [radioName] = React.useState(randomId());

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
    const newValue = event.target.value;

    if (!isControlledComponent) {
      setUncontrolledValue(newValue);
    }

    const hiddenInput = getHiddenInput(containerRef);
    hiddenInput.value = newValue;
    onChange?.({
      ...event,
      // The onChange events are originally triggered by the radios, but
      // libraries like Formik behave differently when the event.target is a
      // radio.
      target: hiddenInput,
    });
  }

  // Simulate a blur on the hidden input when a radio is blurred. This allows
  // form libraries like Formik to know that the field has been "touched".
  function handleRadioBlur(event: React.FocusEvent<HTMLInputElement>) {
    const hiddenInput = getHiddenInput(containerRef);

    onBlur?.({
      ...event,
      target: hiddenInput,
    });
  }

  // This function will generate props to pass to each Radio
  function radio({
    value: radioValue,
    disabled: radioDisabled = false,
  }: {
    value: React.ComponentProps<'input'>['value'];
    disabled?: boolean;
  }) {
    return {
      name: radioName,
      value: radioValue,
      checked: radioValue === value,
      onChange: handleRadioChange,
      onBlur: handleRadioBlur,
      disabled: disabled || radioDisabled,
    };
  }

  // React Hook Form sets the inital field value by using the `ref` prop to
  // programmatically set the `value` on the hidden input element. So when
  // the caller isn't using the `value` or `defaultValue` props, we should
  // inspect the hidden input, and if something has magically set its value,
  // use that as the defaultValue for this component -- allowing the correct
  // radio to be checked after mount.
  React.useLayoutEffect(() => {
    if (value === undefined && defaultValue === undefined) {
      const hiddenInput = getHiddenInput(containerRef);
      if (hiddenInput.value) {
        setUncontrolledValue(hiddenInput.value);
      }
    }
    // We only want to run this effect once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fieldset
      className={className}
      sizer={sizer}
      label={label}
      explainer={explainer}
      hint={hint}
      error={error}
      disabled={disabled}
      required={required}
    >
      <div
        ref={containerRef}
        className={
          // create a standard layout when self-rendering the Radios
          // (otherwise, the caller should manage the layout within `children`)
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
                {...radio({
                  value: option.value,
                  disabled: option.disabled,
                })}
                label={option.label}
                explainer={option.explainer}
              />
            ))}
          </>
        )}

        {/* Customized layout using `children` */}
        {!options && children?.(radio)}

        {/*
          This hidden input is what actually manage's the fields value. Form
          libraries like Formik have different behavior for radios, which we
          don't want for this component.
        */}
        <input
          name={name}
          type="hidden"
          className="the-hidden-radios-input hidden"
          disabled={disabled}
          required={required}
          {...otherHiddenInputProps}
        />
      </div>
    </Fieldset>
  );
}

Radios.sizer = FieldSizer;

function getHiddenInput(radiosContainer: React.RefObject<HTMLElement | null>) {
  return [
    ...(radiosContainer.current?.getElementsByClassName(
      'the-hidden-radios-input',
    ) || []),
  ][0] as HTMLInputElement;
}
