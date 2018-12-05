import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                        <Link to="/" className="profile-item">
                            <div className="item"> Post </div>
                            <div className="value"> {props.owner.post} </div>
                        </Link>
                        <Link to="/following" className="profile-item"> 
                            <div className="item"> Following </div>
                            <div className="value"> {props.owner.following} </div>
                        </Link> 
                        <Link to="/followers" className="profile-item"> 
                            <div className="item"> Followers </div>
                            <div className="value"> {props.owner.followers} </div>
                        </Link>
                        <Link to="/" className="profile-item">
                            <div className="item"> Likes </div>
                            <div className="value"> {props.owner.like} </div>
                        </Link>
                        <button className="bt-follow">Edit profile</button>
                    </div>
                </div>
            </div>
        );
    else
        return (<div/>)
}


export default HeaderWall;
