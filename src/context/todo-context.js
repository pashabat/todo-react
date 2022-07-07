import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from '../reducer/todo-reducer';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
    const [todoList, dispatch] = useReducer(todoReducer, undefined, () => {
        const items = localStorage.getItem('todo-list-items') || '[]';
        return JSON.parse(items);
    });

    useEffect(() => {
        localStorage.setItem('todo-list-items', JSON.stringify(todoList));
    }, [todoList]);

    const value = {
        todoList,
        addTodo: (todo) => dispatch({ type: 'ADD', payload: todo }),
        delTodo: (id) => dispatch({ type: 'DEL', payload: id }),
    };

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    );
}
