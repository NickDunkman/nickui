import * as React from 'react';

import { CheckedFieldableFormControlProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { useCheckedFieldControlA11yProps } from '@/utils/fieldA11y';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { CheckedField } from '../CheckedField';

/**
 * This component is the engine of the form controls that use a checkable
 * input with a custom indicator. You can pass in alternate styles if you want
 * the control to look different (such as for the Radio or Switch component!)
 */
export function CheckableFormControl({
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
  'aria-label': controlledAriaLabel,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'data-nickui-component': dataNickUIComponent,
  ...inputProps
}: CheckedFieldableFormControlProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styler?: any;
  type: 'checkbox' | 'radio';
  'data-nickui-component'?: string;
}) {
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

  const a11yProps = useCheckedFieldControlA11yProps({
    label,
    hint,
    controlledAriaLabel,
    controlledAriaLabelledBy,
    controlledAriaDescribedBy,
  });

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = styler({
    sizer: resolvedSizer,
    isDisabled: !!disabled,
    isKeyboardFocused: isFocused && !disabled && !isMouseFocused,
  });

  return (
    <CheckedField
      {...a11yProps.checkedField}
      className={clsw(styles.root(), className)}
      label={label}
      hint={hint}
      sizer={sizer}
      disabled={disabled}
      onMouseDown={handleRootMouseDown}
      data-nickui-component={dataNickUIComponent}
    >
      <input
        {...inputProps}
        {...a11yProps.formControl}
        type={type}
        className={styles.input()}
        disabled={disabled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <div
        className={styles.indicator()}
        data-testid="indicator"
        // bg-position conflicts with bg-size in tailwind for some reason
        style={{ backgroundPosition: '50% 60%' }}
      />
    </CheckedField>
  );
}
