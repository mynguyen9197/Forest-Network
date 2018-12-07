import { combineReducers } from 'redux'

import * as follow from './followReducer'
import * as home from './homeReducer'
import * as profile from './profileReducer'
import * as edit from './editReducer'


const reducer = combineReducers({
	followers: follow.loadFollower,
	following: follow.loadFollowing,
	posts: home.loadPost,
	recommands: home.loadRecommand,
	owner: home.loadOwner,
	profile: profile.profileReducer,
	flatEdit: edit.editReducer,
})

export default reducer