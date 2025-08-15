import { expect } from 'storybook/test';

/**
 * A function that can be used to apply an expect().toHaveValue() with a grace
 * period, such as to give a component an extra render cycle to make changes
 * to its value.
 *
 * Storybook does not provide vitest’s expect.poll feature, so this is useful
 * in story play() functions.
 */
export async function expectDelayedValue(
  input: HTMLElement,
  expectedValue: string,
  /**
   * How often to poll to see if the value has been updated to match, in
   * milliseconds
   */
  interval: number = 50,
  /** Maximum grace period, in milliseconds */
  timeout: number = 1000,
) {
  async function waitForValue() {
    return new Promise((resolve) => {
      // resolve immediately if the value is already as expected
      if ((input as HTMLInputElement).value === expectedValue) {
        resolve(true);
      }

      // otherwise check every so often to see if the value has been updated
      // to match the expectation
      const intervalId = setInterval(() => {
        if ((input as HTMLInputElement).value === expectedValue) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, interval);

      // After the max time allowed, make sure the interval is stopped if it
      // hasn’t yet.
      setTimeout(() => {
        clearInterval(intervalId);
        resolve(true);
      }, timeout);
    });
  }

  // This will either resolve when the value has been updated to match (in which
  // case the expect below will pass), or if our timeout has been reached (in
  // which case the expect below will probably fail)
  await waitForValue();

  expect(input).toHaveValue(expectedValue);
}
