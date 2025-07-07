import * as React from 'react';

import { FieldSizer } from '@/constants';
import { CommonFieldProps } from '@/types';

import { styles } from './styles';

export interface FieldProps extends React.ComponentProps<'div'> {
  /** The content of the form-control section of the Field */
  children?: React.ReactNode;
  /** For accessibility purposes: an id to set on the label element */
  labelId?: string;
  /**
   * The id of the control, for accessibility purposes. If there are multiple
   * controls in the Field, you can omit `controlId` and instead set
   * `aria-label` or `aria-labelledby` on the individual controls.
   */
  controlId?: string;
  /** For accessibility purposes: an id to set on the hint element */
  hintId?: string;
  /** For accessibility purposes: an id to set on the error message element */
  errorId?: string;
}

/**
 * Field wraps one form control in a standard field layout (label, hint, error
 * message, etc).
 * @props {@link FieldProps} {@link CommonFieldProps}
 */
export function Field({
  children: formControl,
  controlId,
  error,
  errorId,
  hint,
  hintId,
  label,
  labelId,
  sizer,
  disabled: _disabled,
  required = false,
  ...otherDivProps
}: FieldProps & CommonFieldProps) {
  const s = styles({ sizer });

  return (
    <div {...otherDivProps}>
      {label && (
        <label id={labelId} className={s.heading()} htmlFor={controlId}>
          <div className={s.label()}>
            {label}
            {required && (
              <abbr className={s.requiredAsterisk()} title="required">
                *
              </abbr>
            )}
          </div>
        </label>
      )}

      <div>{formControl}</div>

      {error && error !== true && (
        <div id={errorId} className={s.error()} aria-live="assertive">
          {error}
        </div>
      )}

      {hint && (
        <div id={hintId} className={s.hint()}>
          {hint}
        </div>
      )}
    </div>
  );
}

Field.sizer = FieldSizer;
