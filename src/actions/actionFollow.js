import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'
import base32 from "base32.js"

const secret = localStorage.getItem('secret')
const user = localStorage.getItem('public')

export const loadFollowers = () => {
	return {
		type: 'LOAD_FOLLOWERS',
		followers: [
			{ 
				profileBio: "16/01/1997!",
				username: "ThuHngNguyn13",
				displayName: "Thu Hương Nguyễn",
				profilePhoto: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
				coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTtY1L05JaQBl_WKkjh6cB1sZlov7h086zcpCekmsPoGATf1noQ",			
			},
			{
				profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
				username: "ttclandpkd",
				displayName: "Phòng Kinh Doanh TTC Land",
				profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
				coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpmPQuNP0J-hDoCwrPhHzSR4iVMDq4yJk-jHnufKXhgP3QkZL",
			},
			{ 
				profileBio: "Nguyễn Thị Bo!",
				username: "ThuHngNguyn13",
				displayName: "Thu Hương Nguyễn",
				profilePhoto: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
				coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6_9K25b-el1t-q0DPV2IBlUXhvB9RhMtnv_y4GrPSXX6AwxT",
			},
			{
				profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
				username: "ttclandpkd",
				displayName: "Phòng Kinh Doanh TTC Land",
				profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
				coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-UDtsCcI2OX-c1jiBr3Mfo5ihXI7IRQYpCgg5iVmxQIbUWoF",
			}
		]
	}
}

export const loadFollowing = () => ({
	type: 'LOAD_FOLLOWING',
	following: [
		{ 
			profileBio: "Nguyễn Thị Bo!",
			username: "ThuHngNguyn13",
			displayName: "Thu Hương Nguyễn",
			profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89PvJPYnmNweJ7psoh8KHBu_djhtafceynqEG3pGTeqZBJ-Zdmg",
			coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6_9K25b-el1t-q0DPV2IBlUXhvB9RhMtnv_y4GrPSXX6AwxT",
			followed: false
		},
		{
			profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
			username: "ttclandpkd",
			displayName: "Phòng Kinh Doanh TTC Land",
			profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
			coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-UDtsCcI2OX-c1jiBr3Mfo5ihXI7IRQYpCgg5iVmxQIbUWoF",
			followed: true
		},
		{ 
			profileBio: "16/01/1997!",
			username: "ThuHngNguyn13",
			displayName: "Thu Hương Nguyễn",
			profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirzSv9fSiPkNIck6tkAsmdR7VjVeRdeE7uKUfsTg7uUxBO3Uk",
			coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpmPQuNP0J-hDoCwrPhHzSR4iVMDq4yJk-jHnufKXhgP3QkZL",
			followed: false
		},
		{
			profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
			username: "ttclandpkd",
			displayName: "Phòng Kinh Doanh TTC Land",
			profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
			coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTtY1L05JaQBl_WKkjh6cB1sZlov7h086zcpCekmsPoGATf1noQ",
			followed: true
		}
	]
})

export const loadFollows = () => {
	return dispatch => {
		return fetch(`/users/followers?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				console.log(result.follower)
				dispatch({ type: 'LOAD_FOLLOWING', following: result.follower})
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