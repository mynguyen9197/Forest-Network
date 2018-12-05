import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonList from '../components/follow/combine'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import Profile from './profile'
import { loadFollowers } from '../actions/actionFollow'
import { loadOwner } from '../actions/actionHome'
import '../App.css'


class FollowersList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowers())
	    this.props.dispatch(loadOwner())
	}

	render(){
		let follows = this.props.followers.slice()
		return (
			<React.Fragment>
				<Header />
				<HeaderWall owner={this.props.owner}/>
				<div className="AppContent">
				    <div className="AppContainer">
				        <div className="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
				         	<div className="leftside">
				         		<Profile /> {/*left component*/}
				         	</div>
			      			{/*right component*/}
			      			<div className="rightside">
			      				<PersonList isFollower = { true } follows = { follows } />
			      			</div>
					    </div>
				    </div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
    owner: state.owner.owner,
  }
}

export default connect(mapStateToProps)(FollowersList)