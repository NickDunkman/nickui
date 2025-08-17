import * as React from 'react';

/** A Storybook docBlock that matches the style of Storybook’s ArgsTable */
export function Table({ children }: { children?: React.ReactNode }) {
  return <table className="storybookish-table">{children}</table>;
}
