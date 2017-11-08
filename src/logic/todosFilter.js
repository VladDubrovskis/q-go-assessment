export const SHOW_ALL = 'qgo/assessment/SHOW_ALL';
export const SET_FILTER = 'qgo/assessment/SET_FILTER';

export const setFilter = value => {
  return { type: SET_FILTER, value };
};

export const initialState = SHOW_ALL;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return state = action.value;
    default:
      return state;
  }
};

export default reducer;