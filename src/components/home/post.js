import React, { Component } from 'react'

import cover from './../../img/cover.jpg'
import './style.css';

function Post(props) {
  return (
    <div className="post">
      <div className="owner">
        <img src={props.infoPost.urlAvatar} alt="" />
        <div className="info-post">
          <div className="name"> {props.infoPost.name} </div>
          <div className="time-post">Shared <span>&nbsp;{props.infoPost.statusPost}</span>&nbsp;-&nbsp;<span> about {props.infoPost.timePost} minutes ago </span> </div>
        </div>
      </div>
      <div className="content-post" cols="50">{props.infoPost.content}</div>
      <img className="img-post" src={props.infoPost.urlPhoto} alt="" />
      <div className="attention">
        <div className="react"><i className="far fa-heart fa-heart-check" aria-hidden="true"></i> {props.infoPost.react}</div>
        <div className="cmt"><span>{props.infoPost.comment}</span> Comments</div>
        <div><span>{props.infoPost.share}</span> Shares</div>
      </div>
      <div className="bt-inte">
        <button className="inte-post">Like</button>
        <button className="inte-post">Comment</button>
        <button className="inte-post">Share</button>
      </div>
    </div>
  );
}


export default Post;
