import memoize from 'just-memoize';
import * as React from 'react';

import { Field } from '@/components/Field';
import { textStyler } from '@/components/Text/styles';
import type { CommonFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { useElementBounds } from '@/utils/useElementBounds';
import { useFieldA11yIds } from '@/utils/useFieldA11yIds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';
import { useScrollClone } from '@/utils/useScrollClone';

import { currencyStyler } from './styles';
import { CurrencyFormatProps, CurrencyFormatType } from './types';
import { useCurrencyValueStore } from './useCurrencyValueStore';

interface CurrencyInputProps
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
  /** Option to change the currency symbol shown at the front of the input */
  currencySymbol?: React.ReactNode;
}

/**
 * A form control that allows users to enter & edit a single line of text
 * @param props {@link CurrencyInputProps} + {@link CurrencyFormatProps} + {@link CommonFieldProps}
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
  decimalPoint = '.',
  minDecimalPlaces = 2,
  maxDecimalPlaces = 2,
  thousandsSeparator = ',',
  ref: controlledInputRef,
  onChange,
  onKeyDown,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <input>
  ...otherInputProps
}: CurrencyInputProps & CurrencyFormatProps & CommonFieldProps) {
  // This component needs a ref to the hidden <input> for its internal
  // mechanisms. There may also be a `ref` prop provided, such as by React Form
  // Hook for managing the field, and that may be a RefCallback or a RefObject.
  // So for internal convenience, we install a managed RefObject on the hidden
  // <input> in addition to the `ref` prop.
  const internalInputRef = React.useRef<HTMLInputElement>(null);

  const currencySymbolRef = React.useRef<HTMLDivElement>(null);
  const currencySymbolBounds = useElementBounds(currencySymbolRef);

  const [workingInputRef, placeholderInputRef] =
    useScrollClone<HTMLInputElement>();

  const { currentState, previousState, updateFromWorkingValue } =
    useCurrencyValueStore({
      controlledValue,
      defaultValue,
      format: createFormat(
        decimalPoint,
        minDecimalPlaces,
        maxDecimalPlaces,
        thousandsSeparator,
      ),
    });

  const a11yIds = useFieldA11yIds({
    label,
    hint,
    error,
    controlledId,
    controlledAriaLabelledBy,
    controlledAriaDescribedBy,
    controlledAriaErrorMessage,
  });

  React.useEffect(() => {
    if (
      internalInputRef.current &&
      currentState.numerishValue !== previousState?.numerishValue &&
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
        setValue.call(internalInputRef.current, currentState.numerishValue);
        internalInputRef.current.dispatchEvent(event);
      }
    }
  }, [
    currentState.numerishValue,
    previousState?.numerishValue,
    currentState.source,
  ]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    // Don't block when holding command/etc, since those are things like
    // "copy" / "paste", instead of character inputs.
    if (!event.metaKey) {
      if (
        !allowedKeyPressesExceptDecimalPoint.includes(event.key) &&
        event.key !== decimalPoint
      ) {
        event.preventDefault();
        return;
      }

      // Block input of a second decimal
      if (
        event.key === decimalPoint &&
        currentState.workingValue.indexOf(decimalPoint) !== -1
      ) {
        event.preventDefault();
        return;
      }
    }

    onKeyDown?.(event);
  }

  const resolvedSizer = useResolvedSizer(sizer);
  const textStyles = textStyler({ sizer: resolvedSizer, hasError: !!error });
  const currencyStyles = currencyStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    hasWorkingValue: !!currentState.workingValue,
    hasSpacingApplied: !!currencySymbolBounds,
  });

  return (
    <Field
      className={className}
      sizer={sizer}
      label={label}
      labelId={a11yIds.ariaLabelledBy}
      controlId={a11yIds.id}
      hint={hint}
      hintId={a11yIds.ariaDescribedBy}
      error={error !== true ? error : undefined}
      errorId={a11yIds.ariaErrorMessage}
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
          ref={placeholderInputRef}
          className={clsw(textStyles, currencyStyles.placeholderInput())}
          value={currentState.placeholderValue}
          onChange={() => {}} // silence no onChange w/ value warning
          disabled={disabled}
          tabIndex={-1}
          aria-hidden
          style={{ paddingLeft: currencySymbolBounds?.width }}
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
          role="spinbutton"
          {...otherInputProps}
          ref={workingInputRef}
          id={a11yIds.id}
          type="text"
          className={clsw(textStyles, currencyStyles.workingInput())}
          disabled={disabled}
          required={required}
          value={currentState.workingValue}
          aria-labelledby={a11yIds.ariaLabelledBy}
          aria-describedby={a11yIds.ariaDescribedBy}
          aria-errormessage={a11yIds.ariaErrorMessage}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
          onChange={(event) => updateFromWorkingValue(event.target.value)}
          onKeyDown={handleKeyDown}
          style={{ paddingLeft: currencySymbolBounds?.width }}
        />

        <div
          ref={currencySymbolRef}
          className={currencyStyles.currencySymbol()}
        >
          {currencySymbol}
        </div>
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
        onChange={onChange}
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
        defaultValue={currentState.numerishValue}
      />
    </Field>
  );
}

const allowedKeyPressesExceptDecimalPoint = Object.freeze([
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
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowRight',
  'Tab',
  'Enter',
  'Backspace',
  'Delete',
]);

/**
 * A function that creates the `format` in a guaranteed-memoized way
 * (React.useMemo does not guarantee absolute memoization)
 */
const createFormat = memoize(
  (
    decimalPoint: CurrencyFormatType['decimalPoint'],
    minDecimalPlaces: CurrencyFormatType['minDecimalPlaces'],
    maxDecimalPlaces: CurrencyFormatType['maxDecimalPlaces'],
    thousandsSeparator: CurrencyFormatType['thousandsSeparator'],
  ) => ({
    decimalPoint,
    minDecimalPlaces,
    maxDecimalPlaces,
    thousandsSeparator,
  }),
);
