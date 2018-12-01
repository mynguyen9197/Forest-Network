import React, { Component } from 'react'

import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';

function HeaderWall(props) {
  return (
    <div className="header-wall">
      <img className="cover-img" src={cover} alt="" />
      <div className="info">
        <img className="avatar" src={avt} alt="" />
        <div className="profile-items">
          <a href="/ád" className="profile-item">
            <span className="item"> Post </span>
            <span className="value"> 10.0K </span>
          </a> 
          <a href="/ád" className="profile-item"> 
            <span className="item"> Following </span>
            <span className="value"> 10.0K </span>
          </a> 
          <a href="/ád" className="profile-item"> 
            <span className="item"> Followers </span>
            <span className="value"> 10.0K </span>
          </a> 
          <a href="/ád" className="profile-item">
            <span className="item"> Likes </span>
            <span className="value"> 10.0K </span>
          </a> 
        </div>
      </div>
    </div>
  );
}


export default HeaderWall;
