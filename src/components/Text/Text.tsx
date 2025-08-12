import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldableFormControlProps } from '@/types';
import { useFieldControlA11yProps } from '@/utils/fieldA11y';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { textStyler } from './styles';

/**
 * These are all of the "textual" <input> types. For example, type="checkbox"
 * is not textual, so we don’t want the <Text> component to accept it.
 */
export const ALLOWED_TYPES = [
  'date',
  'datetime',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

export interface TextProps extends FieldableFormControlProps {
  /**
   * A string that contains a brief hint to the user as to what information is
   * expected in the field.
   */
  placeholder?: string;
  /**
   * The input type to use (only textual types are allowed with Text). See
   * [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
   * for more details
   */
  type?: (typeof ALLOWED_TYPES)[number];
}

/**
 * A form control that allows users to enter & edit a single line of text
 * @param props {@link TextProps}
 */
export function Text({
  // Field props
  className,
  sizer,
  label,
  hint,
  error,
  required,
  disabled,
  // Text-specific props
  id: controlledId,
  'aria-label': controlledAriaLabel,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': controlledAriaInvalid,
  // The rest are brought in from <input>
  ...otherInputProps
}: TextProps) {
  const a11yProps = useFieldControlA11yProps({
    label,
    hint,
    error,
    controlledId,
    controlledAriaLabel,
    controlledAriaLabelledBy,
    controlledAriaDescribedBy,
    controlledAriaErrorMessage,
    controlledAriaInvalid,
  });

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = textStyler({ sizer: resolvedSizer, hasError: !!error });

  return (
    <Field
      {...a11yProps.field}
      className={className}
      sizer={sizer}
      label={label}
      hint={hint}
      error={error !== true ? error : undefined}
      required={required}
      data-nickui-component="Text"
    >
      <input
        {...otherInputProps}
        {...a11yProps.formControl}
        className={styles}
        disabled={disabled}
        required={required}
      />
    </Field>
  );
}
