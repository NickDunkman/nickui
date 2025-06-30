import * as React from 'react';

import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';

import { styles } from './styles';

interface SwitchProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  /** Adds a label to the right of the control */
  children?: React.ReactNode;
  /** Add utility classes */
  className?: string;
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
  /** Prevents the user from interacting with the Checkbox */
  disabled?: boolean;
  /** Called when the checked state changes  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
}

/**
 * A variation of the Checkbox component that has a more explict-feeling "off"
 * state. Whereas a group of co-located Checkbox fields feels more like multiple
 * options for one field, a group of Switch fields feels more like discrete fields
 * under a common category.
 * @props {@link SwitchProps}
 */
export function Switch({
  children,
  className,
  onFocus,
  onBlur,
  sizer,
  disabled,
  ...inputProps
}: SwitchProps) {
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

  const s = styles({
    sizer,
    isDisabled: !!disabled,
    isFocused: isFocused && !disabled && !isClicked,
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <label
      className={clsw(s.root(), className)}
      onMouseDown={handleRootMouseDown}
    >
      <input
        {...inputProps}
        className={s.input()}
        type="checkbox"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        disabled={disabled}
      />
      <div className={s.indicator()} />
      {/*
        This empty element exists to create an extra flex-gap between the
        absolutely-positioned indicator & the label. It contains a zero-width
        character so that it doesn’t affect vertical alignment, such as when
        the Checkbox is inside a `flex items-baseline` parent.
      */}
      <span>&#8203;</span>
      {children && <span className={s.label()}>{children}</span>}
    </label>
  );
}

Switch.sizer = FieldSizer;
