jest.mock('redux');
jest.mock('../../logic/todos');

import todosReducer from '../../logic/todos';
import createReducer from '../reducers';
import { combineReducers } from 'redux';

combineReducers.mockImplementation((input) => input);

describe('reducers', () => {
  it('should setup the reducers', () => {
    expect(createReducer()).toEqual({
      todos: todosReducer
    });
  })
});