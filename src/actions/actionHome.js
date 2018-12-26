import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'

const secret = localStorage.getItem('secret')
const pub = localStorage.getItem('public')

export const loadPost = (user) => {
	return dispatch => {
		return fetch(`/v2/getPost?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				//console.log(result.post)
				dispatch({ type: 'LOAD_POSTS', posts: result.posts})
			})
		}).catch(err => dispatch({ type: 'LOAD_POSTS_ERROR', err }))
	}
}

export const loadRecommand = () => {
	return {
		type: 'LOAD_RECOMMAND',
		recommands: []
	}
}

export const loadOwner = (user) => {
	return dispatch => {
		return fetch(`/v2/getInfor?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				//console.log(result)
				dispatch({ type: 'LOAD_OWNER', owner:result.user })
			})
		}).catch(err => dispatch({ type: 'LOAD_ERROR', err }))
	}		
}

export const postStatus = (content, shareWith) => {
	return dispatch => postContent(content, shareWith)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'POST_STATUS' })
			})
		}).catch(err => dispatch({ type: 'POST_ERROR', err }))
	}

const postContent = async (content, shareWith) => {
	const user = pub
	const cur_sequence = await sequence(user) + 1
	const secretKey = deriveKey(secret)
	const tx = {
		version: 1,
	    account: user,
	    sequence: cur_sequence,
	    memo: Buffer.alloc(0),
	    operation: "post",
	    params:{
	    	keys: [],
	     	content:{
	     		type: 1,
	     		text: content
	     	}
	    },
	    signature: new Buffer(64),
	}

	sign(tx, secretKey)
	let post = '0x' + encode(tx).toString('hex')
	return post
}

// export const loadAllAcc = () => {
// 	return dispatch => {
// 		return fetch(`/v2/getUsers`)
// 		.then(response => {
// 			response.json()
// 			.then(result => {
// 				console.log(result)
// 				dispatch({ type: 'LOAD_ALL_ACC', accounts:result })
// 			})
// 		}).catch(err => dispatch({ type: 'LOAD_ALL_ERROR', err }))
// 	}
// }

export const loadBalance = (user) => {
	return dispatch => {
		return fetch(`/v2/pay?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				dispatch({ type: 'LOAD_BALANCE', pay: result.pay, recv: result.receive})
			})
		}).catch(err => dispatch({ type: 'LOAD_BALANCE_ERROR', err }))
	}
}

export const loadSequence = (user) => {
	return dispatch => {
		return sequence(user)
		.then(response => {
			dispatch({ type: 'LOAD_SEQUENCE', sequence: response})
		}).catch(err => dispatch({ type: 'LOAD_SEQUENCE_ERROR', err }))
	}
}