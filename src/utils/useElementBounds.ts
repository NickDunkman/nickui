import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * A hook that returns an object with information about an element's bounds
 * (width, height, x/y positioning, etc), which only changes when any of that
 * information changes.
 */
export function useElementBounds(
  elementRef: React.RefObject<HTMLElement | null>,
) {
  const [bounds, setBounds] = React.useState<Omit<DOMRectReadOnly, 'toJSON'>>();

  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (elementRef.current) {
        setBounds(elementRef.current.getBoundingClientRect());
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);

      return () => observer.disconnect();
    }
  }, [elementRef]);

  return bounds;
}
