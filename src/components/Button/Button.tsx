import * as React from 'react';

import { FieldSizer } from '@/constants';
import { clsw } from '@/utils/clsw';

import { ButtonFlavor } from './constants';
import { styles } from './styles';

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
  /** Changes the size of the button ("small", "medium", "large") */
  sizer?: FieldSizer;
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
  ...buttonHTMLProps
}: ButtonProps) {
  const s = styles({ sizer, flavor });

  return (
    <button
      {...buttonHTMLProps}
      className={clsw(s, className)}
      disabled={disabled}
      type={type}
    />
  );
}

Button.flavor = ButtonFlavor;
Button.sizer = FieldSizer;
