import * as React from 'react';

import { randomId } from './randomId';

/**
 * Helper for form control components which use <Field>, for managing
 * the accessibility props across the field layout elements & form control
 * element.
 */
export function useFieldControlA11yProps(args: {
  // Note: all these are type as possibly `undefined` but *not* optional, so
  // that the caller never forgets to pass them
  label: React.ReactNode | undefined;
  hint: React.ReactNode | undefined;
  error: React.ReactNode | undefined;
  controlledId: string | undefined;
  controlledAriaLabel: string | undefined;
  controlledAriaLabelledBy: string | undefined;
  controlledAriaDescribedBy: string | undefined;
  controlledAriaErrorMessage: string | undefined;
  controlledAriaInvalid:
    | React.ComponentProps<'input'>['aria-invalid']
    | undefined;
}) {
  const [uncontrolledId] = React.useState(randomId());
  const controlId =
    args.controlledId ?? (args.label ? uncontrolledId : undefined);

  const [labelId] = React.useState(randomId());
  const [hintId] = React.useState(randomId());
  const [errorId] = React.useState(randomId());

  return {
    field: {
      controlId,
      labelId,
      hintId,
      errorId,
    },
    formControl: {
      id: controlId,
      'aria-label': args.controlledAriaLabel,
      'aria-labelledby':
        args.controlledAriaLabelledBy ?? (args.label ? labelId : undefined),
      'aria-describedby':
        args.controlledAriaDescribedBy ?? (args.hint ? hintId : undefined),
      'aria-errormessage':
        args.controlledAriaErrorMessage ??
        (args.error && args.error !== true ? errorId : undefined),
      'aria-invalid': args.controlledAriaInvalid ?? !!args.error,
    },
  };
}

/**
 * Helper for form control components which use <CheckedField>, for managing
 * the accessibility props across the field layout elements & checkable
 * form control element.
 */
export function useCheckedFieldControlA11yProps(args: {
  // Note: all these are type as possibly `undefined` but *not* optional, so
  // that the caller never forgets to pass them
  label: React.ReactNode | undefined;
  hint: React.ReactNode | undefined;
  controlledAriaLabel: string | undefined;
  controlledAriaLabelledBy: string | undefined;
  controlledAriaDescribedBy: string | undefined;
}) {
  const [labelId] = React.useState(randomId());
  const [hintId] = React.useState(randomId());

  return {
    checkedField: {
      labelId,
      hintId,
    },
    formControl: {
      'aria-label': args.controlledAriaLabel,
      'aria-labelledby':
        args.controlledAriaLabelledBy ?? (args.label ? labelId : undefined),
      'aria-describedby':
        args.controlledAriaDescribedBy ?? (args.hint ? hintId : undefined),
    },
  };
}
