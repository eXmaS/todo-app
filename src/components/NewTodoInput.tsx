import React, { useState } from 'react';

export const NewTodoInput: React.FC = () => {
  const [value, setValue] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
