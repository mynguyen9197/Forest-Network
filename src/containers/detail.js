import React, { Component } from 'react'
import { connect } from 'react-redux'

import DetailCom from '../components/detail/detail'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import { loadOwner } from '../actions/actionHome'
import { loadFollowers } from '../actions/actionFollow.js'


class Detail extends Component {
	componentDidMount(){
	    this.props.dispatch(loadOwner())
	}
	render(){
		return (
			<React.Fragment>
				<Header />
				<HeaderWall owner={this.props.owner}/>
				<DetailCom/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    owner: state.owner.owner,
  }
}

export default connect(mapStateToProps)(Detail)