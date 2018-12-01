import React, { Component } from 'react'
import './style.css';
import Person from './item'

function PersonList(props) {

  return (
    <div id="page-container" className="AppContent">
      <General-Info />
      <div className="AppContainer">
        <div className="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
          <div style={{width: "200px"}} ></div>{/*left component*/}

          <div className="Grid-cell u-size2of3 u-lg-size3of4">
            <div className="Grid Grid--withGutter">
              <div className="Grid-cell">
                { props.follows.map((follow, i) => <Person key={i} follow = {follow} isFollower = {props.isFollower} isFollowing = {props.isFollowing}/> )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default PersonList;
