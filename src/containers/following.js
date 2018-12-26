import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonList from '../components/follow/combine'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import InfoOwner from '../components/profile/infoOwner'
import { loadFollows, loadFollowers, loadCurUser } from '../actions/actionFollow'
import { loadOwner, loadBalance, loadSequence } from '../actions/actionHome'



class FollowingList extends Component {
	constructor(props){
		super(props)
		this.state = {
			user: this.props.match.params.id,
		}
	}

	componentDidMount(){
	    this.props.dispatch(loadFollows(this.state.user))
	    this.props.dispatch(loadOwner(this.state.user))
	    this.props.dispatch(loadBalance(this.state.user))
	    this.props.dispatch(loadSequence(this.state.user))
	    this.props.dispatch(loadFollowers(this.state.user))
	    this.props.dispatch(loadCurUser())
	}

	render(){
		const followers = this.props.followers
		
		let follows = this.props.following.slice()
		return (
			<React.Fragment>
				<Header owner={this.props.owner} />
				<HeaderWall owner={this.props.owner} account={this.state.user} followers={followers}/>
				<div className="content">
					<InfoOwner owner={this.props.owner}  isEdit={this.props.flatEdit} balance={this.props.balance} seq={this.props.sequence}/>
					<PersonList follows = { follows } isFollowing = { true } listFollow={this.props.curUser}/>
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
    balance: state.balance.recv - state.balance.pay,
    sequence: state.sequence.sequence,
    followers: state.followers.followers,
    curUser: state.curUser.curUser,
  }
}

export default connect(mapStateToProps)(FollowingList)