export const TOGGLE_FILTER = 'qgo/assessment/TOGGLE_FILTER';

export const toggleFilter = () => {
  return { type: TOGGLE_FILTER };
};

export const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
};

export default reducer;