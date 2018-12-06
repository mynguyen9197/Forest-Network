import React, { Component } from 'react';
import { compose } from 'redux';
import './detail.css';

class LikeComment extends Component{
	render(){
		return(
			<div>
				
		      <div className="bt-inte">
		        <button className="fa fa-heart"> Like</button>
		        <button className="fa fa-comment"> Comment</button>
		        <button className="fa fa-share"> Share</button>
		      </div>
			</div>
		);
	}
}

export default LikeComment;