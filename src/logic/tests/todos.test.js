import reducer, { initialState, addItem, deleteItem, toggleItem } from '../todos';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete: false },
        { id: 2, content: 'second', complete: false },
      ]
    }
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
    expect(result.items[2].complete).toEqual(false);
  });

  it('should delete an item on DELETE_ITEM', () => {
    const state = {
        items: [
            { id: 1, content: 'first' },
            { id: 2, content: 'second' },
        ]
    }
    const mockAction = deleteItem(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toEqual(2);
    expect(result.items[0].content).toEqual('second');
  });

  it('should toggle item complete flag on TOGGLE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete: false },
        { id: 2, content: 'second', complete: true },
      ]
    }
    const mockAction = toggleItem(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[1].id).toEqual(2);
    expect(result.items[1].complete).toEqual(false);
  });

});
