import React from 'react';
import { Todo } from '../interfaces/Todo';
import { Box } from './Box';

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return <Box>{todo.text}</Box>;
};
