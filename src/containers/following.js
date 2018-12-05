import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonList from '../components/follow/combine'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import { loadFollowing } from '../actions/actionFollow'
import { loadOwner } from '../actions/actionHome'


class FollowingList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowing())
	    this.props.dispatch(loadOwner())
	}

	render(){
		let follows = this.props.following.slice()
		return (
			<React.Fragment>
				<Header />
				<HeaderWall owner={this.props.owner}/>
				<br /> <br />
				<PersonList follows = { follows } isFollowing = { true } />
			</React.Fragment>	
		);
	}
}

const mapStateToProps = (state) => {
  return {
    following: state.following.following,
    owner: state.owner.owner,
  }
}

export default connect(mapStateToProps)(FollowingList)