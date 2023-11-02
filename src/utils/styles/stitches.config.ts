import { createStitches } from '@stitches/react';

import { default as mainTheme } from './theme';

const { styled, getCssText, globalCss, keyframes, config } = createStitches({
  theme: mainTheme,
});

export { styled, getCssText, globalCss, keyframes, config };
