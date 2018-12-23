import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'

const { user, secret } = deriveKey()

export const loadPost = () => {
	// return dispatch => {
	// 	return fetch(`/posts/getPost?account=${user}`)
	// 	.then(response => {
	// 		response.json()
	// 		.then(result => {
	// 			console.log(result[0])
	// 			dispatch({ type: 'LOAD_POSTS', posts: []})
	// 		})
	// 	}).catch(err => dispatch({ type: 'LOAD_POSTS_ERROR', err }))
	// }
	return {
		type: 'LOAD_POSTS',
		posts: [
			{ 
				id: 1,
				urlAvatar: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg",
				name: "Tran Thanh Trung",
				statusPost: "publicly",
				timePost: 10,
				content: "I am the best",
				urlPhoto: "https://i.ytimg.com/vi/eXcWnvxK7Z8/hqdefault.jpg",
				react: 100,
				comment: 200,
				share: 10,
			},
			{
				id: 2,
				urlAvatar: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg",
				name: "Cristinal Ronaldo",
				statusPost: "privately",
				timePost: 20,
				content: "Messi! I am not so good",
				urlPhoto: "../../img/twitter.png",
				react: 200,
				comment: 100,
				share: 10,
			},
			{ 
				id: 3,
				urlAvatar: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg",
				name: "Chi Pu",
				statusPost: "publicly",
				timePost: 20,
				content: "Anh xin lỗi em đi",
				urlPhoto: "https://i.ytimg.com/vi/eXcWnvxK7Z8/hqdefault.jpg",
				react: 100,
				comment: 100,
				share: 100,
			},
		]
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

export const loadOwner = () => {

	return dispatch => {
		return fetch(`/users/profile?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				dispatch({ type: 'LOAD_OWNER', owner:result[0] })
			})
		}).catch(err => dispatch({ type: 'LOAD_ERROR', err }))
	}	
}

// return dispatch => {
// 		return fetch("/posts/getPost", {
// 		  method: 'POST',
// 		  body: JSON.stringify({publicKey: 'GCNLX2ZPPNRPX2IQSJSX73VGFN6O5ZQJ3CBFCA6Q6NTBKLKRA2ZKJHE7'}), // điền public key của mình vào đây
// 		  headers:{
// 		    'Content-Type': 'application/json'
// 		  }
// 		}).then(response => {
// 			response.json()
// 			.then(result => {
// 				console.log(result[0])
// 				dispatch({ type: 'LOAD_OWNER', owner:result[0] })
// 			})
// 		}).catch(err => dispatch({ type: 'LOAD_ERROR', err }))
// 	}

export const postStatus = (content, shareWith) => {
	// return dispatch => {
	// 	return fetch("/posts/post", {
	// 	  method: 'POST',
	// 	  body: JSON.stringify({publicKey: }), // điền public key của mình vào đây
	// 	  headers:{
	// 	    'Content-Type': 'application/json'
	// 	  }
	// 	}).then(response => {
	// 		response.json()
	// 		.then(result => {
	// 			console.log(result[0])
	// 			dispatch({ type: 'POST_STATUS', owner:[] })
	// 		})
	// 	}).catch(err => dispatch({ type: 'POST_ERROR', err }))
	// }
	console.log({content, shareWith})
	return{
		type: 'POST_STATUS',
		result: {
			content, shareWith
		}
	}
}

// const postContent = async (req) => {
// 	const cur_sequence = await sequence(user) + 1

// 	const tx = {
// 		version: 1,
// 	    account: user,
// 	    sequence: cur_sequence,
// 	    memo: Buffer.alloc(0),
// 	    operation: "post",
// 	    params:{
// 	    	keys: shareWith,
// 	     	content:{
// 	     		type: 1,
// 	     		text: content
// 	     	}
// 	    },
// 	    signature: new Buffer(64),
// 	}

// 	sign(tx, secret)
// 	var post = encode(tx).toString('hex')
// 	post = '0x' + post

// 	var url = server + `broadcast_tx_commit?tx=${post}`
// 	return tx
// 	//axios.get(url).then(res => console.log(res))
// }