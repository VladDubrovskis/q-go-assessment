import reducer, { initialState } from '../todosFilter';

describe('todos filter reducer', () => {
  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });
});