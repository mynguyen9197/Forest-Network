import React, { Component } from 'react'
import Person from './item'
import '../../App.css'
import './style.css'

function PersonList(props) {

 	return (
	    <div className="follow-cell">
	      { props.follows.map((follow, i) => <Person key={i} follow = {follow} isFollower = {props.isFollower} isFollowing = {props.isFollowing}/> )}
	    </div>
  	);
}


export default PersonList;
