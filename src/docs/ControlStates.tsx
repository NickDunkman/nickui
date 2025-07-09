import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

/**
 * Helper for easily showing the "Control States" section in a component's docs
 */
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
      <Markdown>
        {`
## Control States

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
      <Canvas of={of.AllControlStates} sourceState={sourceState} />
    </>
  );
}
