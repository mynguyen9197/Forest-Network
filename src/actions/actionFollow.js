import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'
import base32 from "base32.js"

const secret = localStorage.getItem('secret')
const pub = localStorage.getItem('public')

export const loadFollowers = (user) => {
	return dispatch => {
		return fetch(`/v2/getInfor?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
			//	console.log(result.follower)
				dispatch({ type: 'LOAD_FOLLOWERS', followers: result.follower})
			})
		}).catch(err => dispatch({ type: 'LOAD_FOLLOWERS_ERROR', err }))
	}
}

export const loadFollows = (user) => {
	return dispatch => {
		return fetch(`/v2/getFollowing?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
			//	console.log(result)
				dispatch({ type: 'LOAD_FOLLOWING', following: result})
			})
		}).catch(err => dispatch({ type: 'LOAD_FOLLOWING_ERROR', err }))
	}
}

export const followSO = (acc) => {
	return dispatch => follow(acc)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'DO_FOLLOW' })
			})
		}).catch(err => dispatch({ type: 'FOLLOW_ERROR', err }))
	}

const follow = async (acc) => {
	let arr = []
	const user = pub
	const cur_sequence = await sequence(user) + 1
	const secretKey = deriveKey(secret)

	acc.forEach(rev => {
		arr.push(Buffer.from(base32.decode(rev)))
	})

	const tx = {
		version: 1,
	    account: user,
	    sequence: cur_sequence,
	    memo: Buffer.alloc(0),
	    operation: "update_account",
	    params:{
	    	key: "followings",
	    	value: {
	    		addresses: arr
	    	}
	    },
	    signature: new Buffer(64),
	}
	sign(tx, secretKey)

	const update = "0x" + encode(tx).toString('hex')
	return update
}

export const loadCurUser = () => {
	const user = pub
	return dispatch => {
		return fetch(`/v2/getInfor?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				//console.log(result)
				dispatch({ type: 'LOAD_CUR_USER', curUser:result.user })
			})
		}).catch(err => dispatch({ type: 'LOAD_USER_ERROR', err }))
	}	
}