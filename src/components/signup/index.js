import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
const { Keypair } = require('stellar-base');


class SignUp extends Component{

	constructor(props){
		super(props)
		this.state={
			publicKey:'',
			secretkey:'',
			bool: false
	    }
	}
	

	onClickToKey(){
		const key = Keypair.random();
		this.setState({
			publicKey: key.publicKey(),
			secretkey: key.secret(),
			bool: true,
		})
	}

	render(){
		return(
			<div className="root">	
			    <div className="body"></div>
				<div className="grad"></div>
				<div className="head">
					<div>Forest<span>Network</span></div>
				</div>
				<br/>
			    {
				    !this.state.bool?
						<div className="signup">
							<Link to='/login' className="">
								<input type="button" value="SignIn"/>
							</Link>
							<br/>
							<input type="button" value="SignUp" onClick={this.onClickToKey.bind(this)} />
						</div>
					:
						<div className="signup">
							<div className="keyname">PublicKey<b className="key"> &nbsp;{this.state.publicKey}</b></div>
							<br/>
							<div className="keyname">SecretKey<b className="key"> &nbsp;{this.state.secretkey}</b></div>
						</div>
				}
			</div>
		);
	}
}

export default SignUp;
