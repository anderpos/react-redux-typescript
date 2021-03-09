import { todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    case ActionTypes.deleteTodo:
      return state.filter((todo: todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
