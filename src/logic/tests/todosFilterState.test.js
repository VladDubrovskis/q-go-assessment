import reducer, { initialState, setFilter } from '../todosFilterState';

describe('todos filter reducer', () => {
  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should set the filter for SET_FILTER', () => {
    const state = 'DEFAULT';
    const filterName = 'DONE';
    const mockAction = setFilter(filterName);
    const result = reducer(state, mockAction);
    expect(result).toEqual(filterName);
  });
});