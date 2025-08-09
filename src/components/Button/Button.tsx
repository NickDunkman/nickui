import keycode from 'keycode';
import * as React from 'react';

import {
  DisableableProps,
  SecondaryFlavorableProps,
  SizerableProps,
} from '@/types';
import { clsw } from '@/utils/clsw';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { buttonStyler } from './styles';

export const ALLOWED_TYPES = ['button', 'reset', 'submit'] as const;

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    DisableableProps,
    SecondaryFlavorableProps,
    SizerableProps {
  /** The inner content shown in the Button */
  children?: React.ReactNode;
  /** Called when Button is activated */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Controls the behavior of the button */
  type?: (typeof ALLOWED_TYPES)[number];
}

/**
 * Buttons allow the user to trigger an action, such as submitting a form
 * @param props {@link ButtonProps}
 */
export function Button({
  className,
  type,
  disabled,
  sizer,
  flavor,
  secondary,
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
