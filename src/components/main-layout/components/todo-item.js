import { useContext } from 'react';
import { TodoContext } from '../../../context/todo-context';

export function TodoItem(props) {
    const { delTodo } = useContext(TodoContext);

    return (
        <li className="collection-item">
            <div>
                {props.todo.text}
                <a href="#" onClick={() => delTodo(props.index)} className="secondary-content">
                    <i className="material-icons">delete</i>
                </a>
            </div>
        </li>
    )
}
