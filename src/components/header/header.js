import React, { Component } from 'react'

import logo from './../../img/twitter.png'
import avt from './../../img/images.jpg'
import './style.css';

function Header(props) {
  return (
    <div className="header">
      <a href="/ád"><img className="logo" src={logo} alt="" /></a> 
      <a href="/ád" className="link"> Notifications </a>
      <a href="/ád" className="link"> Messages </a>
      <input className="search" placeholder="Search"/>
      <img className="logo" src={avt} alt="" />
      <a href="/ád" className="link"> Sign out </a>
    </div>
  );
}


export default Header;
