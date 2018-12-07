import React, { Component } from 'react'
import './detail.css';

class Account extends Component{
	render(){
		return(
			<div className="content clearfix">
				<div className="permalink-header">
					<a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="">
						<img className="avatarown js-action-profile-avatar" src="https://wikicachlam.com/wp-content/uploads/2018/05/tong-hop-nhung-hinh-anh-dep-nhat-cua-bo-cong-anh-30-1.jpeg" alt=""/>
						    <span className="FullNameGroup">
								<strong className="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">MARKSTOUCH</strong>
								<span>‏&rlm;</span>
								<span className="UserBadges"></span>
								<span class="UserNameBreak">&nbsp;</span>
							</span>
							<span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">
								<b>@markstouch</b>
							</span>
					</a>
					<div className="follow-bar">
						<div className="user-actions btn-group not-muting can-dm not-following">
							<span className="user-actions-follow-button js-follow-btn follow-button">
								<button type="button" className=" EdgeButton EdgeButton--secondary EdgeButton--medium button-text follow-text">
									<span aria-hidden="true">Follow</span>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Account;