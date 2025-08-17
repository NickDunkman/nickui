import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { KeyboardKey } from '../stories/KeyboardKey';

import { Table } from './Table';

/** Custom doc block for rendering a component’s keyboard interactions */
export function KeyboardInteractions({
  keys,
}: {
  keys?: [keyCombo: string | string[], action: string][];
}) {
  console.log(keys);
  return (
    <>
      <Markdown>## Keyboard interactions</Markdown>
      <Table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {keys?.map(([keyCombo, action]) => (
            <tr
              key={typeof keyCombo === 'string' ? keyCombo : keyCombo.join(',')}
            >
              <td className="w-1 !pr-5">
                {typeof keyCombo === 'string' ? (
                  <KeyCombo combo={keyCombo} />
                ) : (
                  <div className="flex flex-col gap-2">
                    {keyCombo.map((kc) => (
                      <KeyCombo combo={kc} key={kc} />
                    ))}
                  </div>
                )}
              </td>
              <td>
                <Markdown>{action}</Markdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

function KeyCombo({ combo }: { combo: string }) {
  return (
    <div className="flex items-baseline gap-0.5">
      {combo.split('+').map((key, index) => (
        <React.Fragment key={key}>
          {index > 0 && <div className="!text-sm text-gray-600">+</div>}
          <KeyboardKey key={key}>{key}</KeyboardKey>
        </React.Fragment>
      ))}
    </div>
  );
}
