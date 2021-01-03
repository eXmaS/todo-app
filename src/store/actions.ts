import { Todo } from '../interfaces/Todo';

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: Todo;
}

interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  payload: number;
}

export type Action = AddTodoAction | RemoveTodoAction;

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
