import * as React from 'react';

import { FieldSizer } from '@/constants';
import { CommonCheckedFieldProps } from '@/types';
import { clsw } from '@/utils/clsw';
import { useElementBounds } from '@/utils/useElementBounds';

import { styles } from './styles';

export interface CheckedFieldProps extends React.ComponentProps<'label'> {
  /** The content of the form-control section of the Field */
  children?: React.ReactNode;
  /**
   * A RefObject installed on the root element of the control's visual. For
   * example, the Checkbox component hides the <input> element and uses
   * custom-styled <div> to represent the checkbox visually. The
   * `controlVisualRef` would be installed on that div. CheckedField uses this
   * for horizontal spacing considerations.
   * */
  controlVisualRef: React.RefObject<HTMLElement | null>;
}

/**
 * Wraps a checkable form control (such as a checkbox or radio) with a standard
 * layout (label & explainer, to the right of the control).
 *
 * This is simpler than the Field component -- since the value is a binary,
 * there is no hint (unnecessary) or error message (you wouldn't have the field
 * if there was only one valid value).
 */
export function CheckedField({
  children: formControl,
  className,
  explainer,
  label,
  sizer,
  disabled: disabled,
  controlVisualRef,
  ...labelProps
}: CheckedFieldProps & CommonCheckedFieldProps) {
  const controlVisualBounds = useElementBounds(controlVisualRef);
  const s = styles({ sizer, isDisabled: disabled });

  return (
    <label {...labelProps} className={clsw(s.root(), className)}>
      <div className={s.control()}>{formControl}</div>
      {/*
        This empty element exists to create an extra flex-gap between the
        absolutely-positioned control & the label. It contains a zero-width
        character so that it doesn’t affect vertical alignment, such as when
        the field is inside a `flex items-baseline` parent.
      */}
      <span style={{ paddingLeft: controlVisualBounds?.width || 0 }}>
        &#8203;
      </span>
      {(label || explainer) && (
        <div className={s.labelese()}>
          {label && <div className={s.label()}>{label}</div>}
          {explainer && <div className={s.explainer()}>{explainer}</div>}
        </div>
      )}
    </label>
  );
}

CheckedField.sizer = FieldSizer;
