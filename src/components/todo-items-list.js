import { TodoItem } from "./todo-item";

export function TodoItemsList(props) {
    return (
        <ul className="collection items-list">
            {props.todoList.map((todo, index) => <TodoItem index={index} todo={todo} del={props.del}/>)}
        </ul>
    )
}
