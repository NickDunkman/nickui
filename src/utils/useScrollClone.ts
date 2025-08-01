import * as React from 'react';

/**
 * As you scroll one element, will keep the scroll position of another element
 * identical.
 *
 * @returns 2 refs -- the first should be installed on the element you want to
 * copy the scroll position *from*.
 */
export function useScrollClone<
  CloneFromElementType extends HTMLElement = HTMLElement,
  CloneToElementType extends HTMLElement = CloneFromElementType,
>() {
  const cloneFromElementRef = React.useRef<CloneFromElementType>(null);
  const cloneToElementRef = React.useRef<CloneToElementType>(null);

  React.useEffect(() => {
    const cloneFromElement = cloneFromElementRef.current;
    const cloneToElement = cloneToElementRef.current;

    if (cloneFromElement && cloneToElement) {
      function scrollHandler() {
        cloneScroll(cloneFromElement, cloneToElement);
      }

      cloneScroll(cloneFromElement, cloneToElement);

      cloneFromElement.addEventListener('scroll', scrollHandler);
      return () => {
        cloneFromElement.removeEventListener('scroll', scrollHandler);
      };
    }
  }, [cloneFromElementRef, cloneToElementRef]);

  return [cloneFromElementRef, cloneToElementRef] as const;
}

function cloneScroll(
  cloneFromElement: HTMLElement | null,
  cloneToElement: HTMLElement | null,
) {
  if (cloneFromElement && cloneToElement) {
    cloneToElement.scroll(
      cloneFromElement.scrollLeft,
      cloneFromElement.scrollTop,
    );
  }
}
