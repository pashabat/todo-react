export function todoReducer(state, { type, payload }) {
    switch (type) {
        case 'ADD':
            return [payload, ...state];

        case 'DEL':
            return state.filter((item, i) => i !== payload)

        default:
            return state;
    }
}
