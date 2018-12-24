import React, { Component } from 'react'

import './style.css';

function Post(props) {
  return (
    <div className="post" id="opacity">
      <div className="owner">
        <img src={props.owner.urlAvatar} alt="" />
        <div className="info-post">
          <div className="name"> {props.owner.name} </div>
          <div className="time-post">Shared <span>&nbsp;{props.infoPost.statusPost}</span>&nbsp;-&nbsp;<span> about {props.infoPost.timePost} minutes ago </span> </div>
        </div>
      </div>
      <div className="content-post" cols="50">{props.infoPost.text}</div>
      <img className="img-post" src={props.infoPost.urlPhoto} alt="" />
      <div className="attention">
        <div className="react"><i className="far fa-heart fa-heart-check" aria-hidden="true"></i> {props.infoPost.react}</div>
        <div className="cmt"><span>{props.infoPost.comment}</span> Comments</div>
        <div><span>{props.infoPost.share}</span> Shares</div>
      </div>
    </div>
  );
}

export default Post;