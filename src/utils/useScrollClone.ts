import * as React from 'react';

/**
 * As you scroll one element, will keep the scroll position of another element
 * identical.
 *
 * @returns 2 refs. If you don’t pass in refs to use, you need to install these
 * on the corresponding elements.
 */
export function useScrollClone<
  CloneFromElementType extends HTMLElement = HTMLElement,
  CloneToElementType extends HTMLElement = CloneFromElementType,
>(
  controlledCloneFromElementRef?: React.RefObject<CloneFromElementType | null>,
  controlledCloneToElementRef?: React.RefObject<CloneToElementType | null>,
) {
  const uncontrolledCloneFromElementRef =
    React.useRef<CloneFromElementType>(null);
  const cloneFromElementRef =
    controlledCloneFromElementRef || uncontrolledCloneFromElementRef;

  const uncontrolledCloneToElementRef = React.useRef<CloneToElementType>(null);
  const cloneToElementRef =
    controlledCloneToElementRef || uncontrolledCloneToElementRef;

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
