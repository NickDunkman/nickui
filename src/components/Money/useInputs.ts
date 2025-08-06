import * as React from 'react';

import { fireInputChange } from '@/utils/fireInputChange';

import { MoneyProps } from './types';
import { useKeyDownConstrictor } from './useKeyDownConstrictor';
import { useValueStore } from './useValueStore';
import { createFormatConfig, getDeformattedSelection } from './utils';

type InputProps = React.ComponentProps<'input'>;
type InputPropsWithRefObject = Omit<InputProps, 'ref'> & {
  ref: React.RefObject<HTMLInputElement | null>;
};

/**
 * Given the props passed to the Money component, returns props that should
 * be installed on each of the 3 <input>s within the component.
 *
 * Does *not* provide props for styling the inputs; it’s more clear to
 * co-locate those with the JSX in the Money component code.
 *
 * This is broken out b/c distributing this logic between the 3 inputs is
 * complex:
 * - validating & formatting the value as you type, or as a new `value` or
 *   `defaultValue` comes in through the Money props, especially as each
 *   <input>’s value uses a slightly different format & has different rules
 * - propogating the new value up to the parent via the onChange prop (and not
 *   doing so under certain conditions)
 * - accessibility
 */
export function useInputs(props: MoneyProps): {
  workingInput: InputPropsWithRefObject;
  placeholderInput: InputPropsWithRefObject;
  hiddenInput: InputProps;
} {
  const workingRef = React.useRef<HTMLInputElement>(null);
  const placeholderRef = React.useRef<HTMLInputElement>(null);
  const hiddenRef = React.useRef<HTMLInputElement>(null);

  // The "focus format" has no thousands separators & is used while the user
  // is focused on the field. Having thousands separators added/removed while
  // you’re typing is janky, so just remove that formatting while focused.
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [isFocusFormatted, setIsFocusFormatted] = React.useState(false);

  const fullFormat = createFormatConfig(
    props.currencySymbol ?? '$',
    props.decimalPoint ?? '.',
    props.decimalPlaces ?? 2,
    props.thousandsSeparator ?? ',',
    props.allowNegatives || false,
  );

  const focusFormat = createFormatConfig(
    fullFormat.currencySymbol,
    fullFormat.decimalPoint,
    fullFormat.maxDecimalPlaces,
    '',
    fullFormat.allowNegatives,
  );

  const {
    currentValue,
    previousValue,
    reinitializeValue,
    updateFromWorkingValue,
    updateFromIncrement,
  } = useValueStore({
    controlledValue: props.value,
    defaultValue: props.defaultValue,
    format: isFocusFormatted ? focusFormat : fullFormat,
  });

  // When the numerish value is changing, and the source of the change wasn’t
  // due to a passed in `value` or `defaultValue` prop, we should push the new
  // value up to the parent via the hidden <input>’s onChange handler.
  React.useEffect(() => {
    if (
      currentValue.numerishValue !== previousValue?.numerishValue &&
      currentValue.source !== 'controlledValue' &&
      currentValue.source !== 'initialValue'
    ) {
      fireInputChange(hiddenRef.current, currentValue.numerishValue);
    }
  }, [
    currentValue.numerishValue,
    previousValue?.numerishValue,
    currentValue.source,
  ]);

  // In certain situations, we need to programmatically install the updated
  // "workingValue" into the working <input>:
  // - immediately after we first mount the component
  // - when the user focuses into the field, we update the format to not include
  //   a thousands separator
  // - when the user increments or decrements using the arrow keys
  React.useEffect(() => {
    if (
      workingRef.current &&
      workingRef.current.value !== currentValue.workingValue
    ) {
      // Capture where the cursor (or selection range) is before changing the
      // value, so we can restore it after
      const selectionBeforeChange = {
        start: workingRef.current.selectionStart || 0,
        end: workingRef.current.selectionEnd || 0,
      };

      // Install into the working <input>
      workingRef.current.value = currentValue.workingValue;

      // If the field is focused, there are certain cases where we need to
      // tweak the cursor/selection position after updating the value, so that
      // the cursor doesn't just automatically go to the end and yank the user
      // away from what they were trying to do with the cursor
      if (previousValue && document.activeElement === workingRef.current) {
        // If this is due to removing the thousands separator, we need to adjust
        // the cursor position (or selection range) based on the change, so the
        // cursor is still at the same position in the number (or still has
        // the same range of the number selected)
        if (currentValue.source === 'format') {
          workingRef.current.setSelectionRange(
            ...getDeformattedSelection(
              previousValue,
              selectionBeforeChange.start,
              selectionBeforeChange.end,
            ),
          );
        }

        // If it's due to incrementing or decrementing, we may need to move
        // the cursor one spot to the left or right to keep the user in the
        // same spot they were in
        if (currentValue.source === 'increment') {
          const digitDelta =
            currentValue.numerishValue.length -
            previousValue.numerishValue.length;
          workingRef.current.setSelectionRange(
            selectionBeforeChange.start + digitDelta,
            selectionBeforeChange.end + digitDelta,
          );
        }
      }
    }
  }, [currentValue, previousValue, workingRef]);

  const keyDownConstrictor = useKeyDownConstrictor({
    allowNegatives: fullFormat.allowNegatives,
    decimalPlaces: fullFormat.maxDecimalPlaces,
    decimalPoint: fullFormat.decimalPoint,
  });

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const shouldConstrict = keyDownConstrictor(event);
    if (shouldConstrict) {
      event.preventDefault();
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      updateFromIncrement(event.shiftKey ? 10 : 1);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      updateFromIncrement(event.shiftKey ? -10 : -1);
    }

    props.onKeyDown?.(event);
  }

  // React Hook Form sets the inital field value by using the `ref` prop to
  // programmatically set the `value` on the hidden input element. So when
  // the caller isn't using the `value` or `defaultValue` props, we should
  // inspect the hidden input, and if something has magically set its value,
  // use that as the initial value for this component -- allowing the checkboxes
  // to be properly checked or unchecked after mount.
  React.useLayoutEffect(() => {
    if (props.value === undefined && props.defaultValue === undefined) {
      const hiddenValue = hiddenRef.current?.value;
      if (hiddenValue != null && hiddenValue !== '') {
        reinitializeValue({ defaultValue: hiddenValue });
      }
    }
    // We only want to run this effect once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // deconstruct an <input>-props only object so we can spread the remainder
  // onto the working input. This will allow you to use any other prop, such
  // as setting an `aria-label`
  const {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    className, // className is intended to be used on the <Field> wrapper
    sizer,
    label,
    hint,
    error,
    currencySymbol,
    decimalPoint,
    decimalPlaces,
    thousandsSeparator,
    allowNegatives,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ...inputHTMLProps
  } = props;

  return {
    workingInput: {
      role: 'spinbutton',
      type: 'text',
      inputMode: 'numeric',
      ...inputHTMLProps,
      ref: workingRef,
      id: props.id,
      disabled: props.disabled,
      required: props.required,
      'aria-labelledby': props['aria-labelledby'],
      'aria-describedby': props['aria-describedby'],
      'aria-errormessage': props['aria-errormessage'],
      'aria-invalid': props['aria-invalid'] ?? !!props.error,
      onChange: (event) => updateFromWorkingValue(event.target.value),
      onKeyDown: handleKeyDown,
      onFocus: (event) => {
        !isMouseDown && !isFocusFormatted && setIsFocusFormatted(true);
        props.onFocus?.(event);
      },
      onBlur: (event) => {
        isFocusFormatted && setIsFocusFormatted(false);
        props.onBlur?.(event);
      },
      // This mouse stuff prevents onFocus from immediately switching the system
      // to use focusFormat when the user is trying to select some text -- we
      // should wait until mouseUp so that the selection isn't janked
      onMouseDown: (event) => {
        !isMouseDown && setIsMouseDown(true);
        props.onMouseDown?.(event);
      },
      onMouseUp: (event) => {
        isMouseDown && setIsMouseDown(false);
        !isFocusFormatted && setIsFocusFormatted(true);
        props.onMouseUp?.(event);
      },
      // Note: there is intentionally no `value` prop specified on the
      // workingInput. There is an effect above that updates the value on this
      // <input> above, since it needs to programmatically update the cursor
      // position as it does so.
      value: undefined,
      defaultValue: undefined,
      // Name goes on the hidden input
      name: undefined,
    },
    placeholderInput: {
      ref: placeholderRef,
      type: 'text',
      value: currentValue.placeholderValue,
      onChange: () => {},
      disabled: props.disabled,
    },
    hiddenInput: {
      ref: (el) => {
        hiddenRef.current = el;

        if (typeof props.ref === 'function') {
          props.ref(el);
        } else if (props.ref) {
          props.ref.current = el;
        }
      },
      type: 'number',
      name: props.name,
      onChange: props.onChange,
      // We set the value on this hidden <input> by programmatically
      // dispatching an `input` event above, which causes a 'change' to then
      // fire, and be caught by the onChange handler. So we can't set the
      // `value` prop here, otherwise React will supress that change event.
      // We can, however, set a defaultValue, so that the <input> has the
      // correct initial value.
      defaultValue: currentValue.numerishValue,
    },
  };
}
