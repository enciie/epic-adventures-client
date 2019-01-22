const initialState = {
    current: {},
    all: []
}

export default function tripsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TRIPS':
            console.log('FETCH_TRIPS...', { ...state, all: action.payload })
            return { ...state, all: action.payload }

        case 'FETCH_TRIP':
            console.log('FETCH_TRIP...', { ...state, current: action.payload })
            return { ...state, current: action.payload }

        case 'CREATE_TRIP':
            console.log('CREATE_TRIP...', { ...state, all: [...state.all, action.payload], current: action.payload })
            return { ...state, all: [...state.all, action.payload], current: action.payload }

        case 'EDIT_TRIP':
            let all = [...state.all]

            let idx = all.findIndex(trip => trip.id === action.payload.id)
            
            all.splice(idx, 1, action.payload)
            console.log('EDIT_TRIP...', { ...state, all: all, current: action.payload } )
            return {...state, all: all, current: action.payload }

        case 'DELETE_TRIP':
            console.log('DELETE_TRIP...', { ...state, all: state.all.filter(trip => trip.id !== action.payload.id), current: {} })
            return { ...state, all: state.all.filter(trip => trip.id !== action.payload.id), current: {} }

        case 'CREATE_COMMENT':

            all = [...state.all]

            idx = all.findIndex(trip => trip.id === action.payload.trip_id)

            all[idx].comments.push(action.payload)
            console.log('CREATE_COMMENT...', { ...state, all: all, current: all[idx] })
            return { ...state, all: all, current: all[idx] }

        case 'DELETE_COMMENT':
            all = [...state.all]
            idx = all.findIndex(trip => trip.id === action.payload.trip_id)
            all[idx].comments = all[idx].comments.filter(comment => comment.id !== action.payload.id)
            console.log('DELETE_COMMENT...', { ...state, all: all, current: all[idx] })
            return { ...state, all: all, current: all[idx] }

        default:
            return state
    }
}
