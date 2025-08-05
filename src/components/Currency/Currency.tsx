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
import { useCurrencyKeyDownConstrictor } from './useCurrencyKeyDownConstrictor';
import { useCurrencyValueStore } from './useCurrencyValueStore';
import { getDeformattedSelection } from './utils';

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
  decimalPlaces = 2,
  allowNegatives = false,
  thousandsSeparator = ',',
  ref: controlledInputRef,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
  onMouseDown,
  onMouseUp,
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

  // The "focus format" has no thousands separators & is used while the user
  // is focused on the field. Having thousands separators added/removed while
  // you’re typing is janky, so just remove that formatting while focused.
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [isFocusFormatted, setIsFocusFormatted] = React.useState(false);
  const focusFormat = createFormat(
    decimalPoint,
    decimalPlaces,
    '',
    allowNegatives,
  );
  const blurFormat = createFormat(
    decimalPoint,
    decimalPlaces,
    thousandsSeparator,
    allowNegatives,
  );

  const [previousSelection, setPreviousSelection] = React.useState({
    start: 0,
    end: 0,
  });

  const {
    currentValue,
    previousValue,
    updateFromWorkingValue,
    updateFromIncrement,
  } = useCurrencyValueStore({
    controlledValue,
    defaultValue,
    format: isFocusFormatted ? focusFormat : blurFormat,
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
      currentValue.numerishValue !== previousValue?.numerishValue &&
      currentValue.source !== 'controlledValue' &&
      currentValue.source !== 'initialValue'
    ) {
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        'value',
      ) as PropertyDescriptor;
      const setValue = descriptor.set;
      if (setValue) {
        const event = new Event('input', { bubbles: true });
        setValue.call(internalInputRef.current, currentValue.numerishValue);
        internalInputRef.current.dispatchEvent(event);
      }
    }
  }, [
    currentValue.numerishValue,
    previousValue?.numerishValue,
    currentValue.source,
  ]);

  const keyDownConstrictor = useCurrencyKeyDownConstrictor({
    allowNegatives,
    decimalPlaces,
    decimalPoint,
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

    setPreviousSelection({
      start: workingInputRef.current?.selectionStart || 0,
      end: workingInputRef.current?.selectionEnd || 0,
    });

    onKeyDown?.(event);
  }

  // In certain situations, we need to programmatically install the updated
  // "workingValue" into the working <input>:
  // - immediately after we first mount the component
  // - when the user focuses into the field, we update the format to not include
  //   a thousands separator
  // - when the user increments or decrements using the arrow keys
  React.useEffect(() => {
    if (
      workingInputRef.current &&
      workingInputRef.current.value !== currentValue.workingValue
    ) {
      // Install into the working <input>
      workingInputRef.current.value = currentValue.workingValue;

      // If the field is focused, there are certain cases where we need to
      // tweak the cursor/selection position after updating the value, so that
      // the cursor doesn't just automatically go to the end and yank the user
      // away from what they were trying to do with the cursor
      if (previousValue && document.activeElement === workingInputRef.current) {
        // If this is due to removing the thousands separator, we need to adjust
        // the cursor position (or selection range) based on the change, so the
        // cursor is still at the same position in the number (or still has
        // the same range of the number selected)
        if (currentValue.source === 'format') {
          workingInputRef.current.setSelectionRange(
            ...getDeformattedSelection(
              previousValue,
              previousSelection.start,
              previousSelection.end,
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
          workingInputRef.current.setSelectionRange(
            previousSelection.start + digitDelta,
            previousSelection.end + digitDelta,
          );
        }
      }
    }
  }, [currentValue, previousValue, previousSelection, workingInputRef]);

  const resolvedSizer = useResolvedSizer(sizer);
  const textStyles = textStyler({ sizer: resolvedSizer, hasError: !!error });
  const currencyStyles = currencyStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    hasWorkingValue: !!currentValue.workingValue,
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
          value={currentValue.placeholderValue}
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

          Note: there is intentionally no `value` prop specified here. There is
          an effect above that updates the value on this <input> above, since
          it needs to programmatically update the cursor position as it does
          so.
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
          aria-labelledby={a11yIds.ariaLabelledBy}
          aria-describedby={a11yIds.ariaDescribedBy}
          aria-errormessage={a11yIds.ariaErrorMessage}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
          onChange={(event) => updateFromWorkingValue(event.target.value)}
          onKeyDown={handleKeyDown}
          style={{ paddingLeft: currencySymbolBounds?.width }}
          onMouseDown={(event) => {
            if (!isMouseDown) {
              setIsMouseDown(true);
            }

            onMouseDown?.(event);
          }}
          onMouseUp={(event) => {
            if (isMouseDown) {
              setIsMouseDown(false);
            }

            if (!isFocusFormatted) {
              setPreviousSelection({
                start: workingInputRef.current?.selectionStart || 0,
                end: workingInputRef.current?.selectionEnd || 0,
              });
              setIsFocusFormatted(true);
            }

            onMouseUp?.(event);
          }}
          onFocus={(event) => {
            // When the user is focusing with a mouse click, wait until the
            // mouseUp to do this, since we don't want to interrupt them if
            // they are holding the mouse to select a range
            if (!isMouseDown && !isFocusFormatted) {
              setPreviousSelection({
                start: workingInputRef.current?.selectionStart || 0,
                end: workingInputRef.current?.selectionEnd || 0,
              });
              setIsFocusFormatted(true);
            }

            onFocus?.(event);
          }}
          onBlur={(event) => {
            if (isFocusFormatted) {
              setIsFocusFormatted(false);
              setPreviousSelection({ start: 0, end: 0 });
            }
            onBlur?.(event);
          }}
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
        defaultValue={currentValue.numerishValue}
      />
    </Field>
  );
}

/**
 * A function that creates the `format` in a guaranteed-memoized way
 * (React.useMemo does not guarantee absolute memoization)
 */
const createFormat = memoize(
  (
    decimalPoint: CurrencyFormatType['decimalPoint'],
    decimalPlaces: CurrencyFormatType['minDecimalPlaces'],
    thousandsSeparator: CurrencyFormatType['thousandsSeparator'],
    allowNegatives: CurrencyFormatType['allowNegatives'],
  ) => ({
    decimalPoint,
    minDecimalPlaces: decimalPlaces,
    maxDecimalPlaces: decimalPlaces,
    thousandsSeparator,
    allowNegatives,
  }),
);
