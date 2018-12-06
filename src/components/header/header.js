import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from './../../img/twitter.png'
import avt from './../../img/images.jpg'
import './style.css';

function Header(props) {
  return (
    <div className="header">
      <Link to="/"><img className="logoApp" src={logo} alt="" /></Link> 
      <Link to="/" className="link"> Notifications </Link>
      <Link to="/" className="link"> Messages </Link>
      <input className="search" placeholder="Search"/>
      <img className="logo" src={props.ava} alt="" />
      <Link to="/" className="link"> Sign out </Link>
    </div>
  );
}

export default Header;