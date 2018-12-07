import React, { Component } from 'react'

import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';


function Recommand(props) {
    return (
        <div className="recommand">
            <div>
                <span> Who to follow </span>
                <i className="fab fa-angellist blue"></i>
            </div>
            {
                props.recommands.map((item, i) =>
                    <div className="info-recommand">
                        <img className="logo" src={item.urlAvatar} alt="" />
                        <div>
                            <div>
                                <span> {item.name} </span>
                                <i className="fab fa-galactic-republic"></i>
                            </div>
                            <button className="bt-follow">Follow</button>
                        </div>
                    </div>)
            }
        </div>
  );
}


export default Recommand;