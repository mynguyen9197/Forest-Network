export const profileReducer = (state = {profile: {}}, action) => {
	
	switch(action.type){
		case 'LOAD_PROFILE':
			return {
				...state,
				profile: action.profile
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