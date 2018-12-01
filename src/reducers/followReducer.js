export const loadFollower = (state = { followers: [] }, action) => {
	
	switch(action.type){
		case 'LOAD_FOLLOWERS':
			return {
				...state,
				followers: [...state.followers, ...action.followers]
			}
		default:
			return state
	}
}

export const loadFollowing = (state = { following:[] }, action) => {
	switch(action.type){
		case 'LOAD_FOLLOWING':
			return {
				...state,
				following: [...state.following, ...action.following]
			}
		default:
			return state
	}
}