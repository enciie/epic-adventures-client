const initialState = {
    current: {},
    userTrips: [],
    all: []
}

let all;
let idx;
let newState;

export default function tripsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TRIPS':
            return { ...state, all: action.payload }

        case 'FETCH_TRIP':
            return { ...state, current: action.payload }

        // case 'FETCH_USER_TRIPS':
        // debugger;
        //     return { ...state, userTrips: action.payload }

        case 'CREATE_TRIP':
            return { ...state, all: [...state.all, action.payload], current: action.payload }

        case 'EDIT_TRIP':
            newState = [...state.all]
            idx = all.findIndex(trip => trip.id === action.payload.trip_id)
            newState.splice(idx, 1, action.payload)

            return {
                ...state,
                all: newState,
                current: action.payload
            }

        case 'DELETE_TRIP':
        debugger;
            return { ...state, all: state.all.filter(trip => trip.id !== action.payload.id) }

        case 'CREATE_COMMENT':
            all = [...state.all]
            idx = all.findIndex(trip => trip.id === action.payload.trip_id)
            all[idx].comments.push(action.payload)
            return { ...state, current: all[idx] }

        case 'DELETE_COMMENT':
            all = [...state.all]
            idx = all.findIndex(trip => trip.id === action.payload.trip_id)
            all[idx].comments = all[idx].comments.filter(comment => comment.id !== action.payload.id)
            return { ...state, current: all[idx] }

        default: 
            return state
    }
}