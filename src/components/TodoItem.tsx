import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../interfaces/Todo';
import { removeTodo, toggleTodoDone } from '../store/todos/todosActions';
import { Box } from './Box';
import { DeleteButton } from './DeleteButton';
import { TodoText } from './TodoText';

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Box mt={16}>
      <TodoText todo={todo} onClick={() => dispatch(toggleTodoDone(todo.id))} />
      <DeleteButton
        title="Delete"
        onClick={() => dispatch(removeTodo(todo.id))}
      />
    </Box>
  );
};
