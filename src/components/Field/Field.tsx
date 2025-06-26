import * as React from 'react';

import { FieldSizer } from '@/constants';

import { styles } from './styles';

export interface FieldProps extends React.ComponentProps<'div'> {
  /** The content of the form-control section of the Field */
  children?: React.ReactNode;
  /** Optionally add utility classes */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
  /** The main label to show above the form control, naming the field */
  label?: React.ReactNode;
  /** For accessibility purposes: an id to set on the label element */
  labelId?: string;
  /**
   * A more detailed label explaining the purpose of the field, placed
   * directly the main label
   */
  explainer?: React.ReactNode;
  /**
   * The id of the control, for accessibility purposes. If there are multiple
   * controls in the Field, you can omit `controlId` and instead set
   * `aria-label` or `aria-labelledby` on the individual controls.
   */
  controlId?: string;
  /**
   * A hint about what kind of value the control accepts, such as a phone
   * number format
   */
  hint?: React.ReactNode;
  /** For accessibility purposes: an id to set on the hint element */
  hintId?: string;
  /** Error message to show along with the field */
  error?: React.ReactNode;
  /** For accessibility purposes: an id to set on the error message element */
  errorId?: string;
  /** Set to `true` when the field is disabled */
  disabled?: boolean;
  /** When `true`, adds an asterisk to the label */
  required?: boolean;
}

/**
 * Field wraps one form control in a standard field layout (label, hint, error
 * message, etc).
 */
export function Field({
  children: formControl,
  controlId,
  explainer,
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
}: FieldProps) {
  const s = styles({ sizer });

  return (
    <div {...otherDivProps}>
      {(label || explainer) && (
        <label id={labelId} className={s.heading()} htmlFor={controlId}>
          {label && (
            <div className={s.label()}>
              {label}
              {required && (
                <abbr className={s.requiredAsterisk()} title="required">
                  *
                </abbr>
              )}
            </div>
          )}
          {explainer && <div className={s.explainer()}>{explainer}</div>}
        </label>
      )}

      <div>{formControl}</div>

      {error && (
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
