import * as React from 'react';

import { CheckedField } from '@/components/CheckedField';
import { FieldSizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';

import { styles as checkboxStyles } from './styles';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  /**
   * Sets the checked state of the Checkbox when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  checked?: boolean;
  /**
   * Sets the checked state of the Checkbox when using it as a uncontrolled
   * component
   */
  defaultChecked?: boolean;
  /** Called when the checked state changes  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A form control that allow users to choose zero to many options from a set
 * @param props {@link CheckboxProps} {@link CommonCheckedFieldProps}
 */
export function Checkbox(props: CheckboxProps & CommonCheckedFieldProps) {
  return <CheckboxBase {...props} />;
}

Checkbox.sizer = FieldSizer;

/**
 * This component is the engine of the Checkbox component. You can pass in
 * alternate styles if you want the control to look different (such as for
 * the Switch component!)
 */
export function CheckboxBase({
  // CheckedField props
  className,
  sizer,
  label,
  explainer,
  disabled,
  // styler should be in the shape of Checkbox's tailwind-variants styler
  styler = checkboxStyles,
  // Checkbox-specific props
  onBlur,
  onFocus,
  ...inputProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: CheckboxProps & CommonCheckedFieldProps & { styler?: any }) {
  const indicatorRef = React.useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  // We only want the focus style (the blue dot that appears in the thumb) to
  // trigger when the user focuses using the keyboard. When the user focuses
  // using the mouse, the blue dot is distracting, and the user knows what they
  // clicked on, so its unnecessary.
  //
  // The combination of the <label> with a child <input type="checkbox"> makes
  // this tricky, since clicking on the wrapping label will trigger a focus
  // on the checkbox. But keyboard-focusing on the label won't focus the input.
  // Instead of just using the focus/blur state on the input itself, we need
  // some extra state variables that represents a more combined state between
  // the label & input.

  function handleRootMouseDown(event: React.MouseEvent<HTMLLabelElement>) {
    event.preventDefault();
    if (!isClicked) {
      setIsClicked(true);
    }
  }

  function handleInputFocus(event: React.FocusEvent<HTMLInputElement>) {
    onFocus?.(event);
    if (!isFocused) {
      setIsFocused(true);
    }
  }

  function handleInputBlur(event: React.FocusEvent<HTMLInputElement>) {
    onBlur?.(event);
    if (isFocused) {
      setIsFocused(false);
    }
    if (isClicked) {
      setIsClicked(false);
    }
  }

  const s = styler({
    sizer,
    isDisabled: !!disabled,
    isFocused: isFocused && !disabled && !isClicked,
  });

  return (
    <CheckedField
      className={clsw(s.root(), className)}
      label={label}
      explainer={explainer}
      controlVisualRef={indicatorRef}
      sizer={sizer}
      disabled={disabled}
      onMouseDown={handleRootMouseDown}
    >
      <input
        type="checkbox"
        className={s.input()}
        disabled={disabled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...inputProps}
      />
      <div ref={indicatorRef} className={s.indicator()} />
    </CheckedField>
  );
}
