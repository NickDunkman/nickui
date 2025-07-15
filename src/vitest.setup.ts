import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

import { BREAKPOINT_MEASURER_ID } from './constants';

// Workaround for window.getComputedStyle on a ::before pseudo element in
// the useBreakpoint() hook.
const { getComputedStyle } = window;
window.getComputedStyle = (element, pseudoElement) => {
  if (element.id === BREAKPOINT_MEASURER_ID && pseudoElement === '::before') {
    // Always act like we're in the "md" breakpoint, so that we can test that
    // responsiveness is being applied in our tests if desired.
    return { content: 'md' } as CSSStyleDeclaration;
  } else {
    return getComputedStyle(element);
  }
};

// Have ResizeObserver be a noop in tests
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
vi.stubGlobal('ResizeObserver', ResizeObserverMock);
