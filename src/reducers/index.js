import { combineReducers } from 'redux'

import userReducer from './userReducer'
import tripsReducer from './tripsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    trips: tripsReducer
})

export default rootReducer