const defaultState = {
    current: {}
}

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case 'GET_USER':
            return { ...state, current: action.payload }
        default: return state
    }
}