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
  const [legendId] = React.useState<string>(randomId());
  const [hintId] = React.useState<string>(randomId());
  const [errorId] = React.useState<string>(randomId());

  const s = styles({ sizer });

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
        <legend id={legendId} className={s.legend()}>
          <div className={s.label()}>
            {label}
            {required && (
              <abbr className={s.requiredAsterisk()} title="required">
                *
              </abbr>
            )}
          </div>
        </legend>
      )}

      <div>{formControls}</div>

      {(!!hint || !!error) && (
        <div className={s.footer()}>
          {hint && (
            <div id={hintId} className={s.hint()}>
              {hint}
            </div>
          )}

          {error && (
            <div id={errorId} className={s.error()} aria-live="assertive">
              {error}
            </div>
          )}
        </div>
      )}
    </fieldset>
  );
}

Fieldset.sizer = FieldSizer;
