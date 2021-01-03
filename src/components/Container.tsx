import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledSection = styled.section((props) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledMain = styled.main((props) => ({
  width: '100%',
  maxWidth: '500px',
  paddingTop: '64px',
  fontSize: '1.2rem',
}));

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <StyledSection>
      <StyledMain>{children}</StyledMain>
    </StyledSection>
  );
};
