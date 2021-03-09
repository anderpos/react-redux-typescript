import { fetchTodosAction, deleteTodoAction } from '../actions';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = fetchTodosAction | deleteTodoAction;
