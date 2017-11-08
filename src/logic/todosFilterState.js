export const SHOW_ALL = 'qgo/assessment/SHOW_ALL';
export const TOGGLE_FILTER = 'qgo/assessment/TOGGLE_FILTER';

export const toggleFilter = () => {
  return { type: TOGGLE_FILTER };
};

export const initialState = SHOW_ALL;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
};

export default reducer;