import { CSSProperties, ElementRef, ForwardedRef, HTMLAttributes, forwardRef } from 'react';

import { CSS, styled } from '@stitches/react';

import { config } from '@/utils/styles/stitches.config';

export type SpaceInstance = ElementRef<typeof Styled>;
export type SpaceSize = number | [number, number];
export type SpaceProps = HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'baseline' | 'between';
  size?: SpaceSize;
  direction?: 'vertical' | 'horizontal';
  wrap?: boolean;
  padding?: CSSProperties['padding'];
  css?: CSS<typeof config>;
};

function gap(size?: SpaceSize) {
  if (size === undefined || size === null) return null;

  if (Array.isArray(size) && size.length > 0) {
    const [rowGap, colGap] = size as [number, number];
    return `${rowGap}px ${colGap}px`;
  }

  return `${size}px`;
}

const Styled = styled('div', {
  variants: {
    fullWidth: {
      true: { width: '100%' },
    },
    align: {
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      baseline: { alignItems: 'baseline' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      baseline: { justifyContent: 'baseline' },
      between: { justifyContent: 'space-between' },
    },
    direction: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row' },
    },
    wrap: {
      true: { flexWrap: 'wrap' },
    },
  },
  display: 'inline-flex',
});

function Space(
  { size = 0, padding: paddingProp = 0, children, css, ...props }: SpaceProps,
  ref: ForwardedRef<SpaceInstance>,
) {
  const gapSize = gap(size);
  const padding = typeof paddingProp === 'number' ? `${paddingProp}px` : paddingProp;

  return (
    <Styled
      {...props}
      ref={ref}
      css={{
        ...css,
        ...(gapSize && { gap: gapSize }),
        ...(padding && { padding }),
      }}
    >
      {children}
    </Styled>
  );
}

export default forwardRef(Space);
