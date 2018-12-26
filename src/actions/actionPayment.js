import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'

const secret = localStorage.getItem('secret')
const user = localStorage.getItem('public')

export const loadPayment = () => {
	return dispatch => {
		return fetch(`/v2/getPayments?account=${user}`)
		.then(response => {
			response.json()
			.then(result => {
				console.log(result)
				dispatch({ type: 'LOAD_PAYMENTS', send: result.send, receive: result.receive})
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
	let message = Buffer.alloc(0)

	if(mess != undefined)
		message = Buffer.from(mess)

	console.log({money, mess, receiver})

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
	    	amount: parseInt(money)
	    },
	    signature: new Buffer(64),
	}
	sign(tx, secretKey)

	const post = '0x' + encode(tx).toString('hex')

	return post
}