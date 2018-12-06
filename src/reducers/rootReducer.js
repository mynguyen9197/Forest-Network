import { combineReducers } from 'redux'
import * as follow from './followReducer'
import * as home from './homeReducer.js'
import { profileReducer } from './profileReducer'


const reducer = combineReducers({
	followers: follow.loadFollower,
	following: follow.loadFollowing,
	posts: home.loadPost,
	recommands: home.loadRecommand,
	profile: profileReducer,
})

export default reducer