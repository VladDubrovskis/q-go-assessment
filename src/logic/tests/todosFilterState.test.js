import reducer, { initialState, toggleFilter } from '../todosFilterState';

describe('todos filter reducer', () => {
  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should set the filter for TOGGLE_FILTER', () => {
    const state = true;
    const mockAction = toggleFilter();
    const result = reducer(state, mockAction);
    expect(result).toEqual(false);
  });
});