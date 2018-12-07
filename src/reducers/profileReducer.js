export const profileReducer = (state = { owner:{} }, action) => {
	switch(action.type){
		case 'LOAD_OWNER':
			return {
				...state,
				owner: {...state.owner, ...action.owner}
			}
		case 'UPDATE_PROFILE':
			return {
				...state,
				profile: action.profile
			}
		default:
			return state
	}
}