import {Dispatch} from "redux";
import axios from 'axios';
import {ActionTypes} from "../action-types";
import {ToDO} from "../../types/todo";

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface FetchTodosAction {
    type: ActionTypes.FETCH_TODOS,
    payload: ToDO[]
}

export interface RemoveTodoAction {
    type: ActionTypes.REMOVE_TODO,
    payload: number
}

export const fetchTodosAction = () => {
    return async (dispatch: Dispatch) => {
        const { data } = await axios.get<ToDO[]>(url);

        dispatch<FetchTodosAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: data
        });
    }
};

export const removeTodoAction = (id: number): RemoveTodoAction => {
    return {
        type: ActionTypes.REMOVE_TODO,
        payload: id
    }
};
