import * as React from 'react';

import { NoticeFlavorType, SizerType } from '@/types';
import { clsw } from '@/utils/clsw';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { asideStyler } from './styles';

interface AsideProps extends React.ComponentProps<'aside'> {
  /** The inner content shown in the Shout */
  children?: React.ReactNode;
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Optional title to put at the top of the Aside */
  heading?: React.ReactNode;
  /** Changes the size of the Shout ("sm", "base", "lg") */
  sizer?: SizerType | SizerType[];
  /** Changes the color of the Shout ("info", "yep", "maybe", "nope") */
  flavor?: NoticeFlavorType;
}

/**
 * Displays some secondary content, typically an "oh, by the way!" relative to
 * the main content.
 * @param props {@link AsideProps}
 */
export function Aside({
  className,
  sizer,
  flavor,
  children,
  ...asideProps
}: AsideProps) {
  const resolvedSizer = useResolvedSizer(sizer);
  const styles = asideStyler({ sizer: resolvedSizer, flavor });

  const context = React.useMemo(
    () =>
      ({
        styles: asideStyler({ sizer: resolvedSizer, flavor }),
        resolvedSizer,
        flavor,
      }) as const,
    [resolvedSizer, flavor],
  );

  return (
    <AsideContext.Provider value={context}>
      <aside
        {...asideProps}
        className={clsw(styles.root(), className)}
        data-nickui-sizer={Array.isArray(sizer) ? sizer.join(',') : sizer}
        data-nickui-resolved-sizer={resolvedSizer}
      >
        {children}
      </aside>
    </AsideContext.Provider>
  );
}

Aside.Heading = AsideHeading;
Aside.Paragraph = AsideParagraph;

const AsideContext = React.createContext<{
  styles: ReturnType<typeof asideStyler>;
  resolvedSizer: ReturnType<typeof useResolvedSizer>;
  flavor?: NoticeFlavorType;
}>({
  styles: asideStyler(),
  resolvedSizer: 'base',
  flavor: 'info',
});

function AsideHeading({
  children,
  className,
  level = 3,
}: {
  /** The content to put in the heading tag */
  children?: React.ReactNode;
  /** Optionally add utility classes */
  className?: string;
  /** Optionally switch to a different heading tag (default is h3) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const { styles } = React.useContext(AsideContext);
  const Heading = `h${level}`;

  return (
    // @ts-expect-error typescript doesn't like that it can't check the props
    // here, but it's right.
    <Heading className={clsw(styles.heading(), className)}>{children}</Heading>
  );
}

function AsideParagraph({
  children,
  className,
}: {
  /** The content to put in the <p> tag */
  children?: React.ReactNode;
  /** Optional add utility classes */
  className?: string;
}) {
  const { styles } = React.useContext(AsideContext);

  return <p className={clsw(styles.paragraph(), className)}>{children}</p>;
}
