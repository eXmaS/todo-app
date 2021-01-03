import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Filter } from '../interfaces/Filter';
import { Todo } from '../interfaces/Todo';
import { filterReducer } from './filter/filterReducer';
import { loadTodos, saveTodos } from './localStorage';
import { todosReducer } from './todos/todosReducer';

export interface StoreState {
  todos: Todo[];
  filter: Filter;
}

const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
  filter: filterReducer,
});

const composedEnhancer = composeWithDevTools();
const localStorageTodos = loadTodos();
const store = createStore(rootReducer, localStorageTodos, composedEnhancer);

store.subscribe(() => {
  saveTodos(store.getState().todos);
});

export default store;
