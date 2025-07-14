import '@testing-library/jest-dom/vitest';

// Workaround for window.getComputedStyle on a ::before pseudo element in
// the useBreakpoint() hook.
const { getComputedStyle } = window;
window.getComputedStyle = (element, pseudoElement) => {
  if (
    element.id === 'nickui-breakpoint-finder' &&
    pseudoElement === '::before'
  ) {
    // Always act like we're in the "md" breakpoint, so that we can test that
    // responsiveness is being applied in our tests if desired.
    return { content: '"md"' } as CSSStyleDeclaration;
  } else {
    return getComputedStyle(element);
  }
};
