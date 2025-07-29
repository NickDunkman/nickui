import keycode from 'keycode';
import * as React from 'react';

import { FlavorType, SizerType } from '@/types';
import { clsw } from '@/utils/clsw';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

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
  sizer?: SizerType | SizerType[];
  /**
   * Changes the color of the button ("neutral", "positive", "caution",
   * "negative")
   */
  flavor?: FlavorType;
  /** Set to `true` to show the secondary style of the flavor */
  secondary?: boolean;
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
  secondary = false,
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
  const [isKeyboardActivated, setIsKeyboardActivated] = React.useState(false);
  const [isTouchActivated, setIsTouchActivated] = React.useState(false);

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = buttonStyler({
    sizer: resolvedSizer,
    flavor,
    isSecondary: secondary,
    isDisabled: disabled,
    isKeyboardFocused:
      !disabled && isFocused && !isMouseFocused && !isTouchActivated,
    isKeyboardActivated: !disabled && isKeyboardActivated,
    isTouchActivated: !disabled && isTouchActivated,
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
        if (!isTouchActivated) {
          setIsTouchActivated(true);
        }
        onTouchStart?.(event);
      }}
      onTouchEnd={(event) => {
        if (isTouchActivated) {
          setIsTouchActivated(false);
        }
        onTouchEnd?.(event);
      }}
      onTouchCancel={(event) => {
        if (isTouchActivated) {
          setIsTouchActivated(false);
        }
        onTouchCancel?.(event);
      }}
      data-nickui-sizer={Array.isArray(sizer) ? sizer.join(',') : sizer}
      data-nickui-resolved-sizer={resolvedSizer}
    />
  );
}
