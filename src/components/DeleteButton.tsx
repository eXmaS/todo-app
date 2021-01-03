import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  title: string;
}

const StyledButton = styled.button((props) => ({
  border: 'none',
  textDecoration: 'none',
  background: 'none',
  outline: 'none',
  padding: '10px',
  cursor: 'pointer',
  width: '30px',
  height: '30px',
  lineHeight: 0,
}));

export const DeleteButton: React.FC<Props> = ({ onClick, title }) => {
  return (
    <StyledButton
      aria-label={title}
      title={title}
      onClick={onClick}
      type="button"
    >
      x
    </StyledButton>
  );
};
