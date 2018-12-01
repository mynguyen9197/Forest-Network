import React, { Component } from 'react'
import { connect } from 'react-redux'
import PersonList from '../../components/follow/combine'
import { loadFollowing } from './action'


class FollowingList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowing())
	}

	render(){
		let follows = this.props.following.slice()
		return (
			<PersonList follows = { follows } isFollowing = { true } />
		);
	}
}

const mapStateToProps = (state) => {
  return {
    following: state.following.following,
  }
}

export default connect(mapStateToProps)(FollowingList)