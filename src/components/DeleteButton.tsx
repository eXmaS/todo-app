import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const StyledButton = styled.button((props) => ({}));

export const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <StyledButton aria-label="Delete" onClick={onClick}>
      x
    </StyledButton>
  );
};
