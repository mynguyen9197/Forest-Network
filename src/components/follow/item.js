import React, { Component } from 'react';
import './style.css';

class Person extends Component {
	render(){
		return (
	       		<div className="ProfileCard">
		  			<a className="ProfileCard-bg" href={this.props.follow.username} style={{backgroundColor: '#1DA1F2'}}>
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
		  									{ this.props.isFollowing? <button type="button" className="
											    EdgeButton
											    EdgeButton--secondary
											    EdgeButton--small 
											    
											    button-text
											    follow-text">
											      <span class="u-hiddenVisually">Following </span>
											</button>:<button type="button" className="
											    EdgeButton
											    EdgeButton--secondary
											    EdgeButton--small 
											    
											    button-text
											    follow-text">
											      <span class="u-hiddenVisually">Follow </span>
											</button>}
										</span>

										{/*<div className="dropdown ">
										  <button type="button" className="user-dropdown dropdown-toggle js-dropdown-toggle js-link js-tooltip btn plain-btn small-user-dropdown">
										    <span className="user-dropdown-icon Icon Icon--dotsVertical Icon--small"><span className="visuallyhidden">User actions</span></span>
										  </button>
										  <div className="dropdown-menu dropdown-menu--rightAlign is-autoCentered is-forceRight">
										    <div className="dropdown-caret">
										      <span className="caret-outer"></span>
										      <span className="caret-inner"></span>
										    </div>
										    <ul>
										      <li className="mention-text not-blocked"><button type="button" class="dropdown-link">Tweet to <span class="username u-dir u-textTruncate" dir="ltr">@<b>ThuHngNguyn13</b></span></button></li>
										      <li className="dm-text"><button type="button" class="dropdown-link">Send a Direct Message</button></li>
										      <li className="list-text not-blocked"><button type="button" class="dropdown-link">Add or remove from lists…</button></li>
										      <li className="dropdown-divider not-blocked"></li>
										          <li className="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>ThuHngNguyn13</b></span></button></li>
										    <li className="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>ThuHngNguyn13</b></span></button></li>

										        <li className="block-text not-blocked"><button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>ThuHngNguyn13</b></span></button></li>
										        <li className="unblock-text"><button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>ThuHngNguyn13</b></span></button></li>
										        <li className="report-text"><button type="button" class="dropdown-link">Report <span class="username u-dir u-textTruncate" dir="ltr">@<b>ThuHngNguyn13</b></span></button></li>
										      <li className="hide-suggestion-text"><button type="button" class="dropdown-link">Hide this suggestion</button></li>
										      <li className="dropdown-divider is-following"></li>
										      <li className="retweet-on-text"><button type="button" className="dropdown-link">Turn on Retweets</button></li>
										      <li className="retweet-off-text"><button type="button" className="dropdown-link">Turn off Retweets</button></li>
										      <li className="device-notifications-on-text"><button type="button" className="dropdown-link">Turn on mobile notifications</button></li>
										      <li className="device-notifications-off-text"><button type="button" className="dropdown-link">Turn off mobile notifications</button></li>
										      <li className="dropdown-divider is-embeddable"></li>
										      <li className="embed-profile"><button type="button" className="dropdown-link">Embed this Profile</button></li>
										    </ul>
										  </div>
										</div>*/}

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