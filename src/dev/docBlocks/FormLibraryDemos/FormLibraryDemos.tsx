import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { Button } from '@/components/Button';

import { ComponentName } from '../ComponentName';

import { FormikDemo } from './FormikDemo';
import { ReactHookFormDemo } from './ReactHookFormDemo';
import { TanStackFormDemo } from './TanstackFormDemo';
import { FormLibraryDemoProps } from './types';

const libraries = ['React Hook Form', 'Tanstack Form', 'Formik'] as const;
type LibraryType = (typeof libraries)[number];

const demos: Record<LibraryType, React.ComponentType<FormLibraryDemoProps>> = {
  'React Hook Form': ReactHookFormDemo,
  'Tanstack Form': TanStackFormDemo,
  Formik: FormikDemo,
};

/**
 * Custom doc block for demoing a form control's compatibility with
 * compatibility with React Hook Form & Formik.
 */
export function FormLibraryDemos(props: FormLibraryDemoProps) {
  const [library, setLibrary] =
    React.useState<keyof typeof demos>('React Hook Form');

  const DemoComponent = demos[library];

  return (
    <>
      <Markdown options={{ overrides: { ComponentName } }}>
        {`
## Compatibility with popular form libraries

&nbsp;<ComponentName of="${props.of}" /> implements all of the necessary
props to be used with [React Hook Form](https://react-hook-form.com/),
[TanStack Form](https://tanstack.com/form), and [Formik](https://formik.org)!
        `}
      </Markdown>

      <div className="sb-unstyled relative z-2 -mb-7 flex gap-2 rounded-t-sm bg-emerald-900 p-3">
        {libraries.map((lib) => (
          <Button
            key={lib}
            sizer={['xs', 'sm:sm']}
            onClick={() => {
              setLibrary(lib);
            }}
            flavor="caution"
            secondary={library !== lib}
          >
            {lib}
          </Button>
        ))}
        <div className="ml-auto hidden sm:block">
          <span className="relative -top-4 -mt-2 mr-3 blur-[0.5px]">⛳️</span>
          <span className="text-3xl">🏌️‍♂️</span>
        </div>
      </div>

      <DemoComponent {...props} />
    </>
  );
}
