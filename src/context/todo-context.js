import { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from '../reducer/todo-reducer';
import { filterValues } from '../types/filter-values';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
    const [todoList, dispatch] = useReducer(todoReducer, undefined, () => {
        const items = localStorage.getItem('todo-list-items') || '[]';
        return JSON.parse(items);
    });

    const [filterType, setFilterType] = useState(filterValues.new);

    useEffect(() => {
        localStorage.setItem('todo-list-items', JSON.stringify(todoList));
    }, [todoList]);

    const value = {
        todoList,
        addTodo: (todo) => dispatch({ type: 'ADD', payload: todo }),
        delTodo: (id) => dispatch({ type: 'DEL', payload: id }),
        doneTodo: (id) => dispatch({ type: 'DONE', payload: id }),
        undoTodo: (id) => dispatch({ type: 'UNDO', payload: id }),
        filterType,
        setFilterType: (type) => setFilterType(type),
    };

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    );
}
