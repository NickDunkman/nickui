import * as React from 'react';
import { ExternalToast, toast as sonnerToastFn } from 'sonner';

import { randomId } from '@/utils/randomId';

import { Toast, ToastProps } from './Toast';

const toastRegistry: Record<
  string | number,
  {
    eventualDuration: number;
    toastProps: ToastProps;
    sonnerOptions: ExternalToast;
  }
> = {};

/** Call this function to trigger a new Toast */
export function toast(
  /** Props to pass to the rendered <Toast> component */
  toastProps: ToastProps = {},
  /**
   * Options to pass through to sonner's toast.custom function, such as to
   * change the `duration` the toast is open for
   */
  sonnerOptions?: ExternalToast,
) {
  // Create a unique ID if not provided
  const thisToastId = sonnerOptions?.id ?? randomId();

  // Peep the existing toasts in the stack
  const allToasts = sonnerToastFn.getToasts();
  const toastAtTop = allToasts[allToasts.length - 1];

  // Check if the requested toast already exists, and if so, whether it is at
  // the top of the stack
  const thisToast = allToasts.find((t) => t.id === thisToastId);
  const thisToastIsAtTop = !!thisToast && thisToast === toastAtTop;
  const thisToastWillBeAtTop = thisToastIsAtTop || !thisToast;

  // This is the duration that will take effect once the toast is at the top
  // of the stack. Defaults to 0 instead of `undefined`, so that when we apply
  // it, it overwrites an existing Infinity duration if necessary. 0 is
  // shorthand for sonner's default duration (which is 4 seconds)
  const thisToastEventualDuration = sonnerOptions?.duration ?? 0;

  // The actual duration to use for this toast should be Infinity unless
  // it will be at the top of the stack.
  const thisToastDuration = thisToastWillBeAtTop
    ? thisToastEventualDuration
    : Infinity;

  const fullSonnerOptions: ExternalToast = {
    ...sonnerOptions,
    id: thisToastId,
    duration: thisToastDuration,
    onAutoClose: (t) => {
      sonnerOptions?.onAutoClose?.(t);
      handleToastClose(t);
    },
    onDismiss: (t) => {
      sonnerOptions?.onDismiss?.(t);
      handleToastClose(t);
    },
  };

  // Add (or update) this toast in the registry
  toastRegistry[thisToastId] = {
    eventualDuration: thisToastEventualDuration,
    toastProps: {
      ...toastProps,
      onDismiss: () => sonnerToastFn.dismiss(thisToastId),
    },
    sonnerOptions: fullSonnerOptions,
  };

  // If we're adding a new toast to the top of the stack, update the existing
  // top of the stack toast to duration: infinity so that it doesn't go away
  if (
    thisToastWillBeAtTop &&
    !thisToastIsAtTop &&
    toastAtTop &&
    toastRegistry[toastAtTop.id]?.sonnerOptions.duration !== Infinity
  ) {
    toastRegistry[toastAtTop.id].sonnerOptions.duration = Infinity;
    sonnerToastFn.custom(
      () => <Toast {...toastRegistry[toastAtTop.id].toastProps} />,
      toastRegistry[toastAtTop.id].sonnerOptions,
    );
  }

  // Add or update the new toast
  return sonnerToastFn.custom(
    () => <Toast {...toastRegistry[thisToastId].toastProps} />,
    toastRegistry[thisToastId].sonnerOptions,
  );
}

/**
 * Trigger's an *asynchronous* toast. The <Toast> will render immediately w/
 * a loading state, and then it will update with the props that are returned
 * from the passed promise.
 */
toast.promise = (
  /**
   * The promise the performs the asynchronous task, and then resolves with
   * the props to pass to the Toast in its finalized state, such as the `title`,
   * `body`, `flavor`, etc. Should catch errors itself -- e.g. handling an
   * HTTP error and then resolving with a `flavor="negative"` Toast with error
   * information.
   */
  thePromise: Promise<ToastProps>,
  {
    sonnerOptions = {},
    loadingToastProps = {},
  }: {
    /**
     * Optional options to pass to the sonner toast.custom function when
     * rendering the Toast, such as to change the `duration` until the toast
     * auto-dismisses, or whether it's `dismissible`
     */
    sonnerOptions?: ExternalToast;
    /**
     * Optional props to pass to the <Toast> when its in the loading state,
     * such as to override the `body` content to something custom, or change
     * the `flavor`
     */
    loadingToastProps?: Partial<ToastProps>;
  } = {},
) => {
  const id = toast(
    {
      body: <>Loading &hellip;</>,
      ...loadingToastProps,
      loading: true,
    },
    {
      ...sonnerOptions,
      // While in the initial loading state, the toast should not auto-dismiss
      duration: Infinity,
    },
  );

  thePromise.then((toastProps) => {
    toast(toastProps, {
      ...sonnerOptions,
      // Using the same ID causes sonner to update the same toast created
      // for the loadong state, rather than creating a new one
      id,
      // Force duration to 0 when not specified, so that it overrides
      // the initial setting of 'Infinity' in the loading state above.
      duration: sonnerOptions.duration ?? 0,
    });
  });
};

const handleToastClose: NonNullable<ExternalToast['onAutoClose']> = (t) => {
  // remove from the registry
  delete toastRegistry[t.id];

  const allToasts = sonnerToastFn.getToasts();
  const nextToastAtTop = allToasts[allToasts.length - 2];

  // If the next toast at the top of the stack has an eventualDuration other
  // than Infinity, we should update it to use eventualDuration so that it will
  // autoHide
  if (
    nextToastAtTop &&
    toastRegistry[nextToastAtTop.id].eventualDuration !== Infinity
  ) {
    toastRegistry[nextToastAtTop.id].sonnerOptions.duration =
      toastRegistry[nextToastAtTop.id].eventualDuration;
    sonnerToastFn.custom(
      () => <Toast {...toastRegistry[nextToastAtTop.id].toastProps} />,
      toastRegistry[nextToastAtTop.id].sonnerOptions,
    );
  }
};
