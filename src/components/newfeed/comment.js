import React, {Component} from 'react';
import './style.css';

class Comment extends Component{
	render(){
		return(
			<div className="comment">
				<div className="avatarComment">
					<img className="imgAvatarCmt" src="https://cdn.explus.vn/media.phunutoday.vn/files/upload_images/2016/07/19/nuoi-con-1.jpg" alt=""/>
				</div>
				<div className="boxComment">
					<form className="formCmt">	
						<div className="contentCmt">
							<div className="1p1t">
								<input className="_1p1v" id="placeholder-621fa" style={{whiteSpace:`pre-wrap`}} placeholder="Write a comment..."/>
							</div>
						</div>
						
					</form>
				</div>
			</div>
		);
	}
}

export default Comment;