import reducer, { initialState, setFilter } from '../todosFilter';

describe('todos filter reducer', () => {
  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should use initial state if state not provided', () => {
    const state = 'DEFAULT';
    const filterName = 'DONE';
    const mockAction = setFilter(filterName);
    const result = reducer(state, mockAction);
    expect(result).toEqual(filterName);
  });
});