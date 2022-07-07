import { TodoItem } from "./todo-item";
import { useContext } from 'react';
import { TodoContext } from '../../../context/todo-context';

export function TodoItemsList(props) {
    const { todoList } = useContext(TodoContext);

    return (
        <ul className="collection items-list">
            {todoList.map((todo, index) => <TodoItem index={index} todo={todo}/>)}
        </ul>
    )
}
