import {combineReducers} from 'redux'
import authReducer from './auth.js'
import currentUserReducer from './currentUser.js'
import questionsReducer from './question.js'
export default combineReducers({
    authReducer,currentUserReducer,questionsReducer
})