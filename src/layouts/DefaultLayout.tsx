import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface Props {
  children: React.ReactNode;
}

const StyledDiv = styled.div((props) => ({
  width: '100%',
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
