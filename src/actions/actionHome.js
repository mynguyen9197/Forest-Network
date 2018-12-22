import axios from 'axios'
import CryptoJS from 'crypto-js'
import { Keypair } from 'stellar-base'

export const loadPost = (account) => {
	// return dispatch => {
	// 	return fetch(`/posts/getPost?account=${account}`)
	// 	.then(response => {
	// 		response.json()
	// 		.then(result => {
	// 			console.log(result[0])
	// 			dispatch({ type: 'LOAD_POSTS', posts:result[0].post })
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
	const decrypted = CryptoJS.AES.decrypt(localStorage.getItem('secret'), "Secret Key")
	const secret = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
	const account = Keypair.fromSecret(secret).publicKey()
	
	return dispatch => {
		return fetch(`/users/profile?account=${account}`)
		.then(response => {
			response.json()
			.then(result => {
				console.log(result[0])
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