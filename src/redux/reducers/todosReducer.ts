import { ToDO } from '../../types/todo';
import { FetchTodosAction, RemoveTodoAction } from '../actions';
import { ActionTypes } from '../action-types';

type Action = FetchTodosAction | RemoveTodoAction;

export const todosReducer = (state: ToDO[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
