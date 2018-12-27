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

export const loadOwner = (state = { owner:{} }, action) => {
	switch(action.type){
		case 'LOAD_OWNER':
			return {
				...state,
				owner: {...state.owner, ...action.owner}
			}
		default:
			return state
	}
}

export const loadBalance = (state = { pay:{}, recv: {} }, action) => {
	switch(action.type){
		case 'LOAD_BALANCE':
			return {
				...state,
				pay: action.pay,
				recv: action.recv
			}
		default:
			return state
	}
}

export const loadSequence = (state = { sequence: {} }, action) => {
	switch(action.type){
		case 'LOAD_SEQUENCE':
			return {
				...state,
				sequence: action.sequence
			}
		default:
			return state
	}
}