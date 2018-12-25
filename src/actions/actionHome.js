import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'

const secret = localStorage.getItem('secret')
const pub = localStorage.getItem('public')
//'GDAAVIRUC7PII4YR5SZQHKBCY3PZDNN6XAORXRIXGLPNGSW7ECSRO5OZ'
export const loadPost = (user) => {
	return dispatch => {
		return fetch(`/getPost?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				console.log(result.post)
				dispatch({ type: 'LOAD_POSTS', posts: result.post})
			})
		}).catch(err => dispatch({ type: 'LOAD_POSTS_ERROR', err }))
	}
}

export const loadRecommand = () => {
	return {
		type: 'LOAD_RECOMMAND',
		recommands: [
			{ 
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4dgEBvMj80Lr0CytLDVkeISTT-Za95gBOH92rhboiD843yjm",
				name: "Chi Pu",
			},
			{
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4dgEBvMj80Lr0CytLDVkeISTT-Za95gBOH92rhboiD843yjm",
				name: "Tăng Thanh Hà",
			},
			{ 
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4dgEBvMj80Lr0CytLDVkeISTT-Za95gBOH92rhboiD843yjm",
				name: "Cậu vàng",
			},
			{
				urlAvatar: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
				name: "Lão Hạc",
			}
		]
	}
}

export const loadOwner = (user) => {
	// return dispatch => {
	// 	return fetch(`/users/getInf?account=${user}`)
	// 	.then(response => {
	// 		response.json()
	// 		.then(result => {
	// 			//console.log(result)
	// 			dispatch({ type: 'LOAD_OWNER', owner:result })
	// 		})
	// 	}).catch(err => dispatch({ type: 'LOAD_ERROR', err }))
	// }	
	return dispatch => {
		return fetch(`/users/get?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				console.log(result[0])
				dispatch({ type: 'LOAD_OWNER', owner:result[0] })
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

export const loadAllAcc = () => {
	return {
		type: 'LOAD_ALL',
		allpeople: []
	}
}