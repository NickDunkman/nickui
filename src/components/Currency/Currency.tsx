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

  const [value, setValue] = React.useState(
    controlledValue !== undefined
      ? parseStringValue(controlledValue)
      : parseStringValue(defaultValue),
  );

  const [formattedValue, setFormattedValue] = React.useState(
    formatValue(value),
  );

  React.useEffect(() => {
    const newValue = parseStringValue(controlledValue);
    if (newValue !== value) {
      setValue(newValue);
      if (parseNumericValue(newValue) !== parseNumericValue(formattedValue)) {
        setFormattedValue(formatValue(newValue));
      }
    }
  }, [value, formattedValue, controlledValue]);

  const decimaledValue = formatValue(formattedValue, true);

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
    let newValue = parseStringValue(event.target.value);
    const newFormattedValue = formatValue(event.target.value);

    if (newValue !== value) {
      setValue(newValue);
    }

    if (newFormattedValue !== formattedValue) {
      setFormattedValue(newFormattedValue);
    }

    // Trigger a call to the `onChange` prop by dispatching an `input` event
    // to the hidden input, where the onChange callback is mounted. This
    // allows the callback to be called with a full SyntheticEvent from
    // an HTMLInputElement, which helps make the component compatible with
    // form libraries like React Hook Form.

    const newNumericValue = parseNumericValue(newFormattedValue);

    const shouldTriggerChange =
      // if the number is changing meaningfully, numerically
      newNumericValue !== parseNumericValue(value) ||
      // or if the user typed "0" to trigger a change from empty to zero-ish
      (newFormattedValue === '0' && !value) ||
      // or if the user typed "." to trigger a change from empty to zero-ish
      (newFormattedValue === '0.' && !value) ||
      // or the user is emptying the input, and the value wasn't already empty
      (newFormattedValue === '' && value);

    if (shouldTriggerChange) {
      if (internalInputRef.current) {
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(
          inputProto,
          'value',
        ) as PropertyDescriptor;
        const setValue = descriptor.set;
        if (setValue) {
          const event = new Event('input', { bubbles: true });
          setValue.call(
            internalInputRef.current,
            newFormattedValue === '' ? '' : newNumericValue.toString(),
          );
          internalInputRef.current.dispatchEvent(event);
        }
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    // Don't block when holding command/etc, since those are things like
    // "copy" / "paste", instead of character inputs.
    if (!event.metaKey) {
      if (!allowedKeyPresses.includes(event.key)) {
        event.preventDefault();
      }

      // Block input of a second decimal
      if (event.key === '.' && formattedValue.indexOf('.') !== -1) {
        event.preventDefault();
      }
    }
  }

  const resolvedSizer = useResolvedSizer(sizer);
  const textStyles = textStyler({ sizer: resolvedSizer, hasError: !!error });
  const currencyStyles = currencyStyler({
    sizer: resolvedSizer,
    hasError: !!error,
    hasValue: !!formattedValue,
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
          value,
          formattedValue,
          decimaledValue,
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
          placeholder={decimaledValue}
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
          value={formattedValue}
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
        defaultValue={formattedValue}
      />
    </Field>
  );
}

function parseStringValue(
  rawValue: string | number | undefined,
  {
    keepTrailingFractionSeparator = false,
  }: {
    keepTrailingFractionSeparator?: boolean;
  } = {},
) {
  const stringValue = rawValue?.toString().replace(/[^0-9.-]/g, '') || '';

  // Reject if there is a negative sign not at the front
  if (stringValue.indexOf('-') > 0) {
    return '';
  }

  // Reject if there are more than one decimal points
  if (stringHasMultipleSubstring(stringValue, '.')) {
    return '';
  }

  // Reject if there are more than one negative signs
  if (stringHasMultipleSubstring(stringValue, '-')) {
    return '';
  }

  // Pad with a zero when the first character is the fractional separator
  if (stringValue[0] === '.') {
    return `0${stringValue}`;
  }

  // Drop the fractional separator when it's the last character
  if (
    !keepTrailingFractionSeparator &&
    stringValue[stringValue.length - 1] === '.'
  ) {
    return stringValue.slice(0, -1);
  }

  return stringValue;
}

function parseNumericValue(rawValue: string | number | undefined) {
  return Number(parseStringValue(rawValue)) || 0;
}

function formatValue(
  rawValue: string | number | undefined,
  forceFullDecimal: boolean = false,
) {
  const stringValue = parseStringValue(rawValue, {
    keepTrailingFractionSeparator: true,
  });

  if (stringValue === '') {
    return '';
  }

  const [wholePart, decimalPart] = stringValue.split('.');

  // Chunk the whole part into thousands places. Doing it this way instead of
  // Number.toLocaleString() so that it works even with very large numbers.
  const chunkSize = 3;
  const numChunks = Math.ceil(wholePart.length / chunkSize);
  const firstChunkSize = wholePart.length % chunkSize || chunkSize;
  const chunks = [wholePart.substring(0, firstChunkSize)];
  for (var i = 0; i < numChunks - 1; i++) {
    chunks.push(
      wholePart.substring(
        firstChunkSize + i * chunkSize,
        firstChunkSize + (i + 1) * chunkSize,
      ),
    );
  }
  const chunkedWholePart = chunks.join(',');

  if (forceFullDecimal) {
    return `${chunkedWholePart}.${(decimalPart || '').padEnd(2, '0')}`;
  } else if (decimalPart !== undefined) {
    return `${chunkedWholePart}.${decimalPart}`;
  } else {
    return chunkedWholePart;
  }
}

function stringHasMultipleSubstring(str: string, substr: string) {
  const firstOccurenceIndex = str.indexOf(substr);

  if (firstOccurenceIndex === -1) {
    return false;
  }

  const secondOccurrenceIndex = str.indexOf(substr, firstOccurenceIndex + 1);

  return secondOccurrenceIndex !== -1;
}
