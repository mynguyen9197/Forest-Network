import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import logo from './../../img/twitter.png'
import './style.css';

class Header extends Component {
  handleClick(e){
    e.preventDefault()
    localStorage.clear()
    this.props.history.push('/login')
  }

  render(){
    return (
      <div className="header" >
        <Link to="/"><img className="logoApp" src={logo} alt="" /></Link> 
        <Link to="/" className="link"> Notifications </Link>
        <Link to="/" className="link"> Messages </Link>
        <input className="search" placeholder="Search"/>
        <img className="logo" src={this.props.ava} alt="" />
        <a className="link" onClick={this.handleClick.bind(this)}> Sign out </a>
      </div>
    );
  }
}

export default withRouter(Header)