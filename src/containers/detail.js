import React, { Component } from 'react'
import { connect } from 'react-redux'

import DetailCom from '../components/detail/detail'
import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall'
import InfoOwner from '../components/profile/infoOwner'
import { loadOwner } from '../actions/actionHome'
import { loadFollowers } from '../actions/actionFollow'


class Detail extends Component {
	componentDidMount(){
	    this.props.dispatch(loadOwner())
	}
	render(){
		return (
			<React.Fragment>
				<Header />
				<HeaderWall owner={this.props.owner}/>
				<div className="content">
					<InfoOwner owner={this.props.owner}/>
					<DetailCom/>
				</div>
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