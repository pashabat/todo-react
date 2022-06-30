import { createRef } from 'react';

export function AddTodo(props) {
    const inputRef = createRef();

    const add = () => {
        const text = inputRef.current.value;
        if (!text) {
            return;
        }
        props.addTodo({
            text,
        });
        inputRef.current.value = '';
    }

    const addWithEnter = (event) => {
        if (event.key === 'Enter') {
            add();
        }
    }

    return (
        <div className="add-todo-form">
            <input placeholder="Add todo item"
                   type="text"
                   className="validate"
                   onKeyPress={addWithEnter}
                   ref={inputRef}
            />
            <button className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={add}
            >Add
            </button>
        </div>
    );
}
