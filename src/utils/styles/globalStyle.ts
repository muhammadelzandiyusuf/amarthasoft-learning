import { globalCss } from './stitches.config';

export default globalCss({
  '*': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',
    boxSizing: 'border-box',
    fontFamily: '$primary',
  },
  body: {
    margin: 0,
    padding: 0,
    fontSize: 16,
    fontWeight: 400,
    color: '$N500',
    letterSpacing: 0.048,
    backgroundColor: '$N000',
  },
  a: {
    color: '$P300',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    lineHeight: 'inherit',
    cursor: 'pointer',
  },
});
