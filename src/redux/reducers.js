import { combineReducers } from 'redux';
import todoReducer from '../logic/todos';
import todoFilterReducer from '../logic/todosFilterState';

export default function createReducer() {
  return combineReducers({
    todos: todoReducer,
    hideComplete: todoFilterReducer
  });
}
