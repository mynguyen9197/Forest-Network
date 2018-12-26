import React, {Component} from 'react';
import './style.css';

class Comment extends Component{
	render(){
		var vals
		for( var i = 0 ; i < this.props.infoOnwer.length; i++)
        {
            if(this.props.infoOnwer[i].publicKey == this.props.infoComment.account && this.props.infoOnwer[i].Avatar)
            {
                let bufferOriginal = Buffer.from(this.props.infoOnwer[i].Avatar);
                vals = bufferOriginal.toString('base64')
            }
        }

		return(
			<div className="comment">
				<div className="avatarComment">
                    <img className="imgAvatarCmt" src={'data:image/jpeg;base64,' + vals} />
				</div>
				<div className="boxComment">	
						<div className="contentCmt">
							{this.props.infoComment.text}
						</div>
				</div>
			</div>
		);
	}
}

export default Comment;