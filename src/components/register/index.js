import React, { Component } from 'react'
import './css/style.css'

class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
			hidePass: true,
			hideRepeatPass: true
		}
	}

	handleClick1(e){
		e.preventDefault()
		this.setState({
			hidePass:!this.state.hidePass
		})
	}

	handleClick2(e){
		e.preventDefault()
		this.setState({
			hideRepeatPass:!this.state.hideRepeatPass
		})
	}

	render(){
		return(
			<div className="main">

            <section className="signup">
                <img src="images/signup-bg.jpg" alt="" />
                <div className="container">
                    <div className="signup-content">
                        <form method="POST" id="signup-form" className="signup-form">
                            <h2 className="form-title">Create account</h2>
                            <div className="form-group">
                                <input type="text" className="form-input" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <input type={this.state.hidePass?"password":"text"} className="form-input" name="password" id="password" placeholder="Password"/>
                                <button toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" onClick={this.handleClick1.bind(this)}><i className={this.state.hidePass?"far fa-eye-slash":"far fa-eye"}></i></button>
                            </div>
                            <div className="form-group">
                            	<input type={this.state.hideRepeatPass?"password":"text"} className="form-input" name="password" id="password" placeholder="Repeat your password"/>
                                <button toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" onClick={this.handleClick2.bind(this)}><i className={this.state.hideRepeatPass?"far fa-eye-slash":"far fa-eye"}></i></button>
                            </div>
                            <div className="g-recaptcha" data-sitekey="6LforIAUAAAAANyWyRMtDIrKL_uO_8wNc2sVmrDu"></div><br />
                            <div className="form-group">
                                <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                            </div>
                        </form>
                        <p className="loginhere">
                            Have already an account ? <a href="/login" className="loginhere-link">Login here</a>
                        </p>
                    </div>
                </div>
            </section>

        </div>
		)
	}
}

export default Register