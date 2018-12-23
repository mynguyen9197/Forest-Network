import CryptoJS from 'crypto-js'
import { Keypair } from 'stellar-base'
import axios from 'axios'

import { decode, encode, sign } from './lib/tx'

export const server = "https://komodo.forest.network/"

export const sequence = async (address) => {
	var cur_sequence = 0
	var urlUser = server + `tx_search?query="account='${address}'"`

	await axios.get(urlUser).then( res => {
		var tmp = res.data.result.txs
		for(var i = tmp.length - 1 ; i >= 0; i--)
		{
			var inf = decode(Buffer.from(tmp[i].tx, 'base64'))
			if( inf.account == address )
			{
				cur_sequence = inf.sequence
				break;
			}
			if(i == 0)
				cur_sequence = 0
		}
	})
	return cur_sequence
}