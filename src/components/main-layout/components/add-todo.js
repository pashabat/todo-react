import { createRef, useContext } from 'react';
import { TodoContext } from '../../../context/todo-context';
import { filterValues } from '../../../types/filter-values';
import { todoAdd } from '../../../actions/todo';

function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function AddTodo(props) {
    const inputRef = createRef();

    const { addTodo, dispatch } = useContext(TodoContext);

    const add = () => {
        const text = inputRef.current.value;
        if (!text) {
            return;
        }
        dispatch(todoAdd({
            text,
            status: filterValues.new,
            id: makeId(5),
        }));
        // addTodo({
        //     text,
        //     status: filterValues.new,
        //     id: makeId(5),
        // });
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
