export function TodoItem(props) {
    return (
        <li className="collection-item">
            <div>
                {props.todo.text}
                <a href="#" onClick={() => props.del(props.index) } className="secondary-content">
                    <i className="material-icons">delete</i>
                </a>
            </div>
        </li>
    )
}
