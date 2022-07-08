import { useContext } from 'react';
import { TodoContext } from '../../../context/todo-context';

export function TodoItem(props) {
    const { delTodo, doneTodo, undoTodo } = useContext(TodoContext);

    return (
        <li className="collection-item">
            <div>
                {props.todo.text}
                <a href="#" onClick={() => delTodo(props.todo.id)} className="secondary-content">
                    <i className="material-icons">delete</i>
                </a>
                {
                    props.todo.status === 'done' ?
                        (<a href="#" onClick={() => undoTodo(props.todo.id)} className="secondary-content">
                            <i className="material-icons">undo</i>
                        </a>)
                        :
                        (<a href="#" onClick={() => doneTodo(props.todo.id)} className="secondary-content">
                            <i className="material-icons">assignment_turned_in</i>
                        </a>)
                }
            </div>
        </li>
    )
}
