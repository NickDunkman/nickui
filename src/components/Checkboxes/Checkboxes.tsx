import * as React from 'react';

import { Checkbox } from '@/components/Checkbox';
import { Fieldset } from '@/components/Fieldset';
import { FieldSizer } from '@/constants';
import type { CommonCheckedFieldProps, CommonFieldsetProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';
import { useResolvedFieldSizer } from '@/utils/useResolvedFieldSizer';

export interface CheckablesProps
  extends Omit<React.ComponentProps<'input'>, 'children' | 'className'> {
  /** The name for the field */
  name?: string;
  /**
   * Render function used to render customized checkable inputs. Call the
   * provided callback to get props to pass down to each input.
   */
  render?: (
    inputProps: (control: {
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
  /** Called when the value changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Sets the value when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string;
  /** Sets the value when using it as an uncontrolled component */
  defaultValue?: string;
  /**
   * Optionally override the delimiter used to split the value into individual
   * checkable values
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
 * @props {@link CheckablesProps} + {@link CommonFieldsetProps}
 */
export function Checkboxes({
  delimiter = ',',
  ...otherProps
}: CheckablesProps & CommonFieldsetProps) {
  return (
    <Checkables {...otherProps} delimiter={delimiter} Checkable={Checkbox} />
  );
}

Checkboxes.sizer = FieldSizer;

/**
 * This component is the engine for the components that render multiple
 * checkables in a <Fieldset>, such as <Checkboxes>. It can handle both
 * multiValue behavior (such as when using checkboxes) and singleValue behavior
 * (such as when using radios).,
 */
export function Checkables({
  // Fieldset props
  className,
  sizer,
  label,
  hint,
  error,
  disabled,
  required,
  // Checkables-specific props
  Checkable,
  name,
  value: controlledValue,
  defaultValue,
  options,
  render,
  onChange,
  onBlur,
  delimiter,
  // The rest are brought in from <'input'>
  ...otherHiddenInputProps
}: CheckablesProps &
  CommonFieldsetProps & {
    Checkable: React.ComponentType<
      React.ComponentProps<'input'> & CommonCheckedFieldProps
    >;
  }) {
  const containerRef = React.createRef<HTMLDivElement>();
  const [checkableName] = React.useState(randomId());

  // track a value for *uncontrolled* mode, if necessary
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const isControlledComponent = controlledValue !== undefined;
  const value = isControlledComponent ? controlledValue : uncontrolledValue;
  const values =
    !value || value === '' ? [] : delimiter ? value.split(delimiter) : [value];

  // Callback to use for the onChange prop of each checkable
  function handleCheckableChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue: string;
    if (!delimiter) {
      newValue = event.target.checked ? event.target.value : '';
    } else {
      const newValues = event.target.checked
        ? [...values, event.target.value]
        : values.filter((v) => v !== event.target.value);

      // Sub-values within the value should be sorted according to the order
      // their corresponding checkable appears in the DOM!
      newValue = newValues
        .sort(sortValuesByDOMOrder(containerRef))
        .join(delimiter);
    }

    if (!isControlledComponent) {
      setUncontrolledValue(newValue);
    }

    const hiddenInput = getHiddenInput(containerRef);
    hiddenInput.value = newValue;
    onChange?.({
      ...event,
      // The onChange events are originally triggered by the checkables, but
      // libraries like Formik behave differently when the event.target is a
      // checkbox or radio.
      target: hiddenInput,
    });
  }

  // Simulate a blur on the hidden input when a checkable is blurred. This
  // allows form libraries like Formik to know that the field has been
  // "touched".
  function handleCheckableBlur(event: React.FocusEvent<HTMLInputElement>) {
    const hiddenInput = getHiddenInput(containerRef);

    onBlur?.({
      ...event,
      target: hiddenInput,
    });
  }

  // This function will generate props to pass to each checkable's input
  function inputProps({
    value: checkableValue,
    disabled: checkableDisabled = false,
  }: {
    value: string;
    disabled?: boolean;
  }) {
    return {
      name: checkableName,
      value: checkableValue,
      checked: values.includes(checkableValue),
      onChange: handleCheckableChange,
      onBlur: handleCheckableBlur,
      disabled: disabled || checkableDisabled,
    };
  }

  // React Hook Form sets the inital field value by using the `ref` prop to
  // programmatically set the `value` on the hidden input element. So when
  // the caller isn't using the `value` or `defaultValue` props, we should
  // inspect the hidden input, and if something has magically set its value,
  // use that as the defaultValue for this component -- allowing the checkables
  // to be properly checked or unchecked after mount.
  React.useLayoutEffect(() => {
    if (controlledValue === undefined && defaultValue === undefined) {
      const hiddenInput = getHiddenInput(containerRef);
      if (hiddenInput.value) {
        setUncontrolledValue(hiddenInput.value);
      }
    } else if (value) {
      const hiddenInput = getHiddenInput(containerRef);
      hiddenInput.value = value;
    }
    // We only want to run this effect once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resolvedSizer = useResolvedFieldSizer(sizer);

  return (
    <Fieldset
      className={className}
      sizer={sizer}
      label={label}
      hint={hint}
      error={error}
      disabled={disabled}
      required={required}
    >
      <div
        ref={containerRef}
        className={
          // create a standard layout when self-rendering the checkables
          // (otherwise, the caller should manage the layout within `render`)
          options &&
          clsw('flex flex-col', {
            'gap-y-2': !resolvedSizer || resolvedSizer === FieldSizer.small,
            'gap-y-2.5': resolvedSizer === FieldSizer.medium,
            'gap-y-3': resolvedSizer === FieldSizer.large,
          })
        }
      >
        {/* Standard layout using `options` */}
        {options && (
          <>
            {options.map((option) => (
              <Checkable
                key={option.value?.toString()}
                sizer={sizer}
                {...inputProps({
                  value: option.value,
                  disabled: option.disabled,
                })}
                label={option.label}
                hint={option.hint}
              />
            ))}
          </>
        )}

        {/* Customized layout using `render` */}
        {!options && render?.(inputProps)}

        {/*
          This hidden input manages the component’s value. See the component
          description for an explanation.
        */}
        <input
          {...otherHiddenInputProps}
          name={name}
          type="hidden"
          className="the-hidden-input hidden"
          disabled={disabled}
          required={required}
          data-testid="the-hidden-input"
        />
      </div>
    </Fieldset>
  );
}

// This function can be used with Array.sort to sort the sub-values according
// to the order the corresponding checkables appear in the DOM.
function sortValuesByDOMOrder(
  checkablesContainer: React.RefObject<HTMLElement | null>,
) {
  // Get the order of all possible sub-values as they appear in the DOM
  const orderInDOM = [
    ...(checkablesContainer.current?.getElementsByTagName('input') || []),
  ]
    .filter((input) => input.type === 'checkbox' || input.type === 'radio')
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
  checkablesContainer: React.RefObject<HTMLElement | null>,
) {
  return [
    ...(checkablesContainer.current?.getElementsByClassName(
      'the-hidden-input',
    ) || []),
  ][0] as HTMLInputElement;
}
