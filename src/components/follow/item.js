import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { loadOwner } from '../../actions/actionHome'
import { connect } from 'react-redux'
import { followSO, loadCurUser } from '../../actions/actionFollow'

class Person extends Component {
	constructor(props){
		super(props)
		this.state = {
			isFollowing: this.props.isFollowing,
		}
	}

	handleClick(){
		let list = this.props.curUser.following
        if(!this.state.isFollowing){
            list.push(this.state.user)
            this.props.followSO(list)
        }
        else{
        	var ind = list.indexOf(this.props.follow.publicKey)
        	if(ind>-1) {
        		list.splice(ind, 1)
        		this.props.followSO(list)
        	}
        	
        }

		this.setState({
			isFollowing: !this.state.isFollowing
		})
	}

	componentDidMount(){
		// let list = this.props.curUser.following
		// var ind = list.indexOf(this.props.follow.publicKey)
		// if(ind===-1) {
  //       		this.setState({
  //       			isFollowing: false
  //       		})
  //       	}
	}

	render(){
		var vals = ''
        if(this.props.follow.avatar)
            {
                let bufferOriginal = Buffer.from(this.props.follow.avatar)
                vals = bufferOriginal.toString('base64')
            }
		return (
       		<div className="ProfileCard">
	  			<Link to={`/following/${this.props.follow.publicKey}`} className="ProfileCard-bg" style={{background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTtY1L05JaQBl_WKkjh6cB1sZlov7h086zcpCekmsPoGATf1noQ")`}}>
	  			</Link>

	  			<div className="ProfileCard-content">
	    			<Link to={`/following/${this.props.follow.publicKey}`} className="ProfileCard-avatarLink js-nav js-tooltip">
	      				{!this.props.follow.avatar?<img className="ProfileCard-avatarImage js-action-profile-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt="" />:
	      				<img className="ProfileCard-avatarImage js-action-profile-avatar" src={'data:image/jpeg;base64,' + vals} alt="" />}
	    			</Link>
	    
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
				    		<Link to={`/following/${this.props.follow.publicKey}`} className="fullname ProfileNameTruncated-link u-textInheritColor js-nav">
				      			{this.props.follow.displayName}</Link></div><span className="UserBadges"></span>
				      </div>
				      
				      <span className="ProfileCard-screenname">
				        <Link to={`/following/${this.props.follow.publicKey}`} className="ProfileCard-screennameLink u-linkComplex js-nav" data-aria-label-part="">
				          <span className="username u-dir" dir="ltr"><b className="u-linkComplex-target">{this.props.follow.name}</b></span>
				        </Link><span>‏</span> {this.props.isFollower || this.props.follow.followed?<span className="FollowStatus">Follows you</span>:<span></span>}
				      </span>
				      
				      <p className="ProfileCard-bio u-dir" dir="ltr" data-aria-label-part="">{this.props.follow.profileBio}</p>
				    </div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    curUser: state.curUser.curUser,
    owner: state.owner.owner,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followSO: (acc) => dispatch(followSO(acc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)