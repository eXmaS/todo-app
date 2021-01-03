import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

export const NewTodoInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={value} onChange={inputChangeHandler}></input>
      </form>
    </>
  );
};
