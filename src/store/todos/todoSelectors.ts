import { StoreState } from '..';
import { Todo } from '../../interfaces/Todo';

export const getTodos = (state: StoreState): Todo[] => {
  return state.todos;
};
