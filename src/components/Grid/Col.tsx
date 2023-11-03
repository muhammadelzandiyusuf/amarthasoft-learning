import { CSSProperties, ForwardedRef, HTMLAttributes, forwardRef, useContext } from 'react';

import type { CSS } from '@stitches/react';

import { styled } from '@/utils/styles/stitches.config';

import RowContext from './RowContext';

export type ColInstance = HTMLDivElement;

type FlexType = number | 'none' | 'auto';
type ColSpanType = number;

export type ColProps = HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
};

const gridColumns = 24;

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

function genLoopGridColumnsStyle(columns = gridColumns) {
  const gridSpanColumnsStyle: Record<
    'span' | 'push' | 'pull' | 'offset' | 'order',
    Record<number, CSS>
  > = {
    span: {},
    push: {},
    pull: {},
    offset: {},
    order: {},
  };

  for (let i = columns; i >= 0; i--) {
    if (i === 0) {
      gridSpanColumnsStyle['span'][i] = { display: 'none' };
      gridSpanColumnsStyle['push'][i] = { insetInlineStart: 'auto' };
      gridSpanColumnsStyle['pull'][i] = { insetInlineEnd: 'auto' };
      gridSpanColumnsStyle['offset'][i] = { marginInlineStart: 0 };
      gridSpanColumnsStyle['order'][i] = { order: 0 };
    } else {
      gridSpanColumnsStyle['span'][i] = {
        display: 'block',
        flex: `0 0 ${(i / columns) * 100}%`,
        maxWidth: `${(i / columns) * 100}%`,
      };

      gridSpanColumnsStyle['push'][i] = { insetInlineStart: `${(i / gridColumns) * 100}%` };
      gridSpanColumnsStyle['pull'][i] = { insetInlineEnd: `${(i / gridColumns) * 100}%` };
      gridSpanColumnsStyle['offset'][i] = { marginInlineStart: `${(i / gridColumns) * 100}%` };
      gridSpanColumnsStyle['order'][i] = { order: i };
    }
  }

  return gridSpanColumnsStyle;
}

const Styled = styled('div', {
  variants: {
    span: genLoopGridColumnsStyle(gridColumns)['span'],
    push: genLoopGridColumnsStyle(gridColumns)['push'],
    pull: genLoopGridColumnsStyle(gridColumns)['pull'],
    offset: genLoopGridColumnsStyle(gridColumns)['offset'],
    order: genLoopGridColumnsStyle(gridColumns)['order'],
  },
  position: 'relative',
  maxWidth: '100%',
  // Prevent columns from collapsing when empty
  minHeight: 1,
});

function Col(
  { as, span, order, offset, push, pull, children, flex, style, ...props }: ColProps,
  ref: ForwardedRef<ColInstance>,
) {
  const { gutter, wrap } = useContext(RowContext);

  const mergedStyle: CSSProperties = {};
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    if (wrap === false) {
      mergedStyle.minWidth = 0;
    }
  }

  return (
    <Styled
      {...props}
      as={as}
      ref={ref}
      span={span}
      order={order}
      offset={offset}
      push={push}
      pull={pull}
      style={{ ...mergedStyle, ...style }}
    >
      {children}
    </Styled>
  );
}

export default forwardRef(Col);
