import axios from 'axios'
import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'

const secret = localStorage.getItem('secret')
const pub = localStorage.getItem('public')

const comment = async (transaction, content) => {
	var publicKey = pub
	var secretKey = deriveKey(secret)

	var cur_sequence = await sequence(publicKey) + 1

	const tx = {
		version: 1,
	    account: publicKey,
	    sequence: cur_sequence,
	    memo: Buffer.alloc(0),
	    operation: "interact",
	    params:{
	    	object: transaction,
	     	content: {
	     		type: 1,
	     		text: content
	     	}
	    },
	    signature: new Buffer(64),
	}

	sign(tx, secretKey)
	var post = '0x' + encode(tx).toString('hex')

	return post
}
const react = async (transaction, number) => {
	const publicKey = pub
	const secretKey = deriveKey(secret)
	var cur_sequence = await sequence(publicKey) + 1

	const tx = {
		version: 1,
	    account: publicKey,
	    sequence: cur_sequence,
	    memo: Buffer.alloc(0),
	    operation: "interact",
	    params:{
	    	object: transaction,
	     	content:{
	     		type: 2,
	     		reaction: number
	     	}
	    },
	    signature: new Buffer(64),
	}

	sign(tx, secretKey)
	var post = '0x' + encode(tx).toString('hex')
	console.log(post)

	return post
}
export const postReact = (transaction, number) => {
	return dispatch => react(transaction, number)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'POST_REACT' })
			})
		}).catch(err => dispatch({ type: 'POST_ERROR', err }))
}

export const postComment = (transaction, content) => {
	return dispatch => comment(transaction, content)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'POST_COMMENT' })
			})
		}).catch(err => dispatch({ type: 'POST_ERROR', err }))
}

export const loadRecommand = () => {
	return {
		type: 'LOAD_RECOMMAND',
		recommands: [
			{ 
				urlAvatar: "https://media.giadinhmoi.vn/files/danggiang/2018/04/01/hinh-anh-be-gai-ngo-nghinh-de-thuong-nhat-7-0920.jpg",
				name: "Xuxu",
			},
			{
				urlAvatar: "https://3cshop.vn/wp-content/uploads/2016/07/ngay-ngat-voi-nhung-hinh-anh-de-thuong-cua-be-gai-xinh-nhu-thien-than-16.jpg",
				name: "Dâu Tây",
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

export const loadNewFeed = () => {
	return {
		type: 'LOAD_NEWS_FEED',
		posts: []
	}
}

export const loadOwner = () => {
	return {
		type: 'LOAD_OWNER', owner:[]
	}
}