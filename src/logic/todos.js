export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';
export const TOGGLE_ITEM = 'qgo/assessment/TOGGLE_ITEM';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
    return { type: DELETE_ITEM, id };
};

export const toggleItem = id => {
  return { type: TOGGLE_ITEM, id };
};


export const initialState = {
  items: [
    { id: 1, content: 'Call mum', complete: false },
    { id: 2, content: 'Buy cat food', complete: false },
    { id: 3, content: 'Water the plants', complete: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        complete: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.id)],
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: [...state.items.map((item) => {
          if(item.id === action.id) {
            return Object.assign({}, item, {
              complete: !item.complete
            })
          }
          return item;
        })]
      };
    default:
      return state;
  }
};

export default reducer;
