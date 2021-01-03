interface SetTextFilterAction {
  type: 'SET_TEXT';
  payload: string;
}

interface ToggleDoneFilterAction {
  type: 'TOGGLE_DONE';
}

export type Action = SetTextFilterAction | ToggleDoneFilterAction;

export const setTextFilter = (text: string): SetTextFilterAction => {
  return {
    type: 'SET_TEXT',
    payload: text.toLowerCase(),
  };
};

export const resetTextFilter = (): SetTextFilterAction => {
  return setTextFilter('');
};

export const toggleDoneFilter = (): ToggleDoneFilterAction => {
  return {
    type: 'TOGGLE_DONE',
  };
};
