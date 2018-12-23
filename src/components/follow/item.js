import React, { Component } from 'react';
import './style.css';

class Person extends Component {
	constructor(props){
		super(props)
		this.state = {
			isFollowing: this.props.isFollowing
		}
	}

	handleClick(){
		this.setState({
			isFollowing: !this.state.isFollowing
		})
	}

	render(){
		return (
       		<div className="ProfileCard">
	  			<a className="ProfileCard-bg" href={this.props.follow.username} style={{background: `url(${this.props.follow.coverPhoto})`}}>
	  			</a>

	  			<div className="ProfileCard-content">
	    			<a className="ProfileCard-avatarLink js-nav js-tooltip" href="/ThuHngNguyn13" tabindex="-1" aria-hidden="true">
	      				<img className="ProfileCard-avatarImage js-action-profile-avatar" src={this.props.follow.profilePhoto} alt="" />
	    			</a>
	    
	      			<div className="ProfileCard-actions">
	        			<div className="ProfileCard-userActions with-rightCaret js-userActions">
	          				<div className="UserActions   UserActions--small u-textLeft">
	    						<div className="user-actions btn-group not-following not-muting can-dm " >
	          						<span className="user-actions-follow-button js-follow-btn follow-button">
	  									{ this.state.isFollowing? <button type="button" className="
										    EdgeButton
										    EdgeButton--secondary
										    EdgeButton--small 
										    
										    button-text
										    follow-text" onClick={this.handleClick.bind(this)}>
										      <span class="u-hiddenVisually">Following </span>
										</button>:<button type="button" className="
										    EdgeButton
										    EdgeButton--secondary
										    EdgeButton--small 
										    
										    button-text
										    follow-text"onClick={this.handleClick.bind(this)}>
										      <span class="u-hiddenVisually">Follow </span>
										</button>}
									</span>
	    						</div>
							</div>

				        </div>
				    </div>

				    <div className="ProfileCard-userFields">
				      <div className="ProfileNameTruncated account-group">
				  		<div className="u-textTruncate u-inlineBlock">
				    		<a className="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/ThuHngNguyn13" data-aria-label-part="">
				      			{this.props.follow.displayName}</a></div><span className="UserBadges"></span>
				      </div>
				      
				      <span className="ProfileCard-screenname">
				        <a href="/ThuHngNguyn13" className="ProfileCard-screennameLink u-linkComplex js-nav" data-aria-label-part="">
				          <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">{this.props.follow.username}</b></span>
				        </a><span>‏</span> {this.props.isFollower || this.props.follow.followed?<span className="FollowStatus">Follows you</span>:<span></span>}
				      </span>
				      
				      <p className="ProfileCard-bio u-dir" dir="ltr" data-aria-label-part="">{this.props.follow.profileBio}</p>
				    </div>
				</div>
			</div>
		)
	}
}

export default Person