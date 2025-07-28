import * as React from 'react';
import { ExternalToast, toast as sonnerToastFn } from 'sonner';

import { randomId } from '@/utils/randomId';

import { Toast, ToastProps } from './Toast';

function renderToast(id: string | number, toastProps: ToastProps) {
  return (
    <Toast
      {...toastProps}
      onDismiss={(event) => {
        toastProps.onDismiss?.(event);
        sonnerToastFn.dismiss(id);
      }}
    />
  );
}

/** Call this function to trigger a new Toast */
export function toast(
  /** Props to pass to the rendered <Toast> component */
  toastProps: ToastProps = {},
  /**
   * Options to pass through to sonner's toast.custom function, such as to
   * change the `duration` the toast is open for
   */
  sonnerOptions?: Parameters<typeof sonnerToastFn>[1],
) {
  return sonnerToastFn.custom(
    (id) => renderToast(id, toastProps),
    sonnerOptions,
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
   * HTTP error and then resolving with a `flavor="nope"` Toast with error
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
  // Create a unique ID if not provided
  const id = sonnerOptions?.id ?? randomId();

  toast(
    {
      body: <>Loading &hellip;</>,
      ...loadingToastProps,
      loading: true,
    },
    {
      ...sonnerOptions,
      id,
      // While in the initial loading state, the toast should not auto-dismiss
      duration: Infinity,
    },
  );

  return sonnerToastFn.promise(thePromise, {
    success: (toastProps) => ({
      ...sonnerOptions,
      // Using the same ID causes sonner to update the same toast created
      // for the loadong state, rather than creating a new one
      id,
      // Our <Toast> content
      jsx: renderToast(id, toastProps),
      // Force duration to 0 when not specified, so that it overrides
      // the initial setting of 'Infinity' in the loading state above.
      duration: sonnerOptions.duration ?? 0,
      // Remove the spinner Sonner adds to promise toasts
      type: 'normal',
      // required by sonner
      message: null,
    }),
  });
};

// pass through some of the other functions sonner provides
toast.dimiss = sonnerToastFn.dismiss;
