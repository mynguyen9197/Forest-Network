import { combineReducers } from 'redux'
import * as follow from './followReducer'

const reducer = combineReducers({
	followers: follow.loadFollower,
	following: follow.loadFollowing,
})

export default reducer