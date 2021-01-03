import { StoreState } from '..';

export const getTextFilter = (state: StoreState): string => {
  return state.filter.text;
};

export const getHideDone = (state: StoreState): boolean => {
  return state.filter.hideDone;
};
