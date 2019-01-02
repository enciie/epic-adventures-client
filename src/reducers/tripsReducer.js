const initialState = {
    trip: {},
    trips: []
}

export default function tripsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TRIPS':
            return { ...state, trips: action.payload }

        case 'FETCH_TRIP':
        debugger;
            return { ...state, trip: action.payload }

        case 'CREATE_TRIP':
            return { ...state, trips: [...state.trips, action.payload] }

        case 'DELETE_TRIP':
            return { ...state, trips: state.trips.filter(trip => trip.id !== action.payload.id) }

        case 'CREATE_COMMENT':
        debugger;
            let trips = [...state.trips]
            let idx = trips.findIndex(trip => trip.id === action.payload.trip_id)
            trips[idx].comments.push(action.payload)

            return { ...state, trips }

        case 'DELETE_COMMENT':
            trips = [...state.trips]
            idx = trips.findIndex(trip => trip.id === action.payload.trip_id)
            trips[idx].comments = trips[idx].comments.filter(comment => comment.id !== action.payload.id)

            return { ...state, trips }

        default: return state
    }
}