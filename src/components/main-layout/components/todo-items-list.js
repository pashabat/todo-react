import { TodoItem } from "./todo-item";
import { useContext } from 'react';
import { TodoContext } from '../../../context/todo-context';

export function TodoItemsList(props) {
    const { todoList, filterType } = useContext(TodoContext);

    return (
        <ul className="collection items-list">
            {todoList
                .filter((todo) => todo.status === filterType || !filterType)
                .map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    )
}
