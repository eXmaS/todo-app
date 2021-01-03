import { StoreState } from '.';
import { Todo } from '../interfaces/Todo';

export const saveTodos = (todos: Todo[]): void => {
  console.log('TODOS SAVED');

  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch {}
};

export const loadTodos = (): StoreState => {
  try {
    return {
      todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    };
  } catch {
    return { todos: [] };
  }
};
