import { Todo } from '../../interfaces/Todo';
import { Action } from './todosActions';

const initialState: Todo[] = [];

export const todosReducer = (state = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload];
    }
    case 'REMOVE_TODO': {
      return state.filter((x) => x.id !== action.payload);
    }
    case 'TOGGLE_TODO': {
      return state.map((x) => {
        if (x.id !== action.payload) {
          return x;
        }

        return { ...x, done: !x.done };
      });
    }
    default:
      return state;
  }
};
