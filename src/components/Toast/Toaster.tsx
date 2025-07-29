import * as React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

import { clsw } from '@/utils/clsw';

type ToasterProps = Omit<
  React.ComponentProps<typeof SonnerToaster>,
  'theme' | 'richColors' | 'closeButton' | 'invert' | 'gap' | 'icons'
>;

/**
 * The Toaster component manages the presentation of Toasts as they are
 * added via the toast() function. It should be mounted once somewhere in the
 * React DOM.
 * @props {@link ToasterProps}
 */
export function Toaster({
  className,
  toastOptions,
  position = 'top-right',
  ...otherProps
}: ToasterProps) {
  return (
    <SonnerToaster
      {...otherProps}
      className={clsw('group toaster', className)}
      position={position}
      icons={{
        success: null,
        info: null,
        warning: null,
        error: null,
        loading: null,
      }}
      toastOptions={{
        ...toastOptions,
        classNames: {
          ...toastOptions?.classNames,
          toast: clsw(
            'group toast w-full max-w-80',
            toastOptions?.classNames?.toast,
          ),
          content: clsw('w-full', toastOptions?.classNames?.content),
          title: clsw('w-full', toastOptions?.classNames?.title),
        },
      }}
    />
  );
}
