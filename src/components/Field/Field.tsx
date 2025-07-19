import * as React from 'react';

import { Sizer } from '@/constants';
import { CommonFieldProps } from '@/types';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { fieldStyler } from './styles';

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
  label,
  labelId,
  hint,
  hintId,
  error,
  errorId,
  sizer,
  disabled: _disabled,
  required = false,
  ...otherDivProps
}: FieldProps & CommonFieldProps) {
  const resolvedSizer = useResolvedSizer(sizer);
  const styles = fieldStyler({ sizer: resolvedSizer });

  return (
    <div
      {...otherDivProps}
      data-nickui-sizer={Array.isArray(sizer) ? sizer.join(',') : sizer}
      data-nickui-resolved-sizer={resolvedSizer}
    >
      {label && (
        <label id={labelId} className={styles.heading()} htmlFor={controlId}>
          <div className={styles.label()}>
            {label}
            {required && (
              <abbr className={styles.requiredAsterisk()} title="required">
                *
              </abbr>
            )}
          </div>
        </label>
      )}

      <div>{formControl}</div>

      {hint && (
        <div id={hintId} className={styles.hint()}>
          {hint}
        </div>
      )}

      {error && error !== true && (
        <div id={errorId} className={styles.error()} aria-live="assertive">
          {error}
        </div>
      )}
    </div>
  );
}

Field.sizer = Sizer;
