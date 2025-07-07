import keycode from 'keycode';
import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldSizer } from '@/constants';
import { CommonFieldProps } from '@/types';
import { debounceToRepaint } from '@/utils/debounceToRepaint';
import { randomId } from '@/utils/randomId';

import { styles } from './styles';

function valueToRangePercentage(value: number, min: number, max: number) {
  const percentage = (value - min) / (max - min) || 0;
  return percentage * 100;
}

type SliderFieldDescriptor =
  | React.ReactNode
  | ((state: {
      value: number;
      min: number;
      max: number;
      step: number;
    }) => React.ReactNode);

interface SliderProps
  extends Omit<
    React.ComponentProps<'div'>,
    'onChange' | 'onBlur' | 'children' | 'ref'
  > {
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Called when the value of the Slider changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Called when the Slider is unfocused */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** The minimum allowed value, default is 0 */
  min?: number;
  /** The maximum allowed value, default is 100 */
  max?: number;
  /**
   * Indicates the step by which the Slider's value can change, default is 1.
   * For example, to have possible values of [1, 3, 5, 7, 9], use:
   *   `<Slider min={1} max={9} step={2} />`
   */
  step?: number;
  /**
   * The number of steps to move when the shift key is held while adjusting
   * the value via the keyboard, defaults to 10
   */
  shiftSteps?: number;
  /** The field name */
  name?: string;
  /**
   * Sets the value of the Slider when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: number | string;
  /** Sets the value of the Slider when using it as an uncontrolled component */
  defaultValue?: number | string;
  /** The `ref` is for the hidden input */
  ref?: React.Ref<HTMLInputElement>;
}

type SliderFieldProps = CommonFieldProps<SliderFieldDescriptor>;

/**
 * A form control that allows users to choose a number within a range.
 * @param props {@link SliderProps} + {@link SliderFieldProps}
 */
export function Slider({
  // Field props
  className,
  sizer,
  label: labelOrFn,
  explainer: explainerOrFn,
  error: errorOrFn,
  hint: hintOrFn,
  disabled,
  required,
  // Slider-specific props
  ref: controlledInputRef,
  name,
  max = 100,
  min = 0,
  step = 1,
  shiftSteps = 10,
  tabIndex,
  value: controlledValue,
  defaultValue,
  onChange,
  onMouseDown,
  onTouchStart,
  onKeyDown,
  onFocus,
  onBlur,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': ariaInvalid,
  // The rest are brought in from <div>
  ...otherDivProps
}: SliderProps & SliderFieldProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  // This component needs a ref to the hidden <input> for its internal
  // mechanisms. There may also be a `ref` prop provided, such as by React Form
  // Hook for managing the field, and that may be a RefCallback or a RefObject.
  // So for internal convenience, we install a managed RefObject on the hidden
  // <input> in addition to the `ref` prop.
  const internalInputRef = React.useRef<HTMLInputElement>(null);

  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue !== undefined ? Number(defaultValue) : undefined,
  );

  const isControlledComponent = controlledValue !== undefined;
  const value = isControlledComponent
    ? Number(controlledValue)
    : uncontrolledValue;

  // When no value or defaultValue is provided, the slider should behave as if
  // the current value is set to the mininum end of the range.
  const implicitValue = value === undefined ? min : value;

  function updateValue(newValue: number) {
    // The value we calculate from the slider position can have a lot of
    // unecessary precision. We can normalize it to a max of 5 significant
    // digits, since the user won't be able to get that granular with their
    // mouse or finger, and then hopefully reduce re-renders.
    const cleanedNewValue = parseFloat(newValue.toFixed(5));

    setUncontrolledValue(cleanedNewValue);

    // Trigger a call to the `onChange` prop by dispatching an `input` event
    // to the hidden input, where the onChange callback is mounted. This
    // allows the callback to be called with a full SyntheticEvent from
    // an HTMLInputElement, which helps make the component compatible with
    // form libraries like React Hook Form.
    if (internalInputRef.current) {
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        'value',
      ) as PropertyDescriptor;
      const setValue = descriptor.set;
      if (setValue) {
        const event = new Event('input', { bubbles: true });
        setValue.call(internalInputRef.current, cleanedNewValue);
        internalInputRef.current.dispatchEvent(event);
      }
    }
  }

  /**
   * Updates the Slider value based on the X coordinate of where an event
   * occurred, relative to the Slider's track. Such as a tap, drag, etc.
   */
  function updateValueFromEventPosition(event: MouseEvent | TouchEvent) {
    if (!trackRef.current) {
      return;
    }

    const {
      left: trackLeftX,
      right: trackRightX,
      width: trackWidth,
    } = trackRef.current.getBoundingClientRect();

    // Calculate the X coordinate of where the event occurred. Snap it to the
    // bounds of the track if the event occurred outside those bounds.
    let touchX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    if (touchX < trackLeftX) {
      touchX = trackLeftX;
    } else if (touchX > trackRightX) {
      touchX = trackRightX;
    }

    // Calculate the newValue based on where the event occurred along the track,
    // adjusted to the range the track represents.
    let newValue = ((touchX - trackLeftX) / trackWidth) * (max - min) + min;

    // Round to the nearest step
    newValue = Math.round(newValue / step) * step;

    updateValue(newValue);
  }

  const handleDrag = debounceToRepaint((event: MouseEvent | TouchEvent) => {
    updateValueFromEventPosition(event);
  });

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    if (!disabled) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragMouseEnd);

      updateValueFromEventPosition(event.nativeEvent);

      onMouseDown?.(event);

      // Prevent text selection when dragging the slider (but still focus)
      event.preventDefault();

      if (!isClicked) {
        setIsClicked(true);
      }

      rootRef.current?.focus();
    }
  }

  function handleDragMouseEnd() {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragMouseEnd);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    if (!disabled) {
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('touchup', handleTouchEnd);
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchcancel', handleTouchEnd);

      updateValueFromEventPosition(event.nativeEvent);

      onTouchStart?.(event);

      // Don't allow page scrolling while dragging the slider
      event.preventDefault();
    }
  }

  function handleTouchEnd() {
    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchup', handleTouchEnd);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchcancel', handleTouchEnd);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!disabled) {
      let newValue: number;

      const shiftKeyHeld = event.nativeEvent.shiftKey;

      switch (keycode(event.nativeEvent)) {
        case 'right':
        case 'up':
        case 'page up':
          newValue = Math.min(
            max,
            implicitValue + (shiftKeyHeld ? step * shiftSteps : step),
          );
          break;
        case 'left':
        case 'down':
        case 'page down':
          newValue = Math.max(
            min,
            implicitValue - (shiftKeyHeld ? step * shiftSteps : step),
          );
          break;
        case 'home':
          newValue = min;
          break;
        case 'end':
          newValue = max;
          break;
        default:
          // Any other pressed key should not be considered as targeting
          // the Slider -- exit immediately so none of the behavior below
          // applies.
          return;
      }

      updateValue(newValue);

      onKeyDown?.(event);

      // All of the applicable key presses can cause page scroll, which we
      // don't want to happen. For example, if the Slider is focused and the
      // user presses the `home` key (which causes this event handler to fire),
      // we want the Slider's value to go to the minimum and NOT have the page
      // scroll up.
      event.preventDefault();

      if (isClicked) {
        setIsClicked(false);
      }
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
    if (!disabled) {
      if (!isFocused) {
        setIsFocused(true);
      }
      onFocus?.(event);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!disabled) {
      if (isClicked) {
        setIsClicked(false);
      }
      if (isFocused) {
        setIsFocused(false);
      }
      if (internalInputRef.current) {
        onBlur?.({
          ...event,
          target: internalInputRef.current,
          currentTarget: internalInputRef.current,
        });
      }
    }
  }

  // React Hook Form sets the inital field value by using the `ref` prop to
  // programmatically set the `value` on the hidden input element. So when
  // the caller isn't using the `value` or `defaultValue` props, we should
  // inspect the hidden input, and if something has magically set its value,
  // use that as the defaultValue for this component -- allowing the checkboxes
  // to be properly checked or unchecked after mount.
  React.useLayoutEffect(() => {
    if (value === undefined && defaultValue === undefined) {
      if (internalInputRef.current?.value != null) {
        setUncontrolledValue(Number(internalInputRef.current.value));
      }
    }
    // We only want to run this effect once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function descriptorOrFnToNode(
    descriptorOrFn: SliderFieldDescriptor | undefined,
  ) {
    return typeof descriptorOrFn === 'function'
      ? descriptorOrFn({ value: implicitValue, min, max, step })
      : descriptorOrFn;
  }
  const label = descriptorOrFnToNode(labelOrFn);
  const explainer = descriptorOrFnToNode(explainerOrFn);
  const error = descriptorOrFnToNode(errorOrFn);
  const hint = descriptorOrFnToNode(hintOrFn);

  const [uncontrolledAriaLabelledBy] = React.useState(randomId());
  const ariaLabelledBy =
    controlledAriaLabelledBy ||
    (label ? uncontrolledAriaLabelledBy : undefined);

  const [uncontrolledAriaDescribedBy] = React.useState(randomId());
  const ariaDescribedBy =
    controlledAriaDescribedBy ||
    (hint ? uncontrolledAriaDescribedBy : undefined);

  const [uncontrolledAriaErrorMessage] = React.useState(randomId());
  const ariaErrorMessage =
    controlledAriaErrorMessage ||
    (error && error !== true ? uncontrolledAriaErrorMessage : undefined);

  const percentage = valueToRangePercentage(implicitValue, min, max);

  const s = styles({
    sizer,
    isDisabled: disabled,
    isFocused: isFocused && !disabled && !isClicked,
    hasFieldHeader: !!(label || explainer),
    hasFieldFooter: !!((error && error !== true) || hint),
    hasError: !!error,
    atMin: percentage === 0,
    atMax: percentage === 100,
  });

  return (
    <Field
      className={className}
      sizer={sizer}
      label={label}
      labelId={ariaLabelledBy}
      explainer={explainer}
      hint={hint}
      hintId={ariaDescribedBy}
      error={error}
      errorId={ariaErrorMessage}
      disabled={disabled}
      required={required}
    >
      <div
        {...otherDivProps}
        ref={rootRef}
        className={s.root()}
        role="slider"
        tabIndex={disabled ? -1 : tabIndex || 0}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={implicitValue}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-errormessage={ariaErrorMessage}
        aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
      >
        <div ref={trackRef} className={s.track()}>
          <div className={s.fill()} style={{ right: `${100 - percentage}%` }} />
          <div className={s.thumb()} style={{ left: `${percentage}%` }} />
        </div>
      </div>

      {/*
        This <input> is hidden from the user, and is used to have the onChange
        callback be a proper React.ChangeEventHandler<HTMLInputElement>, which
        allows this component to be compatible with form libraries like
        React Hook Form!
      */}
      <input
        ref={(el) => {
          internalInputRef.current = el;

          if (typeof controlledInputRef === 'function') {
            controlledInputRef(el);
          } else if (controlledInputRef) {
            controlledInputRef.current = el;
          }
        }}
        type="text"
        name={name}
        className="hidden"
        aria-hidden
        // We set the value on this hidden <input> by programmatically
        // dispatching an `input` event above, which causes a 'change' to then
        // fire, and be caught by the onChange handler. So we can't set the
        // `value` prop here, otherwise React will supress that change event.
        // We can, however, set a defaultValue, so that the <input> has the
        // initial value.
        defaultValue={value}
        onChange={onChange}
      />
    </Field>
  );
}

Slider.sizer = FieldSizer;
