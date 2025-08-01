import * as React from 'react';

import { CommonFieldProps } from '@/types';

import { randomId } from './randomId';

/**
 * Abstracts the common logic of configuring accessibility ids for labels,
 * hints, and errors in the form control components.
 */
export function useFieldA11yIds({
  label,
  hint,
  error,
  controlledId,
  controlledAriaLabelledBy,
  controlledAriaDescribedBy,
  controlledAriaErrorMessage,
}: {
  label?: CommonFieldProps['label'];
  hint?: CommonFieldProps['hint'];
  error?: CommonFieldProps['error'];
  controlledId?: string;
  controlledAriaLabelledBy?: string;
  controlledAriaDescribedBy?: string;
  controlledAriaErrorMessage?: string;
}) {
  const [uncontrolledId] = React.useState(randomId());
  const [uncontrolledAriaLabelledBy] = React.useState(randomId());
  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const [uncontrolledAriaErrorMessage] = React.useState(randomId());

  return {
    id: controlledId ?? (label ? uncontrolledId : undefined),
    ariaLabelledBy:
      controlledAriaLabelledBy ??
      (label ? uncontrolledAriaLabelledBy : undefined),
    ariaDescribedBy:
      controlledAriaDescribedBy ??
      (hint ? uncontrolledAriaDescribedBy : undefined),
    ariaErrorMessage:
      controlledAriaErrorMessage ??
      (error && error !== true ? uncontrolledAriaErrorMessage : undefined),
  };
}
