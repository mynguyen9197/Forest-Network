import React, { Component } from 'react'

import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';

function InfoOwner(props) {
    if (props.owner && props.owner.photo)
        return (
            <div className="info-owner">
                <div className="name-owner">{props.owner.displayName}</div>
                <div className="email-owner">@ {props.owner.username}</div>
                <div className="decrip-owner">{props.owner.bio}</div>
                <div className="div-owner"> 
                    <i className="far fa-calendar-alt"></i>
                    <span> {props.owner.dateJoin} </span>
                </div>
                <div className="div-owner">
                    <i className="fas fa-birthday-cake"></i>
                    <span> {props.owner.dob} </span>
                </div>
                <div className="img">
                    <i className="fas fa-camera-retro"></i>
                    <span className="img-owner"> Photos and videos </span>
                    <div>
                        {
                            props.owner.photo.map((item, i) => <img src={item} alt="" />)
                        }
                    </div>
                </div> 
            </div>
        );
    else
        return (<div/>)
}


export default InfoOwner;
