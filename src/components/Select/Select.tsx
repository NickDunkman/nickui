import * as React from 'react';

import { FieldSizer } from '@/constants';

import { randomId } from '@/utils/randomId';

import { FieldControl } from '@/components/FieldControl/FieldControl';
import { FieldLayout } from '@/components/FieldLayout';

import { styles } from './styles';

interface SelectProps extends React.ComponentProps<'select'> {
  /** Prevents the user from interacting with the Select */
  disabled?: boolean;
  /** Called when the value of the Select changes */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Sets the value of the Select when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/select#controlling-a-select-box-with-a-state-variable)
   */
  value?: string;
  /** Sets the value of the Select when using it as an uncontrolled component */
  defaultValue?: string;
}

/**
 * Select allows users to choose from a list of options.
 * @param props {@link SelectProps}
 */
export function Select({
  className,
  sizer,
  label,
  explainer,
  hint,
  error,
  required,
  disabled,
  id: controlledId,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  ...otherSelectProps
}: SelectProps & React.ComponentProps<typeof FieldControl>) {
  // Generate some ids for accessibility, in case they aren't provided as props
  const [uncontrolledId] = React.useState(randomId());
  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const [uncontrolledAriaErrorMessage] = React.useState(randomId());

  // To make the label/hint/error accessible, create some IDs to use for
  // associating the input with those elements. Use the IDs specified via
  // props if they are provided, otherwise use some auto-generated IDs. Note:
  // don't use auto-generated IDs unless the associated content exists (e.g.
  // don't specify an aria-describedby on the input unless there is hint
  // content).
  const id = controlledId || (label ? uncontrolledId : undefined);
  const ariaDescribedBy =
    controlledAriaDescribedBy ||
    (hint ? uncontrolledAriaDescribedBy : undefined);
  const ariaErrorMessage =
    controlledAriaErrorMessage ||
    (error ? uncontrolledAriaErrorMessage : undefined);

  const s = styles({
    sizer,
    hasError: !!error,
    isDisabled: !!disabled,
  });

  return (
    <FieldLayout
      className={className}
      sizer={sizer}
      label={label}
      explainer={explainer}
      hint={hint}
      hintId={ariaDescribedBy}
      error={error}
      controlId={id}
      errorId={ariaErrorMessage}
      required={required}
    >
      <div className={s.root()}>
        <select
          {...otherSelectProps}
          id={id}
          className={s.select()}
          disabled={disabled}
          required={required}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          // For accessibility, aria-invalid should be set when there is an error
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
        />
      </div>
    </FieldLayout>
  );
}

Select.sizer = FieldSizer;
