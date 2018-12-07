import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonList from '../components/follow/combine'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import InfoOwner from '../components/profile/infoOwner.js'
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
				<div className="content">
					<InfoOwner owner={this.props.owner} isEdit={this.props.flatEdit}/>
					<PersonList follows = { follows } isFollower = { true } />
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
    owner: state.owner.owner,
    flatEdit: state.flatEdit.isEdit,
  }
}

export default connect(mapStateToProps)(FollowersList)