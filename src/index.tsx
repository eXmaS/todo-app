import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
