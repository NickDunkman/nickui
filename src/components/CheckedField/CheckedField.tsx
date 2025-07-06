import * as React from 'react';

import { FieldSizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { useElementBounds } from '@/utils/useElementBounds';

import { styles } from './styles';

export interface CheckedFieldProps extends React.ComponentProps<'label'> {
  /** The content of the form-control section of the Field */
  children?: React.ReactNode;
}

/**
 * Wraps a single checkable form control with a standard layout (label &
 * explainer, to the right of the control).
 *
 * This is simpler than the Field component. There’s no hint, since a field with
 * only 2 possible values is too simple for it. And there’s no error message,
 * since if one or both possible values is invalid, the field has no purpose.
 *
 * Note: this layout is already built-into Checkbox, Radio, and Switch—you can
 * use this component to create a custom form control that behaves the same way.
 */
export function CheckedField({
  children: formControl,
  className,
  explainer,
  label,
  sizer,
  disabled: disabled,
  ...labelProps
}: CheckedFieldProps & CommonCheckedFieldProps) {
  const controlRef = React.useRef<HTMLDivElement>(null);
  const controlBounds = useElementBounds(controlRef);

  const s = styles({ sizer, isDisabled: disabled });

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
        {(label || explainer) && (
          <div className={s.labelese()}>
            {label && <div className={s.label()}>{label}</div>}
            {explainer && <div className={s.explainer()}>{explainer}</div>}
          </div>
        )}
      </div>
    </label>
  );
}

CheckedField.sizer = FieldSizer;
