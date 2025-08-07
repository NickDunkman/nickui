import * as React from 'react';

import { Field } from '@/components/Field';
import { textStyler } from '@/components/Text/styles';
import { clsw } from '@/utils/clsw';
import { useElementBounds } from '@/utils/useElementBounds';
import { useFieldA11yIds } from '@/utils/useFieldA11yIds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';
import { useScrollClone } from '@/utils/useScrollClone';

import { moneyStyler } from './styles';
import { MoneyProps } from './types';
import { useInputs } from './useInputs';

/**
 * A form control that allows users to enter a monetary amount
 * @param props {@link MoneyProps}
 */
export function Money(props: MoneyProps) {
  const a11yIds = useFieldA11yIds({
    label: props.label,
    hint: props.hint,
    error: props.error,
    controlledId: props.id,
    controlledAriaLabelledBy: props['aria-labelledby'],
    controlledAriaDescribedBy: props['aria-describedby'],
    controlledAriaErrorMessage: props['aria-errormessage'],
  });

  const { workingInput, placeholderInput, hiddenInput } = useInputs({
    ...props,
    id: a11yIds.id,
    'aria-labelledby': a11yIds.ariaLabelledBy,
    'aria-describedby': a11yIds.ariaDescribedBy,
    'aria-errormessage': a11yIds.ariaErrorMessage,
  });

  const currencySymbolRef = React.useRef<HTMLDivElement>(null);
  const currencySymbolBounds = useElementBounds(currencySymbolRef);

  // As the working <input> is scrolled, the placeholder <input> should match,
  // so that the placeholder value stays directly in line with the working value
  useScrollClone(workingInput.ref, placeholderInput.ref);

  const resolvedSizer = useResolvedSizer(props.sizer);
  const textStyles = textStyler({
    sizer: resolvedSizer,
    hasError: !!props.error,
  });
  const moneyStyles = moneyStyler({
    sizer: resolvedSizer,
    hasSpacingApplied: !!currencySymbolBounds,
  });

  return (
    <Field
      className={props.className}
      sizer={props.sizer}
      label={props.label}
      labelId={a11yIds.ariaLabelledBy}
      controlId={a11yIds.id}
      hint={props.hint}
      hintId={a11yIds.ariaDescribedBy}
      error={props.error !== true ? props.error : undefined}
      errorId={a11yIds.ariaErrorMessage}
      disabled={props.disabled}
      required={props.required}
    >
      <div className={moneyStyles.visibleInputsContainer()}>
        {/*
          This is the "placholder" <input>. It's positioned directly underneath
          the working <input>. It has the same value in a muter color, except
          it always abides the min/max decimal places. So if there are missing
          decimal places in the working value, they'll be hinted in this
          <input>.
        */}
        <input
          type="text"
          disabled={props.disabled}
          className={clsw(textStyles, moneyStyles.placeholderInput())}
          style={{ paddingLeft: currencySymbolBounds?.width }}
          tabIndex={-1}
          aria-hidden
          {...placeholderInput}
        />

        {/*
          This is the "working" <input>. It is what the user actually types
          into, which auto-formats with thousands-separators (,) as you type.
          It also allows there to be a trailing decimal prefix (.), since that
          is a keystroke that is made before typing the decimal places. It does
          not necessarily abide the min/max decimal places -- those are shown in
          the placeholder <input> behind until the user enters them manually.
        */}
        <input
          role="spinbutton"
          // Use numeric keyboard when available, unless negatives are allowed
          // (the numeric keyboard doesn’t typically have a negative sign)
          inputMode={
            props.allowNegatives
              ? 'text'
              : (props.decimalPlaces ?? 2) > 0
                ? 'decimal'
                : 'numeric'
          }
          id={a11yIds.id}
          aria-labelledby={a11yIds.ariaLabelledBy}
          aria-describedby={a11yIds.ariaDescribedBy}
          aria-errormessage={a11yIds.ariaErrorMessage}
          aria-invalid={props['aria-invalid'] ?? !!props.error}
          disabled={props.disabled}
          required={props.required}
          className={clsw(textStyles, moneyStyles.workingInput())}
          style={{ paddingLeft: currencySymbolBounds?.width }}
          // This non-empty placeholder allows the currency symbol to adjust
          // its style based on whether its peer has a value (when the
          // placeholder isn't used)
          placeholder=" "
          {...workingInput}
        />

        <div id="the-details" className="sr-only">
          lol
        </div>

        <div
          ref={currencySymbolRef}
          className={moneyStyles.currencySymbol()}
          data-testid="currency-symbol"
        >
          {props.currencySymbol === undefined ? '$' : props.currencySymbol}
        </div>
      </div>

      {/*
        This is the hidden <input> which controls the component's actual
        non-formatted value -- when we emit change events to the parent via
        the onChange handler, we want the value on those events to be
        non-formatted, so they can be easily parsed as numbers. It's filled
        with {valueState.value}, which has no thousands separators, but does
        abide by the min/max decimal places, so that the parent component
        can get properly-decimaled values as it desires.

        As the user interacts with the working <input> above, updates to the
        value are passed to this hidden <input> via programmatically-initiated
        'input' events, which React picks up on and then fires an onChange
        event.
      */}
      <input
        type="number"
        name={props.name}
        className={moneyStyles.hiddenInput()}
        tabIndex={-1}
        aria-hidden
        {...hiddenInput}
      />
    </Field>
  );
}
