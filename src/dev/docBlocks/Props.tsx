import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

import { ComponentName } from './ComponentName';

const fieldableProps = ['label', 'hint', 'error', 'required'];

/**
 * These are the elements that React has custom docs for at
 * https://react.dev/reference/react-dom/components/<element>
 */
const allReactDocs = ['input', 'option', 'select', 'textarea'];

function ucFirst(str: string) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function getInterfaceName(nativeBase: string) {
  if (nativeBase === 'textarea') {
    return 'HTMLTextAreaElement';
  }

  return `HTML${ucFirst(nativeBase)}Element`;
}

/**
 * These props are weedsy -- they may need to be tinkered with in a component's
 * props, but they don't need to appear in the docs.
 */
const alwaysExclude = ['onBlur', 'ref', 'docsMeta'];

/**
 * Custom doc block for showing a Component's props with some consistent
 * language. Automatically breaks the wrapping field component's props into
 * a separate table, when applicable.
 */
export function Props({
  of,
  nativeBase,
  wrapper,
  exclude,
}: {
  of: StoriesModule;
  nativeBase: string;
  wrapper?: 'Field' | 'Fieldset' | 'CheckedField';
  exclude?: string[];
}) {
  const componentName = of.default.title.split('/').pop();

  const wrapperStory =
    wrapper === 'Field'
      ? of.fieldLayout
      : wrapper === 'Fieldset'
        ? of.fieldsetLayout
        : wrapper === 'CheckedField'
          ? of.checkedFieldLayout
          : null;

  return (
    <>
      <Markdown options={{ overrides: { ComponentName } }}>
        {`
## ${wrapper ? `${componentName}-specific p` : 'P'}rops

In addition to some custom props, <ComponentName of="${componentName}" /> takes all
the props that can be used with
[${getInterfaceName(nativeBase)}](https://react.dev/reference/react-dom/components/${allReactDocs.includes(nativeBase) ? nativeBase : 'common'}).
You may be looking for these:
        `}
      </Markdown>

      <ArgTypes
        of={of}
        exclude={[
          ...(wrapper ? fieldableProps : []),
          ...(exclude || []),
          ...alwaysExclude,
        ]}
        sort="requiredFirst"
      />

      {wrapper && (
        <>
          <Markdown options={{ overrides: { ComponentName } }}>
            {`
## Standard ${wrapper} layout

Instead of wrapping with a <ComponentName of="${wrapper}" /> manually, you can
just pass these props directly to <ComponentName of="${componentName}" />.
Accessibility is handled for you.
        `}
          </Markdown>

          {wrapperStory && <Canvas of={wrapperStory} />}

          <ArgTypes
            of={of}
            include={fieldableProps}
            exclude={[...(exclude || []), ...alwaysExclude]}
            sort="requiredFirst"
          />
        </>
      )}
    </>
  );
}
