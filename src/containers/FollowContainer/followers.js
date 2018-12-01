import React, { Component } from 'react'
import { connect } from 'react-redux'
import PersonList from '../../components/follow/combine'
import { loadFollowers } from './action'


class FollowersList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowers())
	}

	render(){
		let follows = this.props.followers.slice()
		return (
			<PersonList isFollower = { true } follows = { follows } />
		);
	}
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
  }
}

export default connect(mapStateToProps)(FollowersList)