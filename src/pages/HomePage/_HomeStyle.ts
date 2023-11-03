import { styled } from '@stitches/react';

export const StyledContainer = styled('div', {
  width: '100%',
  maxWidth: 350,
  padding: '26px 32px 108px 31px',
  background: '$B000',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 19,
});

export const StyledContentTitle = styled('div', {
  width: '100%',
  padding: '20px 0 21px',
  background: '$B100',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
