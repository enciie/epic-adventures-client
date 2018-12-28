const defaultState = {
    current: {},
    all: []
}

export default function tripsReducer(state = defaultState, action) {
    switch(action.type) {
        case 'GET_TRIPS':
        return { ...state, all: action.payload }

    default:
        return state;
    }
}