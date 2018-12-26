import { combineReducers } from 'redux'

import * as follow from './followReducer'
import * as home from './homeReducer'
import * as profile from './profileReducer'
import * as edit from './editReducer'
import * as payment from './paymentReducer'

const reducer = combineReducers({
	followers: follow.loadFollower,
	following: follow.loadFollowing,
	posts: home.loadPost,
	recommands: home.loadRecommand,
	owner: home.loadOwner,
	profile: profile.profileReducer,
	flatEdit: edit.editReducer,
	payments: payment.paymentReducer,
	balance: home.loadBalance,
	sequence: home.loadSequence,
	curUser: follow.loadCurUser,
})

export default reducer