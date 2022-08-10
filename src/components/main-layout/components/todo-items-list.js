import { TodoItem } from "./todo-item";
import { useContext, useMemo } from 'react';
import { TodoContext } from '../../../context/todo-context';

export function TodoItemsList(props) {
    const { todoList, filterType } = useContext(TodoContext);
    const memoizedFilteredList = useMemo(
        () => todoList
            .filter((todo) => todo.status === filterType || !filterType),
        [filterType, todoList]
    );

    return (
        <ul className="collection items-list">
            {memoizedFilteredList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    )
}
