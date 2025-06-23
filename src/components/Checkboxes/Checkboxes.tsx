import * as React from 'react';

import { Checkbox } from '@/components/Checkbox';
import { Fieldset } from '@/components/Fieldset';
import { FieldSizer } from '@/constants';
import type { FieldControlProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';

interface CheckboxesProps
  extends Omit<React.ComponentProps<'input'>, 'children' | 'className'> {
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
 *
 * @props {@link CheckboxesProps} + {@link FieldControlProps}
 */
export function Checkboxes({
  // Fieldset props
  className,
  sizer,
  label,
  explainer,
  hint,
  error,
  disabled,
  required,
  // Checkboxes-specific props
  name,
  value: controlledValue,
  defaultValue,
  options,
  children,
  onChange,
  onBlur,
  delimiter = ',',
  // The rest are brought in from <'input'>
  ...otherHiddenInputProps
}: CheckboxesProps & FieldControlProps) {
  const containerRef = React.createRef<HTMLDivElement>();

  const [checkboxName] = React.useState(randomId());

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

    // Sub-values within the value should be sorted according to the order
    // their corresponding checkbox appears in the DOM!
    const newValue = newValues
      .sort(sortValuesByDOMOrder(containerRef))
      .join(delimiter);

    if (!isControlledComponent) {
      setUncontrolledValue(newValue);
    }

    const hiddenInput = getHiddenInput(containerRef);
    hiddenInput.value = newValue;
    onChange?.({
      ...event,
      // The onChange events are originally triggered by the checkboxes, but
      // libraries like Formik behave differently when the event.target is a
      // checkbox.
      target: hiddenInput,
    });
  }

  // Simulate a blur on the hidden input when a checkbox is blurred. This allows
  // form libraries like Formik to know that the field has been "touched".
  function handleCheckboxBlur(event: React.FocusEvent<HTMLInputElement>) {
    const hiddenInput = getHiddenInput(containerRef);

    onBlur?.({
      ...event,
      target: hiddenInput,
    });
  }

  // This function will generate props to pass to each checkbox
  function checkbox({
    value: checkboxValue,
    disabled: checkboxDisabled = false,
  }: {
    value: string;
    disabled?: boolean;
  }) {
    return {
      name: checkboxName,
      value: checkboxValue,
      checked: values.includes(checkboxValue),
      onChange: handleCheckboxChange,
      onBlur: handleCheckboxBlur,
      disabled: disabled || checkboxDisabled,
    };
  }

  // React Hook Form sets the inital field value by using the `ref` prop to
  // programmatically set the `value` on the hidden input element. So when
  // the caller isn't using the `value` or `defaultValue` props, we should
  // inspect the hidden input, and if something has magically set its value,
  // use that as the defaultValue for this component -- allowing the checkboxes
  // to be properly checked or unchecked after mount.
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
          name={name}
          type="hidden"
          className="the-hidden-checkboxes-input hidden"
          disabled={disabled}
          required={required}
          {...otherHiddenInputProps}
        />
      </div>
    </Fieldset>
  );
}

Checkboxes.sizer = FieldSizer;

// This function can be used with Array.sort to sort checkbox values according
// to the order the corresponding checkboxes appear in the DOM.
function sortValuesByDOMOrder(
  checkboxesContainer: React.RefObject<HTMLElement | null>,
) {
  // Get the order the checkbox values as they appear in the DOM, so we can
  // order the new combined value accordingly
  const orderInDOM = [
    ...(checkboxesContainer.current?.getElementsByTagName('input') || []),
  ]
    .filter((input) => input.type === 'checkbox')
    .map((input) => input.value);

  return (a: string, b: string) => {
    const aIndex = orderInDOM.indexOf(a);
    const bIndex = orderInDOM.indexOf(b);

    // If B is not in the DOM, sort A to the front
    if (bIndex === -1) {
      return -1;
    }

    // else if A is not in the DOM, sort B to the front
    if (aIndex === -1) {
      return 1;
    }

    // else, sort according to their positions
    return aIndex - bIndex;
  };
}

function getHiddenInput(
  checkboxesContainer: React.RefObject<HTMLElement | null>,
) {
  return [
    ...(checkboxesContainer.current?.getElementsByClassName(
      'the-hidden-checkboxes-input',
    ) || []),
  ][0] as HTMLInputElement;
}
