import { UserEvent } from '@testing-library/user-event';

/**
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
  const textualElement = element as HTMLInputElement;
  textualElement.value =
    textualElement.value + appendedValue?.slice(0, -1) || '';
  await userEventType(textualElement, appendedValue?.slice(-1) || '');
}
