import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import './detail.css';

class LikeComment extends Component{
	render(){
		return(
			<div>
				<div className="js-tweet-details-fixer tweet-details-fixer">
					<div className="client-and-actions">
						<span className="metadata">
						    <span>7:08 AM - 29 Nov 2018</span>

						 </span>
					</div>
					<div className="js-machine-translated-tweet-container">
					</div>
					<div className="js-tweet-stats-container tweet-stats-container">
						<ul className="stats" aria-label="Retweeted and favorited by">
							<li className="js-stat-count js-stat-retweets stat-count" aria-hidden="true">
							    <a tabindex="0" role="button" data-tweet-stat-count="211" data-compact-localized-count="211" class="request-retweeted-popup" data-activity-popup-title="211 retweets">
						        <strong>211</strong> Retweets
							    </a>
						    </li>
						    <li class="js-stat-count js-stat-favorites stat-count" aria-hidden="true">
							    <a tabindex="0" role="button" data-tweet-stat-count="155" data-compact-localized-count="155" class="request-favorited-popup" data-activity-popup-title="155 likes">
						        <strong>155</strong> Likes
							    </a>
						    </li>
						    <li className="avatar-row js-face-pile-container">
							    <a className="js-profile-popup-actionable js-tooltip"
							     href="/Ki55Uknow" data-user-id="358197551" 
							     original-title="저음 만났을 때저럼 여전히 자랑해요♥️" 
							     rel="noopener" data-original-title="저음 만났을 때저럼 여전히 자랑해요♥️">
									<img className="avatar size24 js-user-profile-link" 
									src="https://pbs.twimg.com/profile_images/1033031338750664704/yK256fvl_normal.jpg" 
									alt="저음 만났을 때저럼 여전히 자랑해요♥️"/>
								</a>
								<a className="js-profile-popup-actionable js-tooltip" 
								href="/shinehimawari" data-user-id="921354188" original-title="Shine Hima" 
								rel="noopener" data-original-title="Shine Hima">
									<img className="avatar size24 js-user-profile-link" 
									src="https://pbs.twimg.com/profile_images/945865520976314368/sRBtjAc9_normal.jpg"
									alt="Shine Hima"/>
								</a>
								<a className="js-profile-popup-actionable js-tooltip" 
								href="/TVXQ_JYJ_KJJ" data-user-id="179484030" original-title="poompuii_cassy" 
								rel="noopener" data-original-title="poompuii_cassy">
									<img className="avatar size24 js-user-profile-link" src="https://pbs.twimg.com/profile_images/1051310680500924416/NHmvyd9L_normal.jpg" alt="poompuii_cassy"/>
								</a>
								<a className="js-profile-popup-actionable js-tooltip" 
								href="/Teeranat16" data-user-id="825896515780517888" original-title="tammy" 
								rel="noopener" data-original-title="tammy">
									<img className="avatar size24 js-user-profile-link" src="https://pbs.twimg.com/profile_images/1064786111916998656/_6LJSBzz_normal.jpg" alt="tammy"/>
								</a>
								<a className="js-profile-popup-actionable js-tooltip" 
								href="/sudarat9397" data-user-id="4707241375" original-title="ICE SUDARAT" 
								rel="noopener" data-original-title="ICE SUDARAT">
									<img className="avatar size24 js-user-profile-link" src="https://pbs.twimg.com/profile_images/837257504589389828/VYQpTTht_normal.jpg" alt="ICE SUDARAT"/>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="stream-item-footer">
					<div className="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
						<div className="ProfileTweet-action ProfileTweet-action--reply">
							<button className="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1058693120639025152">
							    <div className="IconContainer js-tooltip" title="Reply">
								    <span className="fa fa-comment"></span>
							    </div>
							    <span className="ProfileTweet-actionCount" data-tweet-stat-count="2">
							        <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">2</span>
								</span>
							</button>
						</div>
						<div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
							<button className="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1058693120639025152">
							    <div className="IconContainer js-tooltip" data-original-title="Like">
								    <span role="presentation" className="fa fa-heart"></span>
							    </div>
							    <span className="ProfileTweet-actionCount" data-tweet-stat-count="6489">
									<span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">6.5K</span>
								</span>
							</button>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default LikeComment;