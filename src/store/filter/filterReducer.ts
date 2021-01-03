import { Filter } from '../../interfaces/Filter';
import { Action } from './filterActions';

const initialState: Filter = {
  text: '',
  hideDone: false,
};

export const filterReducer = (state = initialState, action: Action): Filter => {
  switch (action.type) {
    case 'SET_TEXT': {
      return { ...state, text: action.payload };
    }
    case 'TOGGLE_DONE': {
      return { ...state, hideDone: !state.hideDone };
    }
    default:
      return state;
  }
};
