import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function that combines the power of clsx & tailwind-merge. You can
 * pass any style of arguments that you would to clsx, and it will also run
 * the resulting value through twMerge to remove redundant classes in the
 * tailwind system.
 */
export function clsw(...clsxInputs: clsx.ClassValue[]) {
  return twMerge(clsx(clsxInputs));
}
