import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import todosReducer from './reducer';
import { loadTodos, saveTodos } from './localStorage';
import { Todo } from '../interfaces/Todo';

export interface StoreState {
  todos: Todo[];
}

const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
});

const composedEnhancer = composeWithDevTools();
const localStorageTodos = loadTodos();
const store = createStore(rootReducer, localStorageTodos, composedEnhancer);

store.subscribe(() => {
  saveTodos(store.getState().todos);
});

export default store;
