import * as React from 'react';

import { Field } from '@/components/Field';
import { textStyler } from '@/components/Text/styles';
import { clsw } from '@/utils/clsw';
import { useFieldControlA11yProps } from '@/utils/fieldA11y';
import { randomId } from '@/utils/randomId';
import { useElementBounds } from '@/utils/useElementBounds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';
import { useScrollClone } from '@/utils/useScrollClone';

import { moneyStyler } from './styles';
import { MoneyProps } from './types';
import { useValueElementsProps } from './useValueElementsProps';

/**
 * A form control that allows users to enter a monetary amount
 * @param props {@link MoneyProps}
 */
export function Money(props: MoneyProps) {
  const a11yProps = useFieldControlA11yProps({
    label: props.label,
    hint: props.hint,
    error: props.error,
    controlledId: props.id,
    controlledAriaLabel: props['aria-label'],
    controlledAriaLabelledBy: props['aria-labelledby'],
    controlledAriaDescribedBy: props['aria-describedby'],
    controlledAriaErrorMessage: props['aria-errormessage'],
    controlledAriaInvalid: props['aria-invalid'],
  });

  // Props for all the elements that depend on the value state. The value state
  // for Money is very complex due to currency formatting, and is managed within
  // this hook. The props returned here get spread onto the elements in the
  // JSX below.
  const valueElementsProps = useValueElementsProps(props);

  const currencySymbolRef = React.useRef<HTMLDivElement>(null);
  const currencySymbolBounds = useElementBounds(currencySymbolRef);
  const [currencySymbolId] = React.useState(randomId());

  // As the working <input> is scrolled, the placeholder <input> should match,
  // so that the placeholder value stays directly in line with the working value
  useScrollClone(
    valueElementsProps.workingInput.ref,
    valueElementsProps.placeholderInput.ref,
  );

  // Styles for <Money> are built on top of those from the <Text> styler.
  // The `isInitialized` variant keeps all the text within the inputs invisible
  // until the currency symbol spacing has been applied, so that the text
  // doesn't do an unslightly visible jump to the right immediately after mount.
  const resolvedSizer = useResolvedSizer(props.sizer);
  const textStyles = textStyler({
    sizer: resolvedSizer,
    hasError: !!props.error,
  });
  const moneyStyles = moneyStyler({
    sizer: resolvedSizer,
    isInitialized: !!currencySymbolBounds,
    isSpread: !!props.docsMeta?.spread,
  });

  // Add the currency symbol to the `aria-labelledby` prop on the working
  // <input> so that a screen reader will read out what currency the field
  // is in. For example, if the label is "Cost" and the currencySymbol is "$",
  // the accessible name for the working <input> should be "Cost (in $)", which
  // reads as "Cost (in dollars)".
  //
  // However, we don't want to do this when the parent is specifying
  // props.aria-label instead of props.label, since creating a aria-labelledby
  // just for the currency symbol will cause the screen reader to ignore
  // the props.aria-label. In this situation, we just rely on the parent to
  // properly label the field.
  const workingInputLabelledBy =
    props['aria-label'] && !a11yProps.formControl['aria-labelledby']
      ? undefined
      : `${a11yProps.formControl['aria-labelledby'] || ''} ${currencySymbolId}`;

  return (
    <Field
      {...a11yProps.field}
      className={props.className}
      sizer={props.sizer}
      label={props.label}
      hint={props.hint}
      error={props.error !== true ? props.error : undefined}
      required={props.required}
      data-nickui-component="Money"
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
          data-testid="money-placeholder-input"
          {...valueElementsProps.placeholderInput}
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
          {...a11yProps.formControl}
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
          aria-labelledby={workingInputLabelledBy}
          disabled={props.disabled}
          required={props.required}
          className={clsw(textStyles, moneyStyles.workingInput())}
          style={{ paddingLeft: currencySymbolBounds?.width }}
          // This non-empty placeholder allows the currency symbol to adjust
          // its style based on whether its peer has a value (when the
          // placeholder isn't used)
          placeholder=" "
          {...valueElementsProps.workingInput}
        />

        <div
          ref={currencySymbolRef}
          id={currencySymbolId}
          className={moneyStyles.currencySymbol()}
          data-testid="currency-symbol"
          title={`(in ${props.currencySymbol})`}
          aria-hidden
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
        name={props.name}
        className={moneyStyles.formInput()}
        tabIndex={-1}
        aria-hidden
        {...valueElementsProps.formInput}
      />
    </Field>
  );
}
