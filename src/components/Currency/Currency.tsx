import * as React from 'react';

import { Field } from '@/components/Field';
import { textStyler } from '@/components/Text/styles';
import type { CommonFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { currencyStyler } from './styles';
import { useCurrencyValueStore } from './useCurrencyValueStore';

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
  currencySymbol?: string;
}

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
  currencySymbol = '$',
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

  const {
    currentState,
    previousState,
    updateFromControlledValue,
    updateFromWorkingValue,
  } = useCurrencyValueStore(controlledValue, defaultValue);

  React.useEffect(() => {
    if (controlledValue !== currentState.controlledValue) {
      updateFromControlledValue(controlledValue);
    }
  }, [
    currentState.controlledValue,
    updateFromControlledValue,
    controlledValue,
  ]);

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

  React.useEffect(() => {
    if (
      internalInputRef.current &&
      currentState.value !== previousState?.value &&
      currentState.source !== 'controlledValue' &&
      currentState.source !== 'initialValue'
    ) {
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        'value',
      ) as PropertyDescriptor;
      const setValue = descriptor.set;
      if (setValue) {
        const event = new Event('input', { bubbles: true });
        setValue.call(internalInputRef.current, currentState.value);
        internalInputRef.current.dispatchEvent(event);
      }
    }
  }, [currentState.value, previousState?.value, currentState.source]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    // Don't block when holding command/etc, since those are things like
    // "copy" / "paste", instead of character inputs.
    if (!event.metaKey) {
      if (!allowedKeyPresses.includes(event.key)) {
        event.preventDefault();
      }

      // Block input of a second decimal
      if (event.key === '.' && currentState.workingValue.indexOf('.') !== -1) {
        event.preventDefault();
      }
    }
  }

  const resolvedSizer = useResolvedSizer(sizer);
  const textStyles = textStyler({ sizer: resolvedSizer, hasError: !!error });
  const currencyStyles = currencyStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    hasWorkingValue: !!currentState.workingValue,
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
      <div className={currencyStyles.visibleInputsContainer()}>
        {/*
          This is the "placholder" <input>. It's positioned directly underneath
          the working <input>. It has the same value in a muter color, except
          it always abides the min/max decimal places. So if there are missing
          decimal places in the working value, they'll be hinted in this
          <input>.
        */}
        <input
          className={clsw(textStyles, currencyStyles.placeholderInput())}
          placeholder={currentState.placeholderValue}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden
        />

        {/*
          This is the "working" <input>. It is what the user actually types
          into, and is filled with {state.workingValue}, which auto-formats
          with thousands-separators (,) as you type. It also allows there to be
          a trailing decimal prefix (.), since that is a keystroke that is made
          before typing the decimal places. It does not necessarily abide
          the min/max decimal places -- those are shown in the placeholder
          <input> behind until the user enters them manually.
        */}
        <input
          id={id}
          role="spinbutton"
          type="text"
          className={clsw(textStyles, currencyStyles.interactiveInput())}
          disabled={disabled}
          required={required}
          value={currentState.workingValue}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
          onChange={(event) => updateFromWorkingValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className={currencyStyles.currencySymbol()}>{currencySymbol}</div>
      </div>

      {/*
        This is the hidden <input> which controls the component's actual
        non-formatted value -- when we emit change events to the parent via
        the onChange handler, we want the value on those events to be
        non-formatted, so they can be easily parsed as numbers. It's filled
        with {valueState.value}, which has no thousands separators, but does
        abide by the min/max decimal places, so that the parent component
        can get properly-decimaled currency number values as it desires.

        As the user interacts with the working <input> above, updates to the
        value are passed to this hidden <input> via programmatically-initiated
        'input' events, which React picks up on and then fires an onChange
        event.
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
        defaultValue={currentState.value}
      />
    </Field>
  );
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
