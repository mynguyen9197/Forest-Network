import { deriveKey, sequence, server } from '../utils'
import { encode, decode, sign } from '../lib/tx'
import { FileReader } from 'filereader'
import { FileAPI } from 'file-api'

const secret = localStorage.getItem('secret')
const user = localStorage.getItem('public')

export const updateProfile = (username, displayName, dob, location, website, bio, datejoin) => {
	return {
		type: 'LOAD_PROFILE',
		profile: {
			username, displayName, dob, location, website, bio, datejoin
		}
	}
}

export const flatEdit = (bool) => {
	return {
		type: 'FLAT_EDIT',
		isEdit: bool,
	}
}

export const renameAction = (name) => {
	return dispatch => rename(name)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'RENAME' })
			})
		}).catch(err => dispatch({ type: 'RENAME_ERROR', err }))
	}

export const changeAvatar = (file) => {
	return dispatch => rename(file)
	.then(response =>{
		return fetch("/transaction", {
		  method: 'POST',
		  body: JSON.stringify({encoded: response}),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(response => {
				dispatch({ type: 'CHANGE_AVA' })
			})
		}).catch(err => dispatch({ type: 'CHANGE_AVA_ERROR', err }))
	}

const rename = async (name) => {

	const cur_sequence = await sequence(user) + 1
	const secretKey = deriveKey(secret)

	const tx = {
		version: 1,
	    account: user,
	    sequence: cur_sequence,
	    memo: Buffer.alloc(0),
	    operation: "update_account",
	    params:{
	    	key: "name",
	    	value: Buffer.from(name),
	    },
	    signature: new Buffer(64),
	}
	sign(tx, secretKey)

	const update = "0x" + encode(tx).toString('hex')
	return update
}

const picture = async (file) => {

   	var fileReader = new FileReader()
   	const secretKey = deriveKey(secret)

   	var pic 
	fileReader.readAsBinaryString(new FileAPI.File(file))
	fileReader.on('data', function (data) {
	  pic = data
	})

	const cur_sequence = await sequence(user) + 1
	const tx = {
		version: 1,
	    account: user,
	    sequence: cur_sequence,
	    memo: Buffer.alloc(0),
	    operation: "update_account",
	    params:{
	    	key: "picture",
	    	value: pic,
	    },
	    signature: new Buffer(64),
	}
	sign(tx, secretKey)

	const update = "0x" + encode(tx).toString('hex')

	return update
}