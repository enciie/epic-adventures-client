const initialState = {
    current: {},
    all: []
}

export default function tripsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TRIPS':
            return { ...state, all: action.payload }

        case 'CREATE_TRIP':
            return { ...state, all: [...state.all, action.payload] }

        case 'DELETE_TRIP':
            return { ...state, all: state.all.filter(trip => trip.id !== action.payload.id) }

        case 'CREATE_COMMENT':
            let all = [...state.all]
            let idx = all.findIndex(trip => trip.id === action.payload.trip_id)
            all[idx].comments.push(action.payload)

            return { ...state, all }

        case 'DELETE_COMMENT':
            all = [...state.all]
            idx = all.findIndex(trip => trip.id === action.payload.trip_id)
            all[idx].comments = all[idx].comments.filter(comment => comment.id !== action.payload.id)

            return { ...state, all }
        default: return state
    }
}