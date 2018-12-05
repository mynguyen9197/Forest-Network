import React, { Component } from 'react'

import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';

function HeaderWall(props) {
  if (props.owner)
    return (
          <div className="header-wall">
          <img className="cover-img" src={props.owner.urlCover} alt="" />
          <div className="info">
            <img className="avatar" src={props.owner.urlAvatar} alt="" />
            <div className="profile-items">
            <a href="/" className="profile-item">
              <div className="item"> Post </div>
              <div className="value"> {props.owner.post} </div>
            </a>
            <a href="/following" className="profile-item"> 
              <div className="item"> Following </div>
              <div className="value"> {props.owner.following} </div>
            </a> 
            <a href="/followers" className="profile-item"> 
              <div className="item"> Followers </div>
              <div className="value"> {props.owner.followers} </div>
            </a>
            <a href="/ád" className="profile-item">
              <div className="item"> Likes </div>
              <div className="value"> {props.owner.like} </div>
            </a> 
            </div>
          </div>
        </div>
    );
  else
    return (<div/>)
}


export default HeaderWall;
