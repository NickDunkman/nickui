import * as React from 'react';

import { CheckedField } from '@/components/CheckedField';
import { Sizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { randomId } from '@/utils/randomId';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { checkboxStyler } from './styles';

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
  return <Checkable {...props} type="checkbox" styler={checkboxStyler} />;
}

Checkbox.sizer = Sizer;

/**
 * This component is the engine of the form controls that use a checkable
 * input with a custom indicator. You can pass in alternate styles if you want
 * the control to look different (such as for the Radio or Switch component!)
 */
export function Checkable({
  // CheckedField props
  className,
  sizer,
  label,
  hint,
  disabled,
  // styler should be in the shape of Checkbox's tailwind-variants styler
  styler,
  // Checkable-specific props
  onBlur,
  onFocus,
  type,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  ...inputProps
}: CheckboxProps &
  CommonCheckedFieldProps &
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { styler?: any; type: 'checkbox' | 'radio' }) {
  const [isMouseFocused, setIsMouseFocused] = React.useState<boolean>(false);
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
    if (!isMouseFocused) {
      setIsMouseFocused(true);
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
    if (isMouseFocused) {
      setIsMouseFocused(false);
    }
  }

  const [uncontrolledAriaLabelledBy] = React.useState(randomId());
  const ariaLabelledBy =
    controlledAriaLabelledBy ||
    (label ? uncontrolledAriaLabelledBy : undefined);

  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const ariaDescribedBy =
    controlledAriaDescribedBy ||
    (hint ? uncontrolledAriaDescribedBy : undefined);

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = styler({
    sizer: resolvedSizer,
    isDisabled: !!disabled,
    isKeyboardFocused: isFocused && !disabled && !isMouseFocused,
  });

  const labelWithOffset =
    label || hint ? (
      <div className={styles.labelWithOffset()}>{label}</div>
    ) : null;

  return (
    <CheckedField
      className={clsw(styles.root(), className)}
      label={labelWithOffset}
      labelId={ariaLabelledBy}
      hint={hint}
      hintId={ariaDescribedBy}
      sizer={sizer}
      disabled={disabled}
      onMouseDown={handleRootMouseDown}
    >
      <input
        type={type}
        className={styles.input()}
        disabled={disabled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        {...inputProps}
      />
      <div className={styles.indicator()} data-testid="indicator" />
    </CheckedField>
  );
}
