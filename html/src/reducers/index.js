import { combineReducers } from 'redux'
import users from './user'
import num from './num'

const reducers = combineReducers({
    users,
    num
})
export default reducers;