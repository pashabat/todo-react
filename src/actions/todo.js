import { TODO_ADD } from '../reducer/todo-reducer';

export const todoAdd = (todo) => {
    return {
        type: TODO_ADD,
        payload: todo,
    }
}

export const todoDel = (todo) => {
    return {
        type: TODO_ADD,
        payload: todo,
    }
}