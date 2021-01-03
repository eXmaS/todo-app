import React from 'react';
import styled from 'styled-components';

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
  marginTop: '64px',
  padding: '20px',
  fontSize: '1.2rem',
  boxShadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
}));

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <StyledSection>
      <StyledMain>{children}</StyledMain>
    </StyledSection>
  );
};
