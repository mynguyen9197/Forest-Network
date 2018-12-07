import React, { Component } from 'react'
import './detail.css';

class LikeComment extends Component{
	render(){
		return(
			<div>
				
		      <div className="bt-inte">
		        <button className="fa fa-heart"> 1000 Likes</button>
		        <button className="fa fa-comment"> 500 Comments</button>
		        <button className="fa fa-share"> 400 Shares</button>
		      </div>
			</div>
		);
	}
}

export default LikeComment;