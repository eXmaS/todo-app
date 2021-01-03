import React from 'react';
import { Box } from '../components/Box';
import styled, { DefaultTheme } from 'styled-components';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Props {
  children: React.ReactNode;
}

const StyledDiv = styled.div((props) => ({
  width: '100vw',
  height: '100vh',
}));

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <StyledDiv>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </StyledDiv>
  );
};
