import * as React from 'react';

import { randomId } from './randomId';

//interface ArgsForCheckedField<DescriptorType> {
//  label?: CheckedFieldableProps<DescriptorType>['label'];
//  hint?: CheckedFieldableProps<DescriptorType>['label'];
//}
//
//interface ReturnTypeForCheckedField {
//  lol: string;
//}
//
//interface ArgsForField<DescriptorType> {
//  label?: FieldableProps<DescriptorType>['label'];
//  hint?: FieldableProps<DescriptorType>['hint'];
//  error?: FieldableProps<DescriptorType>['error'];
//}
//
//interface ReturnTypeForField {
//  lol: string;
//  haha: string;
//}
//
//export function useFieldA11yProps<DescriptorType>(
//  args: ArgsForCheckedField<DescriptorType>,
//): ReturnTypeForCheckedField;
//
//export function useFieldA11yProps<DescriptorType>(
//  args: ArgsForField<DescriptorType>,
//): ReturnTypeForField;
//
//export function useFieldA11yProps<DescriptorType>(
//  args: ArgsForCheckedField<DescriptorType> | ArgsForField<DescriptorType>,
//): ReturnTypeForCheckedField | ReturnTypeForField {
//  return args.error ? { lol: 'what', haha: 'hehe' } : { lol: 'what' };
//}
//
//const lol = useFieldA11yProps({}).lol;
//const hah = useFieldA11yProps({ error: 'lol:' }).haha;
//

export function useFieldControlA11yProps(args: {
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
