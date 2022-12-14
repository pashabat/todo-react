import { filterValues } from '../types/filter-values';

export const todoReducerTypes = {
    ADD: 'ADD'
}
// or
export const TODO_ADD = 'TODO_ADD';

export function todoReducer(state, { type, payload }) {
    switch (type) {
        case TODO_ADD:
            return [payload, ...state];

        case 'DEL':
            return state.filter((item) => item.id !== payload)

        case 'DONE':
            return state.map((item) => {
                const newItem = { ...item };
                if (item.id === payload) {
                    newItem.status = filterValues.done;
                }
                return newItem;
            });

        case 'UNDO':
            return state.map((item) => {
                const newItem = { ...item };
                if (item.id === payload) {
                    newItem.status = filterValues.new;
                }
                return newItem;
            });

        default:
            return state;
    }
}
