import keycode from 'keycode';
import * as React from 'react';

import { Field } from '@/components/Field';
import { FieldableFormControlProps } from '@/types';
import { debounceToRepaint } from '@/utils/debounceToRepaint';
import { useFieldControlA11yProps } from '@/utils/fieldA11y';
import { fireInputChange } from '@/utils/fireInputChange';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { sliderStyler } from './styles';

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

export interface SliderProps
  extends FieldableFormControlProps<
    string | number,
    Omit<
      React.ComponentProps<'div'>,
      'onChange' | 'onBlur' | 'children' | 'ref'
    >,
    SliderFieldDescriptor
  > {
  /** The `ref` is for the hidden input */
  ref?: React.Ref<HTMLInputElement>;
  /** Called when the value of the Slider changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Called when the Slider is unfocused */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** The minimum allowed value, default is 0 */
  min?: number | string;
  /** The maximum allowed value, default is 100 */
  max?: number | string;
  /**
   * Indicates the step by which the Slider's value can change, default is 1.
   * For example, to have possible values of [1, 3, 5, 7, 9], use:
   *   `<Slider min={1} max={9} step={2} />`
   */
  step?: number | string;
  /**
   * The number of steps to move when the shift key is held while adjusting
   * the value via the keyboard, defaults to 10
   */
  shiftSteps?: number | string;
}

/**
 * A form control that allows users to choose a number within a range.
 * @param props {@link SliderProps}
 */
export function Slider({
  // Field props
  className,
  sizer,
  label: labelOrFn,
  error: errorOrFn,
  hint: hintOrFn,
  disabled,
  required,
  // Slider-specific props
  value: controlledValue,
  defaultValue,
  max: rawMax = 100,
  min: rawMin = 0,
  step: rawStep = 1,
  shiftSteps: rawShiftSteps = 10,
  // These are pulled in from <input>, for the hidden input
  ref: controlledInputRef,
  onBlur,
  onChange,
  name,
  // These are pulled in from <div>, for the interactable slider div
  tabIndex,
  onMouseDown,
  onTouchStart,
  onKeyDown,
  onFocus,
  id: controlledId,
  'aria-label': controlledAriaLabel,
  'aria-labelledby': controlledAriaLabelledBy,
  'aria-describedby': controlledAriaDescribedBy,
  'aria-errormessage': controlledAriaErrorMessage,
  'aria-invalid': controlledAriaInvalid,
  ...otherSliderDivProps
}: SliderProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  // This component needs a ref to the hidden <input> for its internal
  // mechanisms. There may also be a `ref` prop provided, such as by React Form
  // Hook for managing the field, and that may be a RefCallback or a RefObject.
  // So for internal convenience, we install a managed RefObject on the hidden
  // <input> in addition to the `ref` prop.
  const internalInputRef = React.useRef<HTMLInputElement>(null);

  const [isMouseFocused, setIsMouseFocused] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue !== undefined ? Number(defaultValue) : undefined,
  );

  const max = Number(rawMax);
  const min = Number(rawMin);
  const step = Number(rawStep);
  const shiftSteps = Number(rawShiftSteps);

  const isControlledComponent = controlledValue !== undefined;
  const value = isControlledComponent
    ? Number(controlledValue)
    : uncontrolledValue;

  // When no value or defaultValue is provided, the slider should behave as if
  // the current value is set to the mininum end of the range.
  const implicitValue = value === undefined ? min : value;

  // If the user focuses the Slider and changes the value via some key presses,
  // and then presses the escape key, we'll reset the value back to what it was
  // on the most recent focus. This is a nice little usability feature, but it’s
  // also an easy way to reset the value within a test after making some
  // changes.
  const [valueOnFocus, setValueOnFocus] = React.useState<number>();

  function updateValue(newValue: number) {
    // The value we calculate from the slider position can have a lot of
    // unecessary precision. We can normalize it to a max of 5 significant
    // digits, since the user won't be able to get that granular with their
    // mouse or finger, and then hopefully reduce re-renders.
    const cleanedNewValue = parseFloat(newValue.toFixed(5));

    setUncontrolledValue(cleanedNewValue);

    fireInputChange(internalInputRef.current, cleanedNewValue.toString());
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

      if (!isMouseFocused) {
        setIsMouseFocused(true);
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

      switch (keycode(event.nativeEvent) || event.nativeEvent.key) {
        case 'right':
        case 'ArrowRight':
        case 'up':
        case 'ArrowUp':
          newValue = Math.min(
            max,
            implicitValue + (shiftKeyHeld ? step * shiftSteps : step),
          );
          break;
        case 'page up':
        case 'PageUp':
          newValue = Math.min(max, implicitValue + step * shiftSteps);
          break;
        case 'left':
        case 'ArrowLeft':
        case 'down':
        case 'ArrowDown':
          newValue = Math.max(
            min,
            implicitValue - (shiftKeyHeld ? step * shiftSteps : step),
          );
          break;
        case 'page down':
        case 'PageDown':
          newValue = Math.max(min, implicitValue - step * shiftSteps);
          break;
        case 'home':
        case 'Home':
          newValue = min;
          break;
        case 'end':
        case 'End':
          newValue = max;
          break;
        case 'esc':
        case 'Escape':
          // On the escape key, revert the value to what it was when it was
          // last focused.
          if (valueOnFocus !== undefined) {
            newValue = valueOnFocus;
            break;
          } else {
            return;
          }
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

      if (isMouseFocused) {
        setIsMouseFocused(false);
      }
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
    if (!disabled) {
      if (!isFocused) {
        setIsFocused(true);
        setValueOnFocus(implicitValue);
      }
      onFocus?.(event);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!disabled) {
      if (isMouseFocused) {
        setIsMouseFocused(false);
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
  const hint = descriptorOrFnToNode(hintOrFn);
  const error = descriptorOrFnToNode(errorOrFn);

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

  const percentage = valueToRangePercentage(implicitValue, min, max);

  const resolvedSizer = useResolvedSizer(sizer);
  const styles = sliderStyler({
    sizer: resolvedSizer,
    isDisabled: disabled,
    isKeyboardFocused: isFocused && !disabled && !isMouseFocused,
    hasFieldHeader: !!label,
    hasFieldFooter: !!((error && error !== true) || hint),
    hasError: !!error,
    atMin: percentage === 0,
    atMax: percentage === 100,
  });

  // Add an additional touchstart event that prevents the page from scrolling
  // as you drag the slider on touch screens
  React.useEffect(() => {
    if (rootRef.current) {
      function handler(event: TouchEvent) {
        event.preventDefault();
      }

      const rootEl = rootRef.current;

      rootEl.addEventListener('touchstart', handler, {
        passive: false,
      });

      return () => {
        rootEl.removeEventListener('touchstart', handler);
      };
    }
  }, [rootRef]);

  return (
    <Field
      {...a11yProps.field}
      className={className}
      sizer={sizer}
      label={label}
      hint={hint}
      error={error}
      required={required}
      data-nickui-component="Slider"
    >
      <div
        {...otherSliderDivProps}
        {...a11yProps.formControl}
        ref={rootRef}
        className={styles.root()}
        role="slider"
        tabIndex={disabled ? -1 : tabIndex || 0}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={implicitValue}
      >
        <div ref={trackRef} className={styles.track()}>
          <div
            className={styles.fill()}
            style={{ right: `${100 - percentage}%` }}
            data-testid="fill"
          />
          <div
            className={styles.thumb()}
            style={{ left: `${percentage}%` }}
            data-testid="thumb"
          />
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
