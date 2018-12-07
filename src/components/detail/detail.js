import React, { Component } from 'react'
import { withRouter } from 'react-router'
import  Account from './account'
import Status from'./status'
import LikeComment from './likecmt'
import './detail.css'
import Modal from 'react-responsive-modal'


class Detail extends Component{
	state = {
	    open: true,
	}
	 
	onCloseModal = () => {
	    this.setState({ open: false });
	    this.props.history.push('/')
	}

	render(){
		return(
	        <Modal open={this.state.open} onClose={this.onCloseModal} center>
	          <div className ="PermalinkOverlay-modal" id="permalink-overlay-dialog" role="alertdialog"
				aria-labelledby="permalink-overlay-header" aria-describedby="permalink-overlay-body">
					<div className="js-first-tabstop" tabindex="0"></div>
					<div className="PermalinkOverlay-spinnerContainer u-hidden">
						<div class="PermalinkOverlay-spinner"></div>
					</div>
					<div className="PermalinkOverlay-content" role="document">
						<div className="PermalinkOverlay-body" id="permalink-overlay-body">
							<div class="permalink-container permalink-container--withArrows">
								<div role="main" className="permalink light-inline-actions stream-uncapped has-replies original-permalink-page">
									<div className="permalink-inner permalink-tweet-container">
										<div className= "tweet permalink-tweet js-actionable-user js-actionable-tweet js-original-tweet has-cards with-social-proof  has-content logged-in js-initial-focus">
											<Account/>
											<Status/>
											<LikeComment/>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
	        </Modal>
	    );
	}
}

export default withRouter(Detail)