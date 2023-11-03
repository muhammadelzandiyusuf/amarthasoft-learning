import { styled } from '@stitches/react';

export const StyledContainerMonth = styled('div', {
  width: '100%',
  padding: '8px 16px',
  background: '$B200',
  borderRadius: '8px 8px 0px 0px',
});

export const StyledContainerMonthItem = styled('div', {
  width: '100%',
  padding: 9,
  variants: {
    variant: {
      true: {
        background: '$B400',
      },
      false: {
        background: '$B300',
      },
    },
  },
});
