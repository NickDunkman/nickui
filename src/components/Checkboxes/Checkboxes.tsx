import * as React from 'react';

import { Checkbox } from '@/components/Checkbox';
import { Fieldset } from '@/components/Fieldset';
import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';

interface CheckboxesProps {
  /** The name fot the field */
  name?: React.ComponentProps<'input'>['name'];
  /**
   * Render function used to render customized checkboxes. Call the provided
   * callback to get props to pass down to each checkbox.
   */
  children?: (
    checkbox: (checkbox: {
      value: string;
      disabled?: boolean;
    }) => React.ComponentProps<'input'>,
  ) => React.ReactNode;
  /** Adds checkboxes in the standard layout */
  options?: {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
  }[];
  /** Disables all of the checkboxes */
  disabled?: boolean;
  /** Called when the value changes */
  onChange?: React.ComponentProps<'input'>['onChange'];
  /**
   * Sets the value when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string;
  /** Sets the value when using it as an uncontrolled component */
  defaultValue?: string;
  /**
   * Optionally override the delimiter used to split the value into individual
   * checkbox values
   */
  delimiter?: string;
}

/**
 * Renders multiple checkboxes as one field in a Fieldset.
 *
 * Form libraries like Formik rely on `onChange` events to trigger updates to
 * field values, and such events cannot have multiple targets. Therefore, to
 * function as one holistic field whose value represents all of the currently
 * checked checkboxes, the component's value is a single delimited-string that
 * is managed using a `<input type="hidden">`. Each checkbox represents a
 * substring that can be added to or removed from the delimited-string by
 * toggling the checked status.
 */
export function Checkboxes({
  name,
  children,
  options,
  disabled = false,
  onChange,
  value: controlledValue,
  defaultValue,
  delimiter = ',',
  sizer,
  ...otherFieldsetProps
}: CheckboxesProps & Omit<React.ComponentProps<typeof Fieldset>, 'children'>) {
  const hiddenInputRef = React.createRef<HTMLInputElement>();

  // track a value for *uncontrolled* mode, if necessary
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const isControlledComponent = controlledValue !== undefined;
  const value = isControlledComponent ? controlledValue : uncontrolledValue;
  const values = value === '' ? [] : value?.split(delimiter) || [];

  // Callback to use for the onChange prop of each checkbox
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValues = event.target.checked
      ? [...values, event.target.value]
      : values.filter((v) => v !== event.target.value);
    const newValue = newValues.sort().join(delimiter);

    if (!isControlledComponent) {
      setUncontrolledValue(newValue);
    }

    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = newValue;
      onChange?.({
        ...event,
        // The onChange events are originally triggered by the checkboxes, but
        // libraries like Formik behave differently when the event.target is a
        // checkbox. So swap in the hidden input.
        target: hiddenInputRef.current,
      });
    }
  }

  // This function will generate Props to pass to each checkbox
  function checkbox({
    value: checkboxValue,
    disabled: checkboxDisabled = false,
  }: {
    value: string;
    disabled?: boolean;
  }) {
    return {
      value: checkboxValue,
      checked: values.includes(checkboxValue),
      onChange: handleCheckboxChange,
      disabled: disabled || checkboxDisabled,
    };
  }

  return (
    <Fieldset sizer={sizer} {...otherFieldsetProps}>
      <div
        className={
          // create a standard layout when self-rendering the Checkboxes
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
              <Checkbox
                key={option.value?.toString()}
                sizer={sizer}
                {...checkbox({
                  value: option.value,
                  disabled: option.disabled,
                })}
              >
                {option.label}
              </Checkbox>
            ))}
          </>
        )}

        {/* Customized layout using `children` */}
        {!options && children?.(checkbox)}

        {/*
          This hidden input manages the component’s composite delimited-string
          value. See the component description for an explanation.
        */}
        <input
          ref={hiddenInputRef}
          name={name}
          type="hidden"
          value={value || ''}
          className="hidden"
        />
      </div>
    </Fieldset>
  );
}

Checkboxes.sizer = FieldSizer;
