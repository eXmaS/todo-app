import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetTextFilter,
  setTextFilter,
  toggleDoneFilter,
} from '../store/filter/filterActions';
import { getTextFilter } from '../store/filter/filterSelectors';
import { addTodo } from '../store/todos/todosActions';

export const NewTodoInput: React.FC = () => {
  const text = useSelector(getTextFilter);
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const todoText = text.trim();
    if (todoText.length === 0) {
      return;
    }

    dispatch(addTodo(todoText));
    dispatch(resetTextFilter());
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setTextFilter(e.target.value));
  };

  const clearButtonHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(resetTextFilter());
  };

  const doneTodoToggleHandler = (): void => {
    dispatch(toggleDoneFilter());
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={inputChangeHandler}
        placeholder="add/find"
      ></input>
      <button onClick={clearButtonHandler}>x</button>
      <button>Add new todo</button>
      <input
        onChange={doneTodoToggleHandler}
        title="Hide completed todos"
        type="checkbox"
      ></input>
    </form>
  );
};
