export const paymentReducer = (state = {send:[], receive: [] }, action) => {
	switch(action.type){
		case 'LOAD_PAYMENTS':
		const send = action.send
		const receive = action.receive
			return {
				...state,
				send: send,
				receive: receive,
			}
		default:
			return state
	}
}