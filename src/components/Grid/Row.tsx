import {
  CSSProperties,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';

import { styled } from '@/utils/styles/stitches.config';

import RowContext from './RowContext';

type RowAligns = (typeof rowAligns)[number];
type RowJustify = (typeof rowJustifies)[number];
type Gap = number | undefined;

export type RowInstance = HTMLDivElement;

export type Gutter = Gap;
export type RowProps = HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
  gutter?: Gutter | [Gutter, Gutter];
  align?: RowAligns;
  justify?: RowJustify;
  wrap?: boolean;
};

const rowAligns = ['top', 'middle', 'bottom', 'stretch'] as const;
const rowJustifies = [
  'start',
  'end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
] as const;

const Styled = styled('div', {
  variants: {
    noWrap: {
      true: {
        flexWrap: 'nowrap',
      },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      'space-around': { justifyContent: 'space-around' },
      'space-between': { justifyContent: 'space-between' },
      'space-evenly': { justifyContent: 'space-evenly' },
    },
    align: {
      top: { alignItems: 'flex-start' },
      middle: { alignItems: 'center' },
      bottom: { alignItems: 'flex-end' },
      stretch: {},
    },
  },
  display: 'flex',
  flexFlow: 'row wrap',
  minWidth: 0,
  '&::before, &::after': {
    display: 'flex',
  },
});

function Row(
  { as, justify, align, style, children, gutter = 0, wrap, ...props }: RowProps,
  ref: ForwardedRef<RowInstance>,
) {
  const getGutter = useCallback((): [Gap, Gap] => {
    const results: [Gap, Gap] = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];

    normalizedGutter.forEach((g, index) => {
      results[index] = g;
    });

    return results;
  }, [gutter]);

  const gutters = getGutter();
  const rowStyle: CSSProperties = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  [, rowStyle.rowGap] = gutters;
  const [gutterH, gutterV] = gutters;
  const rowContext = useMemo(
    () => ({ gutter: [gutterH, gutterV] as [number, number], wrap }),
    [gutterH, gutterV, wrap],
  );

  return (
    <RowContext.Provider value={rowContext}>
      <Styled
        {...props}
        as={as}
        ref={ref}
        noWrap={wrap === false}
        justify={justify}
        align={align}
        style={{ ...rowStyle, ...style }}
      >
        {children}
      </Styled>
    </RowContext.Provider>
  );
}

export default forwardRef(Row);
