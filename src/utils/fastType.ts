import { UserEvent } from '@testing-library/user-event';

/**
 * A very fast version of userEvent.type which appends to the <input>.value.
 *
 * userEvent.type simulates typing by adding a single character at a time,
 * so adding large blocks of text can be slow. We can speed that up by first
 * adding the full string up to the last character programmatically, and then
 * use userEvent.type with the last character, so that the onChange event fires.
 */
export async function fastType(
  userEventType: UserEvent['type'],
  element: Element,
  appendedValue?: string,
) {
  await fastReplace(
    userEventType,
    element,
    (element as HTMLInputElement).value + (appendedValue || ''),
  );
}

/**
 * A very fast version of userEvent.type which replaces the full <input>.value.
 *
 * userEvent.type simulates typing by adding a single character at a time,
 * so adding large blocks of text can be slow. We can speed that up by first
 * adding the full string up to the last character programmatically, and then
 * use userEvent.type with the last character, so that the onChange event fires.
 */
export async function fastReplace(
  userEventType: UserEvent['type'],
  element: Element,
  newValue?: string,
) {
  const textualElement = element as HTMLInputElement;
  textualElement.value = newValue?.slice(0, -1) || '';
  await userEventType(textualElement, newValue?.slice(-1) || '');
}
