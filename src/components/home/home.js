import React, { Component } from 'react'
import axios from 'axios'

import Header from '../header/header'
import HeaderWall from '../profile/headerWall.js'
import Post from '../home/post'
import InfoOwner from '../profile/infoOwner'
import Recommand from '../home/recommand'
import avt from '../../img/images.jpg'

import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			isEditing: false,
			response: '',
			user: this.props.match.params.id
		}
	}

	componentDidMount(){
	    this.props.loadPosts(this.state.user)
	    this.props.loadRecommand()
	    this.props.loadOwner(this.state.user)
	    this.props.loadBalance(this.state.user)
	    this.props.loadSequence(this.state.user)
  	}																

	render(){
		return (
			<React.Fragment>
				<Header owner={this.props.owner} />
				<HeaderWall owner={this.props.owner} account={this.state.user} numPosts={this.props.posts.length}/>
				<div className="content">
					<InfoOwner owner={this.props.owner} isEdit={this.props.flatEdit} balance={this.props.balance} seq={this.props.sequence}/>
					<div>
						{ this.props.posts.map((item, i) => {
							return <Post infoPost={item} key={i} owner={this.props.owner} account={this.state.user}/>})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default  Home