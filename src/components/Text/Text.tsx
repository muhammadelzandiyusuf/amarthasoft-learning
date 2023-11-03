import { ElementRef, ForwardedRef, HTMLAttributes, forwardRef } from 'react';

import type { CSS, CSSProperties } from '@stitches/react';

import { styled, config } from '@/utils/styles/stitches.config';

export type TextInstance = ElementRef<typeof Styled>;
export type TextProps = HTMLAttributes<HTMLSpanElement> & {
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
  size?: number | string;
  lineHeight?: number;
  weight?: number;
  color?: CSS<typeof config>['color'];
  whiteSpace?: CSSProperties['whiteSpace'];
  align?: CSSProperties['textAlign'];
  css?: CSS<typeof config>;
};

const Styled = styled('span', {
  variants: {
    fullWidth: {
      true: { width: '100%', display: 'block' },
    },
  },
  color: 'inherit',
  fontFamily: '$primary',
  display: 'inline-block',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  marginInlineStart: 0,
  marginInlineEnd: 0,
  marginLeft: 0,
  marginRight: 0,
  wordBreak: 'break-word',
  letterSpacing: '0.01em',
  transition: 'color 0.2s ease-in-out',
});

function parseSize(v: TextProps['size']) {
  if (typeof v === 'number') return `${v}px`;
  return v;
}

function Text(
  { as, children, color, whiteSpace, weight = 400, size: sizeProp = 14, css, ...props }: TextProps,
  ref: ForwardedRef<TextInstance>,
) {
  const size = parseSize(sizeProp);
  const lineHeight = size == 'inherit' ? 'inherit' : `calc(${parseSize(size)} + 6px)`;

  return (
    <Styled
      {...props}
      ref={ref}
      as={as}
      css={{
        ...(color && { color }),
        ...(whiteSpace && { whiteSpace }),
        fontSize: size,
        fontWeight: weight,
        lineHeight,
        ...css,
      }}
    >
      {children}
    </Styled>
  );
}

export default forwardRef(Text);
