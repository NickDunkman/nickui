import * as React from 'react';

import { FieldSizer } from '@/constants';

import { styles } from './styles';

export interface FieldLayoutProps extends React.ComponentProps<'div'> {
  /** The content of the form-control section of the FieldLayout layout */
  children?: React.ReactNode;
  /** Optionally add utility classes */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
  /** The main label to show above the form control, naming the field */
  label?: React.ReactNode;
  /**
   * A more detailed label explaining the purpose of the field, placed
   * directly the main label
   */
  explainer?: React.ReactNode;
  /**
   * The id of the control, for accessibility purposes. If there are multiple
   * controls in the FieldLayout, you can omit `controlId` and instead set
   * `aria-label` or `aria-labelledby` on the individual controls.
   */
  controlId?: string;
  /**
   * A hint about what kind of value the control accepts, such as a phone
   * number format
   */
  hint?: React.ReactNode;
  /**
   * For accessibility purposes: an id to set on the hint element. The same
   * string should be set on the `aria-describedby` attribute on the form
   * control, like:
   *
   * ```
   * <FieldLayout
   *   hint="A hint"
   *   hintId="name-hint"
   * >
   *   <input aria-describedby="name-hint" />
   * </FieldLayout>
   * ```
   */
  hintId?: string;
  /**
   * Error message to show along with the field, or just `true` to trigger the
   * error style without showing an error message.
   */
  error?: boolean | React.ReactNode;
  /**
   * For accessibility purposes: an id to set on the error message element. The
   * same string should be set on the `aria-errormessage` attribute on the form
   * control, like:
   *
   * ```
   * <FieldLayout
   *   error="Wrong format!"
   *   errorId="name-error"
   * >
   *   <input aria-errormessage="name-error" />
   * </FieldLayout>
   * ```
   */
  errorId?: string;
  /** When `true`, adds an asterisk to the label */
  required?: boolean;
}

/**
 * Wraps a form control in a standard form field layout (label, hint,
 * error message, etc).
 */
export function FieldLayout({
  children,
  controlId,
  explainer,
  error,
  errorId,
  hint,
  hintId,
  label,
  sizer = FieldSizer.small,
  required = false,
  ...otherDivProps
}: FieldLayoutProps) {
  const s = styles({ sizer });

  return (
    <div {...otherDivProps}>
      {/* HEADING */}
      {(label || explainer) && (
        <label htmlFor={controlId} className={s.heading()}>
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

      {/* FORM CONTROL */}
      <div>{children}</div>

      {/* ERROR MESSAGE */}
      {error && error !== true && (
        <div id={errorId} className={s.error()} aria-live="assertive">
          {error}
        </div>
      )}

      {/* HINT */}
      {hint && (
        <div id={hintId} className={s.hint()}>
          {hint}
        </div>
      )}
    </div>
  );
}

FieldLayout.sizer = FieldSizer;
