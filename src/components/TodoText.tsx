import React from 'react';
import styled from 'styled-components';
import { Todo } from '../interfaces/Todo';

interface Props {
  todo: Todo;
  onClick: () => void;
}

interface StyleProps {
  done: boolean;
}

const StyledP = styled.p<StyleProps>((props) => ({
  flexGrow: 1,
  color: props.done ? 'gray' : 'black',
  cursor: 'pointer',
  userSelect: 'none',
  wordBreak: 'break-word',
  fontWeight: props.done ? undefined : 'bold',
  textDecoration: props.done ? 'line-through' : undefined,
  transition: '0.3s all',
}));

export const TodoText: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <StyledP
      done={todo.done}
      role="button"
      aria-label="Toggle done"
      onClick={onClick}
    >
      {todo.text}
    </StyledP>
  );
};
