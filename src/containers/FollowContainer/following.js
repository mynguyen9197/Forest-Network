import React, { Component } from 'react'
import { connect } from 'react-redux'
import PersonList from '../../components/follow/combine'
import Header from '../../components/header/header'
import HeaderWall from '../../components/home/headerWall'
import { loadFollowing } from './action'


class FollowingList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowing())
	}

	render(){
		let follows = this.props.following.slice()
		return (
			<div>
				<Header />
				<HeaderWall />
				<br /> <br />
				<PersonList follows = { follows } isFollowing = { true } />
			</div>
			
		);
	}
}

const mapStateToProps = (state) => {
  return {
    following: state.following.following,
  }
}

export default connect(mapStateToProps)(FollowingList)