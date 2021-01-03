import { format } from 'prettier';
import { Todo } from '../interfaces/Todo';
import { Action } from './actions';

const initialState: Todo[] = [];

const reducer = (state = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload];
    }
    case 'REMOVE_TODO': {
      return state.filter((x) => x.id !== action.payload);
    }
    default:
      return state;
  }
};

export default reducer;
