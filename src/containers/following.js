import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonList from '../components/follow/combine'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import InfoOwner from '../components/profile/infoOwner'
import { loadFollowing } from '../actions/actionFollow'
import { loadOwner } from '../actions/actionHome'



class FollowingList extends Component {
	componentDidMount(){
	    this.props.dispatch(loadFollowing(localStorage.getItem('public')))
	    this.props.dispatch(loadOwner(localStorage.getItem('public')))

	}

	render(){
		let follows = this.props.following.slice()
		return (
			<React.Fragment>
				<Header owner={this.props.owner} />
				<HeaderWall owner={this.props.owner}/>
				<div className="content">
					<InfoOwner owner={this.props.owner}  isEdit={this.props.flatEdit}/>
					<PersonList follows = { follows } isFollowing = { true } />
				</div>
			</React.Fragment>	
		);
	}
}

const mapStateToProps = (state) => {
  return {
    following: state.following.following,
    owner: state.owner.owner,
    flatEdit: state.flatEdit.isEdit,
  }
}

export default connect(mapStateToProps)(FollowingList)