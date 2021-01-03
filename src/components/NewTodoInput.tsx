import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  resetTextFilter,
  setTextFilter,
  toggleDoneFilter,
} from '../store/filter/filterActions';
import { getTextFilter } from '../store/filter/filterSelectors';
import { addTodo } from '../store/todos/todosActions';
import { DeleteButton } from './DeleteButton';

const StyledForm = styled.form((props) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0 5px',
  overflow: 'hidden',
  gap: '10px',
  flexWrap: 'wrap',
}));

const StyledInput = styled.input((props) => ({
  fontSize: '1.2rem',
  border: 0,
  outline: 0,
  minWidth: 100,
  flex: '1 1 auto',
}));

const StyledInputGroup = styled.div((props) => ({
  display: 'flex',
  outline: 'none',
  borderBottom: '1px solid black',
  marginRight: '8px',
  flex: '1 1 120px',
  minWidth: 120,
}));

const StyledAddButton = styled.button((props) => ({
  border: 'none',
  textDecoration: 'none',
  outline: 'none',
  padding: '14px 30px',
  cursor: 'pointer',
  lineHeight: 0,
  background: 'linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%)',
  backgroundColor: '#2dabf9',
  borderRadius: '2px',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%)',
    backgroundColor: '#0688fa',
  },
}));

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

  const clearButtonHandler = (): void => {
    dispatch(resetTextFilter());
  };

  const doneTodoToggleHandler = (): void => {
    dispatch(toggleDoneFilter());
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInputGroup>
        <StyledInput
          type="text"
          value={text}
          onChange={inputChangeHandler}
          placeholder="add/find"
        ></StyledInput>
        <DeleteButton onClick={clearButtonHandler} title="Clear input" />
      </StyledInputGroup>
      <StyledAddButton>Add</StyledAddButton>
      <input
        onChange={doneTodoToggleHandler}
        title="Hide completed todos"
        type="checkbox"
      ></input>
    </StyledForm>
  );
};
