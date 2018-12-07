import React, { Component } from 'react'
import './detail.css';

class Status extends Component{
	render(){
		return(
			<div>
				<div className="js-tweet-text-container">
					<p className="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text">
						<a href="/hashtag/%EB%A7%88%ED%81%AC?src=hash" data-query-source="hashtag_click" className="twitter-hashtag pretty-link js-nav" dir="ltr">
							<s>#</s>
							<b>마크</b>
						</a>
						인간카누 인간맥심 인간미떼 광고주님들 뭐하세요?!?!
					</p>

				</div>
				<div className = "AdaptiveMedia is-square">
					<div class="AdaptiveMedia-container">
				        <div class="AdaptiveMedia-singlePhoto" >
						    <div class="AdaptiveMedia-photoContainer js-adaptive-photo ">
								<img data-aria-label-part src="http://hinhanhdep.org/wp-content/uploads/2016/08/hinh-anh-nguoi-go-danbo-tam-trang.jpg" alt="" />
							</div>
						</div>
				    </div>
				</div>
			</div>
		);
	}
}

export default Status;