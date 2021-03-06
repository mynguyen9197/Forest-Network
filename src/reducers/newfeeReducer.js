export const loadPost = (state = { posts: [] }, action) => {
	switch(action.type){
		case 'LOAD_POSTS':
			return {
				...state,
				posts: [...state.posts, ...action.posts]
			}
		default:
			return state
	}
}

export const loadRecommand = (state = { recommands:[] }, action) => {
	switch(action.type){
		case 'LOAD_RECOMMAND':
			return {
				...state,
				recommands: [...state.recommands, ...action.recommands]
			}
		default:
			return state
	}
}

