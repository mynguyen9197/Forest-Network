import React, { Component } from 'react'

import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';

function InfoOwner(props) {
    if (props.owner && props.owner.photo)
        return (
            <div className="info-owner">
                <div className="name-owner">{props.owner.name}</div>
                <div className="email-owner">{props.owner.email}</div>
                <div className="decrip-owner">{props.owner.description}</div>
                <div className="div-owner"> 
                    <i className="far fa-calendar-alt"></i>
                    <span> Joined December 2015 </span>
                </div>
                <div className="div-owner">
                    <i className="fas fa-birthday-cake"></i>
                    <span> Born November 1997 </span>
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
