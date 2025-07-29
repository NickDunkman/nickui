import * as React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

import { FlavorType } from '@/types';

import { toastStyler } from './styles';

export interface ToastProps {
  title?: string;
  body?: React.ReactNode;
  loading?: boolean;
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  flavor?: FlavorType;
  secondary?: boolean;
}

/** A fully custom toast that still maintains the animations and interactions. */
export function Toast({
  title,
  body,
  loading = false,
  onDismiss,
  flavor,
  secondary = false,
}: ToastProps) {
  const styles = toastStyler({ flavor, isSecondary: secondary });

  let loadingColor: string;
  switch (flavor) {
    case 'positive':
      loadingColor = '#002c22';
      break;
    case 'caution':
      loadingColor = '#432004';
      break;
    case 'negative':
      loadingColor = '#460809';
      break;
    default:
      loadingColor = '#162456';
  }

  return (
    <div className={styles.root()}>
      <button className={styles.dismisser()} onClick={onDismiss}>
        <div className={styles.dismisserIcon()}>
          <XIcon />
        </div>
      </button>

      <div className={styles.content()}>
        {title && <div className={styles.title()}>{title}</div>}
        {loading ? (
          <div className="relative flex gap-3">
            <div className="w-4">
              <div className="absolute -top-0.5">
                <OrbitProgress
                  style={{ fontSize: 3.2 }}
                  dense
                  color={loadingColor}
                />
              </div>
            </div>
            <div className={styles.body()}>{body}</div>
          </div>
        ) : (
          <div className={styles.body()}>{body}</div>
        )}
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <svg
      role="img"
      aria-label="Dismiss"
      fill="white"
      width="8"
      height="8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 460.775 460.775"
    >
      <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
    </svg>
  );
}
