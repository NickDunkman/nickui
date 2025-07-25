import clsx from 'clsx';
import * as React from 'react';

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

  const hasErrorMessage = error && error !== true;

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
      data-nickui-sizer={Array.isArray(sizer) ? sizer.join(',') : sizer}
      data-nickui-resolved-sizer={resolvedSizer}
    >
      {label && (
        // This extra wrapping div allows the legend to be used as the
        // aligner, when the Fieldset is used in a flexbox, for example
        <div>
          <legend id={legendId} className={styles.legend()}>
            {label}
            {required && (
              <abbr className={styles.requiredAsterisk()} title="required">
                *
              </abbr>
            )}
          </legend>
        </div>
      )}

      <div>{formControls}</div>

      {(hint || hasErrorMessage) && (
        <div className={styles.footing()}>
          {hint && (
            <div id={hintId} className={styles.hint()}>
              {hint}
            </div>
          )}

          {hasErrorMessage && (
            <div id={errorId} className={styles.error()} aria-live="assertive">
              {error}
            </div>
          )}
        </div>
      )}
    </fieldset>
  );
}
