import * as React from 'react';

import { Field } from '@/components/Field';
import { textStyler } from '@/components/Text/styles';
import { PrettyPrint } from '@/docs/PrettyPrint';
import type { CommonFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { currencyStyler } from './styles';
import { useCurrencyValueState } from './useCurrencyState';

interface CurrencyProps
  extends Omit<React.ComponentProps<'input'>, 'type' | 'placeholder'> {
  /** Called when the value of the Text changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Sets the value of the Text when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string;
  /** Sets the value of the Text when using it as an uncontrolled component */
  defaultValue?: string;
}

const allowedKeyPresses = Object.freeze([
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowRight',
  'Tab',
  'Enter',
  'Backspace',
]);

/**
 * A form control that allows users to enter & edit a single line of text
 * @param props {@link CurrencyProps} + {@link CommonFieldProps}
 */
export function Currency({
  // Field props
  className,
  sizer,
  label,
  hint,
  error,
  required,
  disabled,
  // Text-specific props
  id: controlledId,
  value: controlledValue,
  defaultValue,
  ref: controlledInputRef,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <input>
  ...otherInputProps
}: CurrencyProps & CommonFieldProps) {
  // This component needs a ref to the hidden <input> for its internal
  // mechanisms. There may also be a `ref` prop provided, such as by React Form
  // Hook for managing the field, and that may be a RefCallback or a RefObject.
  // So for internal convenience, we install a managed RefObject on the hidden
  // <input> in addition to the `ref` prop.
  const internalInputRef = React.useRef<HTMLInputElement>(null);

  const valueState = useCurrencyValueState(
    controlledValue !== undefined ? controlledValue : defaultValue,
  );

  const { updateFromValue: updateStateFromValue } = valueState;
  React.useEffect(() => {
    updateStateFromValue(controlledValue);
  }, [updateStateFromValue, controlledValue]);

  const [uncontrolledId] = React.useState(randomId());
  const id = controlledId || (label ? uncontrolledId : undefined);

  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const ariaDescribedBy =
    controlledAriaDescribedBy ||
    (hint ? uncontrolledAriaDescribedBy : undefined);

  const [uncontrolledAriaErrorMessage] = React.useState(randomId());
  const ariaErrorMessage =
    controlledAriaErrorMessage ||
    (error && error !== true ? uncontrolledAriaErrorMessage : undefined);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    valueState.updateFromWorkingValue(event.target.value);
  }

  React.useEffect(() => {
    if (
      internalInputRef.current &&
      valueState.value !== valueState.previousValue &&
      valueState.previousValueUpdateSource === 'workingValue'
    ) {
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        'value',
      ) as PropertyDescriptor;
      const setValue = descriptor.set;
      if (setValue) {
        const event = new Event('input', { bubbles: true });
        setValue.call(internalInputRef.current, state.value);
        internalInputRef.current.dispatchEvent(event);
      }
    }
  }, [
    valueState.value,
    valueState.previousValue,
    valueState.previousValueUpdateSource,
  ]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    // Don't block when holding command/etc, since those are things like
    // "copy" / "paste", instead of character inputs.
    if (!event.metaKey) {
      if (!allowedKeyPresses.includes(event.key)) {
        event.preventDefault();
      }

      // Block input of a second decimal
      if (
        event.key === '.' &&
        valueState.workingFormattedValue.indexOf('.') !== -1
      ) {
        event.preventDefault();
      }
    }
  }

  const resolvedSizer = useResolvedSizer(sizer);
  const textStyles = textStyler({ sizer: resolvedSizer, hasError: !!error });
  const currencyStyles = currencyStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    hasValue: !!valueState.workingFormattedValue,
  });

  return (
    <Field
      className={className}
      sizer={sizer}
      label={label}
      controlId={id}
      hint={hint}
      hintId={ariaDescribedBy}
      error={error !== true ? error : undefined}
      errorId={ariaErrorMessage}
      disabled={disabled}
      required={required}
    >
      <PrettyPrint
        className="mb-2"
        data={{
          defaultValue,
          controlledValue,
          value: valueState.value,
          numericValue: valueState.numericValue,
          workingFormattedValue: valueState.workingFormattedValue,
          placeholderFormattedValue: valueState.placeholderFormattedValue,
        }}
      />
      <div className={currencyStyles.visibleInputsContainer()}>
        {/*
          This <input> is not interactive; the user cannot focus it. It's styled
          the same as a regular <Text> & placed behind the interactive <input>
          directly below. It always includes the desired number of decimal
          places, and uses the `placeholder` prop instead of the `value` prop.
          The effect this has is that when the current value does not include
          the maximum desired decimal places, the remainder appear as a
          placeholder to the right of the current value.
        */}
        <input
          className={clsw(textStyles, currencyStyles.placeholderInput())}
          placeholder={valueState.placeholderFormattedValue}
          tabIndex={-1}
          aria-hidden
        />

        {/*
         This <input> is what the user actually interacts with. It has a
         transparent background so that the user can see the placholder <input>
         above. It's layered directly over that <input>, so that the characters
         that are actually included in the value appear as the regular font
         color.
        */}
        <input
          id={id}
          role="spinbutton"
          type="text"
          className={clsw(textStyles, currencyStyles.interactiveInput())}
          disabled={disabled}
          required={required}
          placeholder="0.00"
          value={valueState.workingFormattedValue}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <div className={currencyStyles.currencySymbol()}>$</div>
      </div>

      {/*
        This hidden <input> is used to actually drive the component's value,
        such as to drive the onChange callback. It has a purely numeric value,
        whereas the visible/interactive <inputs> above can have commas, for
        example. This enables logic such as: don't trigger the onChange
        callback if we're just adding a comma.
      */}
      <input
        {...otherInputProps}
        ref={(el) => {
          internalInputRef.current = el;

          if (typeof controlledInputRef === 'function') {
            controlledInputRef(el);
          } else if (controlledInputRef) {
            controlledInputRef.current = el;
          }
        }}
        type="number"
        className={currencyStyles.hiddenInput()}
        aria-hidden
        // We set the value on this hidden <input> by programmatically
        // dispatching an `input` event above, which causes a 'change' to then
        // fire, and be caught by the onChange handler. So we can't set the
        // `value` prop here, otherwise React will supress that change event.
        // We can, however, set a defaultValue, so that the <input> has the
        // initial value.
        defaultValue={valueState.value}
      />
    </Field>
  );
}
