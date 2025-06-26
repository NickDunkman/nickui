/**
 * Given a function A, returns a function B that will run function A only
 * once per browser re-paint. This is useful for running some logic that would
 * be unnecessary to do more often than that, such as updating the position
 * of thumb on the Slider as the user drags it.
 */
export function debounceToRepaint<A extends unknown[]>(
  func: (...args: A) => void,
): (...args: A) => void {
  let waitingForAnimationFrame = false;

  function debounced(...args: A) {
    if (waitingForAnimationFrame) {
      return;
    }

    waitingForAnimationFrame = true;

    requestAnimationFrame(() => {
      waitingForAnimationFrame = false;
      func(...args);
    });
  }

  return debounced;
}
