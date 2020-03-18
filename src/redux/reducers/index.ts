import {combineReducers} from "redux";
import {todosReducer} from "./todosReducer";
import {ToDO} from "../../types/todo";

export interface StoreState {
    todos: ToDO[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});
