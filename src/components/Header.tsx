import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';

const StyledHeader = styled.header((props) => ({
  width: '100%',
  display: 'flex',
  padding: '16px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  boxShadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
}));

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Box>
        <h1>Todo App</h1>
      </Box>
    </StyledHeader>
  );
};
