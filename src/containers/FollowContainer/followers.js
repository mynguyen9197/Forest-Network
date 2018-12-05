import React, { Component } from 'react'
import { connect } from 'react-redux'
import PersonList from '../../components/follow/combine'
import Header from '../../components/header/header'
import HeaderWall from '../../components/home/headerWall'
import Profile from '../ProfileContainer/profile'
import { loadFollowers } from './action'
import '../../App.css'


class FollowersList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowers())
	}

	render(){
		let follows = this.props.followers.slice()
		return (
			<div className="AppContent">
				<Header />
				<HeaderWall />
				
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
		);
	}
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
  }
}

export default connect(mapStateToProps)(FollowersList)