/**
 * Changes an <input>’s value & causes its `onChange` callback to fire.
 *
 * This is achieved by dispatching a bubbled "input" event onto the <input>,
 * rather than a "change" event. Using a "change" event would cause React to
 * kill the event once it reaches the <input>, so it would never reach any
 * onChange handlers.
 */
export function fireInputChange(
  /**
   * The <input> element to set the value on. `null` is allowed so that you
   * don’t need to check if the React ref’s `current` is set before calling.
   */
  input: HTMLInputElement | null,
  /** The new value to install */
  newValue: string,
) {
  if (!input) {
    return false;
  }
  const setValueFn = (
    Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ) as PropertyDescriptor
  ).set;

  if (!setValueFn) {
    return false;
  }

  const event = new Event('input', { bubbles: true });
  setValueFn.call(input, newValue);
  input.dispatchEvent(event);

  return true;
}
