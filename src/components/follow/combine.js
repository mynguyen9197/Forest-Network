import React, { Component } from 'react'
import Person from './item'
import '../../App.css'
import './style.css'

function PersonList(props) {

  return (
	  <div className="Grid Grid--withGutter">
	    <div className="Grid-cell">
	      { props.follows.map((follow, i) => <Person key={i} follow = {follow} isFollower = {props.isFollower} isFollowing = {props.isFollowing}/> )}
	    </div>
	  </div>
  );
}


export default PersonList;
