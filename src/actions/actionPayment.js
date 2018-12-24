import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'

const secret = localStorage.getItem('secret')
const user = localStorage.getItem('public')

export const loadPayment = () => {
	return dispatch => {
		return fetch(`/payment?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				dispatch({ type: 'LOAD_PAYMENTS', posts: {pay, receive}})
			})
		}).catch(err => dispatch({ type: 'LOAD_PAYMENTS_ERROR', err }))
	}
}

export const paymentAction = (money, mess, receiver) => {
	return dispatch => doPayment(money, mess, receiver)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'PAYMENT' })
			})
		}).catch(err => dispatch({ type: 'PAYMENT_ERROR', err }))
	}

const doPayment = async (money, mess, receiver) => {
	const message = mess===''?Buffer.alloc(0):Buffer.from(mess)

	// if(req.body.message != undefined)
	// 	message = Buffer.from(req.body.message)

	const cur_sequence = await sequence(user) + 1
	const secretKey = deriveKey(secret)

	const tx = {
		version: 1,
	    account: user,
	    sequence: cur_sequence,
	    memo: message,
	    operation: "payment",
	    params:{
	    	address: receiver,
	    	amount: money
	    },
	    signature: new Buffer(64),
	}
	sign(tx, secretKey)

	const post = '0x' + encode(tx).toString('hex')

	return post
}