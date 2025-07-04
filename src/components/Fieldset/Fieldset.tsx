import clsx from 'clsx';
import * as React from 'react';

import { FieldSizer } from '@/constants';
import { CommonFieldsetProps } from '@/types';
import { randomId } from '@/utils/randomId';

import { styles } from './styles';

export interface FieldsetProps extends React.ComponentProps<'fieldset'> {
  /** The content of the form-controls section of the Fieldset */
  children?: React.ReactNode;
}

/**
 * Fieldset wraps multiple form controls in a standard field layout (label,
 * hint, error message, etc).
 * @props {@link FieldsetProps} {@link CommonFieldsetProps}
 */
export function Fieldset({
  children: formControls,
  label,
  explainer,
  error,
  hint,
  sizer,
  disabled: _disabled,
  required = false,
  'aria-labelledby': ariaLabeledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  ...otherFieldsetProps
}: FieldsetProps & CommonFieldsetProps) {
  const [legendId] = React.useState<string>(randomId());
  const [hintId] = React.useState<string>(randomId());
  const [errorId] = React.useState<string>(randomId());

  // Show the legend if we have at least one of the label or explainer
  const showLegend = !!(label || explainer);

  const s = styles({ sizer });

  return (
    <fieldset
      {...otherFieldsetProps}
      aria-labelledby={clsx(
        // Connect the internally managed legend to the fieldset
        showLegend && legendId,
        // Also allow the caller to manage an external label
        ariaLabeledBy,
      )}
      aria-describedby={clsx(
        // Connect the internally managed hint to the fieldset
        hint && hintId,
        // Also allow the caller to manage an external description
        ariaDescribedBy,
      )}
      aria-errormessage={clsx(
        // Connect the internally managed error message to the fieldset
        error && errorId,
        // Also allow the caller to manage an external error message
        ariaErrorMessage,
      )}
    >
      {showLegend && (
        <legend id={legendId} className={s.legend()}>
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
        </legend>
      )}

      <div>{formControls}</div>

      {(!!error || !!hint) && (
        <div className={s.footer()}>
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
      )}
    </fieldset>
  );
}

Fieldset.sizer = FieldSizer;
