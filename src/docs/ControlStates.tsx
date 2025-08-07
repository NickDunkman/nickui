import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

import { ComponentName } from './ComponentName';

/** Custom doc block for rendering a Component's "Control States" section */
export function ControlStates({
  of,
  valuable = false,
  checkable = false,
  note,
  sourceState = 'shown',
}: {
  of: StoriesModule;
  valuable?: boolean;
  checkable?: boolean;
  note?: string;
  sourceState?: React.ComponentProps<typeof Canvas>['sourceState'];
}) {
  return (
    <>
      <Markdown options={{ overrides: { ComponentName } }}>
        {`
## Control states

${
  valuable
    ? 'These are controlled using the `value`, `defaultValue`, and `disabled` props.'
    : checkable
      ? 'These are controlled using the `checked`, `defaultChecked`, and `disabled` props.'
      : 'These are controlled using the `disabled` prop.'
}
${note ? `\n${note}` : ''}
        `}
      </Markdown>
      {of.allControlStates && (
        <Canvas of={of.allControlStates} sourceState={sourceState} />
      )}
    </>
  );
}
