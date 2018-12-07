export const editReducer = (state = {isEdit: false}, action) => {
	switch(action.type){
		case 'FLAT_EDIT':
			return {
				...state,
				isEdit: action.isEdit,
			}
		default:
			return state
	}
} 
