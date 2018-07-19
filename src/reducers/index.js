import * as types from '../Constants/ActionTypes'
export default (state = [0, 0, 0], action) => {
    switch (action.type) {
        case types.INCREMENT:
            {
                const newState = [...state];
                newState[action.index]++;
                return newState;
            }

        case types.DECREMENT:
            {
                const newState = [...state];
                newState[action.index]--;
                return newState;
            }

        case types.MULTIPLE:
            {
                const newState = [...state];
                newState[action.index] *= action.multipler;
                return newState;
            }

        case types.DIVIDED:
            {
                const newState = [...state];
                newState[action.index] /= action.multipler;
                return newState;
            }

        default:
            return state
    }
}