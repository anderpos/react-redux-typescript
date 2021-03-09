import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { todo } from '../actions';

export interface storeState {
  todos: todo[];
}

export const reducers = combineReducers<storeState>({
  todos: todosReducer,
});
