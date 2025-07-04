import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

/**
 * Helper for easily showing the "Control States" section in a component's docs
 */
export function ControlStates({ of }: { of: StoriesModule }) {
  return (
    <>
      <Markdown>## Control States</Markdown>
      <Canvas of={of.AllControlStates} sourceState="shown" />
    </>
  );
}
