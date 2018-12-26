import React, { Component } from 'react'
import { Keypair } from 'stellar-base'
import { axios } from 'axios'
import CryptoJS from "crypto-js"
import { withRouter, Redirect } from "react-router-dom"

import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/iconic/css/material-design-iconic-font.min.css'
import './css/main.css'
import './css/util.css'

class Login extends Component{

	constructor(props){
		super(props)
		this.state = {
			secret: '',
		}
	}

	handleChange(e){
		this.setState({
			secret: e.target.value
		})
	}

	deriveKey(secret){
		const key = Keypair.fromSecret(secret)
		return key.publicKey()
	}

	handleClick(e){
		e.preventDefault()
		if(this.state.secret){
			const publicKey = this.deriveKey(this.state.secret)
			fetch(`https://komodo.forest.network/tx_search?query="account='${publicKey}'"`)
			.then(res => {
				res.json()
				.then(result => {
					if(result.result.total_count ==='0'){
						alert('Tài khoản không tồn tại')
					}else{
						const encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.state.secret), "Secret Key")
						
						localStorage.setItem('secret', encrypted)
						localStorage.setItem('public', publicKey)
						let { from } = this.props.location.state || { from: { pathname: "/" } }
						this.props.history.push(from)
					}
				})
			})
		}
		else{
			alert('Hãy nhập Secret Key')
		}
		
	}

	render(){

		let { from } = this.props.location.state || { from: { pathname: "/" } }
		if (localStorage.getItem('secret')) return <Redirect to={from} />

		return(
			<div class="limiter">
				<div class="container-login100">
					<div class="wrap-login100">
						<form class="login100-form validate-form">

							<span class="login100-form-title p-b-34 p-t-27">
								Log in
							</span>

							<div class="wrap-input100 validate-input">
								<input class="input100" type="text" name="secretKey" placeholder="Secret Key" onChange={this.handleChange.bind(this)}/>
								<span class="focus-input100" data-placeholder="&#xf191;"></span>
							</div>

							<div class="contact100-form-checkbox">
								<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
								<label class="label-checkbox100" for="ckb1">
									Remember me
								</label>
							</div>

							<div class="container-login100-form-btn">
								<button class="login100-form-btn" onClick={this.handleClick.bind(this)}>
									Login
								</button>
							</div>

							<div class="text-center p-t-90">
								
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Login)