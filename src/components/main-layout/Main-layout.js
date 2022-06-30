import './main-layout.scss';
import { TodoItemsList } from "../todo-items-list";
import { useEffect, useState } from "react";
import { AddTodo } from "../add-todo";

export function MainLayout() {
    const [todoList, setTodoList] = useState(() => {
        const items = localStorage.getItem('todo-list-items') || '[]';
        return JSON.parse(items);
    });

    useEffect(() => {
        localStorage.setItem('todo-list-items', JSON.stringify(todoList));
    }, [todoList]);

    const addTodo = (todoItem) => {
        setTodoList([todoItem, ...todoList]);
    }

    const delTodo = (index) => {
        setTodoList(todoList.filter((item, i) => i !== index));
    }

    return (
        <div className="main-layout">
            <AddTodo addTodo={addTodo}/>
            <TodoItemsList todoList={todoList} del={delTodo}/>
        </div>
    );
}
