import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { colors } from './variables/colors';

export const globalStyle = css(emotionNormalize, {
  body: {
    fontFamily:
      '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },

  '*::before, *::after, body *, body *::before, body *::after': {
    boxSizing: 'border-box',
  },

  'ul, ol': {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  button: {
    padding: 0,
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
  },

  'button svg': {
    display: 'flex',
  },

  input: {
    width: '100%',
    height: '100%',
    fontSize: '14px',
    backgroundColor: 'transparent',
    outline: 'none',
    appearance: 'none',
    border: 0,
  },

  'input[type!="checkbox"], input[type!="radio"]': {
    padding: '0 16px',
    color: colors.DARK_GRAY,
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    '&::placeholder': {
      color: colors.LIGHT_GRAY,
    },
  },
});
