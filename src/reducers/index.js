export default (state = [0, 0, 0], action) => {
    switch (action.type) {
        case 'INCREMENT':
            {
                const newState = [...state];
                newState[action.index]++;
                return newState;
            }

        case 'DECREMENT':
            {
                const newState = [...state];
                newState[action.index]--;
                return newState;
            }

        case 'MULTIPLIED':
            {
                const newState = [...state];
                newState[action.index] *= action.multipler;
                return newState;
            }

        case 'DIVIDED':
            {
                const newState = [...state];
                newState[action.index] /= action.multipler;
                return newState;
            }

        default:
            return state
    }
}