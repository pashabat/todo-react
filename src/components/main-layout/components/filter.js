import { useContext } from 'react';
import { TodoContext } from '../../../context/todo-context';
import { filterValues } from '../../../types/filter-values';

export function Filter(props) {
    const { filterType, setFilterType } = useContext(TodoContext);

    const updateType = (event) => {
        setFilterType(event.target.dataset.type);
    }

    return (
        <div className="filter-todo-items">
            <label>
                <input name="group1"
                       type="radio"
                       data-type={filterValues.new}
                       checked={filterType === filterValues.new}
                       onChange={updateType}
                />
                <span>New</span>
            </label>

            <label>
                <input name="group1"
                       type="radio"
                       data-type={filterValues.done}
                       checked={filterType === filterValues.done}
                       onChange={updateType}
                />
                <span>Done</span>
            </label>

            <label>
                <input name="group1"
                       type="radio"
                       data-type=""
                       checked={filterType === ''}
                       onChange={updateType}
                />
                <span>All</span>
            </label>
        </div>
    );
}
