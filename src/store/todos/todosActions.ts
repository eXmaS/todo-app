import { Todo } from '../../interfaces/Todo';

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: Todo;
}

interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  payload: number;
}

interface ToggleTodoDoneAction {
  type: 'TOGGLE_TODO';
  payload: number;
}

export type Action = AddTodoAction | RemoveTodoAction | ToggleTodoDoneAction;

export const addTodo = (text: string): AddTodoAction => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),
      done: false,
      text: text,
    },
  };
};

export const removeTodo = (id: number): RemoveTodoAction => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};

export const toggleTodoDone = (id: number): ToggleTodoDoneAction => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};
