import * as React from 'react';

import { Sizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { useElementBounds } from '@/utils/useElementBounds';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { styles } from './styles';

export interface CheckedFieldProps extends React.ComponentProps<'label'> {
  /** The content of the form-control section of the Field */
  children?: React.ReactNode;
  /** For accessibility purposes: an id to set on the label element */
  labelId?: string;
  /** For accessibility purposes: an id to set on the hint element */
  hintId?: string;
}

/**
 * Wraps a single checkable form control with a standard layout (label &
 * hint, to the right of the control).
 *
 * This is simpler than the Field component. There’s no `error` message, since
 * if one or both possible values is invalid, the field has no purpose. And
 * there’s no `required` state, since that would make the unchecked state
 * invalid.
 *
 * Note: this layout is already built-into Checkbox, Radio, and Switch—you can
 * use this component to create a custom form control that behaves the same way.
 */
export function CheckedField({
  children: formControl,
  className,
  label,
  labelId,
  hint,
  hintId,
  sizer,
  disabled: disabled,
  ...labelProps
}: CheckedFieldProps & CommonCheckedFieldProps) {
  const controlRef = React.useRef<HTMLDivElement>(null);
  const controlBounds = useElementBounds(controlRef);

  const resolvedSizer = useResolvedSizer(sizer);
  const s = styles({ sizer: resolvedSizer, isDisabled: disabled });

  return (
    <label {...labelProps} className={clsw(s.root(), className)}>
      <div className={s.contentRoot()}>
        <div className={s.control()} ref={controlRef}>
          {formControl}
        </div>
        {/*
        This empty element exists to create an extra flex-gap between the
        absolutely-positioned control & the label. It contains a zero-width
        character so that it doesn’t affect vertical alignment, such as when
        the field is inside a `flex items-baseline` parent.
      */}
        <span style={{ paddingLeft: controlBounds?.width || 0 }}>&#8203;</span>
        {(label || hint) && (
          <div className={s.labelese()}>
            {label && (
              <div className={s.label()} id={labelId}>
                {label}
              </div>
            )}
            {hint && (
              <div className={s.hint()} id={hintId}>
                {hint}
              </div>
            )}
          </div>
        )}
      </div>
    </label>
  );
}

CheckedField.sizer = Sizer;
