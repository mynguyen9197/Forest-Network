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
	    this.props.loadFollowers()
	    this.props.loadOwner(localStorage.getItem('public'))
  	}

	render(){
		let follows = this.props.followers.slice()
		return (
			<React.Fragment>
				<Header owner={this.props.owner}/>
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

const mapDispatchToProps = (dispatch) => {
	return{
		loadFollowers: () => dispatch(loadFollowers()),
    	loadOwner: (user) => dispatch(loadOwner(user)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersList)