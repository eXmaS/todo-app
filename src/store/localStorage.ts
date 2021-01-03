import debounce from 'lodash/debounce';
import { StoreState } from '.';
import { Todo } from '../interfaces/Todo';

export const saveTodos = debounce(
  (todos: Todo[]) => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch {}
  },
  500,
  { leading: true, trailing: true }
);

export const loadTodos = (): { todos: StoreState['todos'] } => {
  try {
    return {
      todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    };
  } catch {
    return { todos: [] };
  }
};
