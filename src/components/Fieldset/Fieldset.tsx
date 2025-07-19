import clsx from 'clsx';
import * as React from 'react';

import { Sizer } from '@/constants';
import { CommonFieldsetProps } from '@/types';
import { randomId } from '@/utils/randomId';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { fieldsetStyler } from './styles';

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
  hint,
  error,
  sizer,
  disabled: _disabled,
  required = false,
  'aria-labelledby': ariaLabeledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  ...otherFieldsetProps
}: FieldsetProps & CommonFieldsetProps) {
  const [legendId] = React.useState(randomId());
  const [hintId] = React.useState(randomId());
  const [errorId] = React.useState(randomId());

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = fieldsetStyler({ sizer: resolvedSizer });

  return (
    <fieldset
      {...otherFieldsetProps}
      aria-labelledby={clsx(
        // Connect the internally managed legend to the fieldset
        label && legendId,
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
      aria-invalid={!!(ariaInvalid || error)}
    >
      {label && (
        <legend id={legendId} className={styles.legend()}>
          <div className={styles.label()}>
            {label}
            {required && (
              <abbr className={styles.requiredAsterisk()} title="required">
                *
              </abbr>
            )}
          </div>
        </legend>
      )}

      <div>{formControls}</div>

      {(!!hint || !!error) && (
        <div className={styles.footer()}>
          {hint && (
            <div id={hintId} className={styles.hint()}>
              {hint}
            </div>
          )}

          {error && (
            <div id={errorId} className={styles.error()} aria-live="assertive">
              {error}
            </div>
          )}
        </div>
      )}
    </fieldset>
  );
}

Fieldset.sizer = Sizer;
