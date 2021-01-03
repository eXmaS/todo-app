import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle({
  '*, html': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '"Quicksand",sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
  },
});
