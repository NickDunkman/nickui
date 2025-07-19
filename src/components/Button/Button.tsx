import keycode from 'keycode';
import * as React from 'react';

import { Sizer } from '@/constants';
import { clsw } from '@/utils/clsw';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { ButtonFlavor } from './constants';
import { buttonStyler } from './styles';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** The inner content shown in the Button */
  children?: React.ReactNode;
  /** Optionally add utility classes */
  className?: string;
  /** Prevents the user from interacting with the Button */
  disabled?: boolean;
  /** Called when Button is pressed */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Controls the behavior of the button */
  type?: 'button' | 'reset' | 'submit';
  /** Changes the size of the button ("sm", "base", "lg") */
  sizer?: Sizer | Sizer[];
  /** Changes the color of the button ("primary", "secondary", "danger") */
  flavor?: ButtonFlavor;
}

/**
 * Buttons allow the user to trigger an action, such as submitting a form
 * @param props {@link ButtonProps}
 */
export function Button({
  className,
  type = 'button',
  disabled = false,
  sizer,
  flavor,
  onTouchStart,
  onTouchEnd,
  onTouchCancel,
  onMouseDown,
  onKeyDown,
  onKeyUp,
  onFocus,
  onBlur,
  ...buttonHTMLProps
}: ButtonProps) {
  const [isMouseFocused, setIsMouseFocused] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isTouched, setIsTouched] = React.useState(false);
  const [isKeyboardActivated, setIsKeyboardActivated] = React.useState(false);

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = buttonStyler({
    sizer: resolvedSizer,
    flavor,
    isDisabled: disabled,
    isTouched: !disabled && isTouched,
    isKeyboardFocused: !disabled && isFocused && !isMouseFocused && !isTouched,
    isKeyboardActivated: !disabled && isKeyboardActivated,
  });

  return (
    <button
      {...buttonHTMLProps}
      className={clsw(styles, className)}
      disabled={disabled}
      type={type}
      onBlur={(event) => {
        if (isMouseFocused) {
          setIsMouseFocused(false);
        }
        if (isFocused) {
          setIsFocused(false);
        }
        onBlur?.(event);
      }}
      onFocus={(event) => {
        if (!isFocused) {
          setIsFocused(true);
        }
        onFocus?.(event);
      }}
      onKeyDown={(event) => {
        console.log(keycode(event.nativeEvent));
        if (!isKeyboardActivated) {
          if (
            keycode(event.nativeEvent) === 'enter' ||
            event.nativeEvent.key === 'Enter' ||
            keycode(event.nativeEvent) === 'space' ||
            event.nativeEvent.key === ' '
          ) {
            setIsKeyboardActivated(true);
          }
        }
        onKeyDown?.(event);
      }}
      onKeyUp={(event) => {
        if (isKeyboardActivated) {
          setIsKeyboardActivated(false);
        }
        onKeyUp?.(event);
      }}
      onMouseDown={(event) => {
        if (!isMouseFocused) {
          setIsMouseFocused(true);
        }
        onMouseDown?.(event);
      }}
      onTouchStart={(event) => {
        if (!isTouched) {
          setIsTouched(true);
        }
        onTouchStart?.(event);
      }}
      onTouchEnd={(event) => {
        if (isTouched) {
          setIsTouched(false);
        }
        onTouchEnd?.(event);
      }}
      onTouchCancel={(event) => {
        if (isTouched) {
          setIsTouched(false);
        }
        onTouchCancel?.(event);
      }}
    />
  );
}

Button.flavor = ButtonFlavor;
Button.sizer = Sizer;
