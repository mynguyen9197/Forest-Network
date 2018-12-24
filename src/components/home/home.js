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
			user: localStorage.getItem('public')
		}
	}

	componentDidMount(){
	    this.props.loadPosts(this.state.user)
	    this.props.loadRecommand()
	    this.props.loadOwner(this.state.user)
  	}																

	render(){
console.log( this.props.posts)
		return (
			<React.Fragment>
				<Header owner={this.props.owner} />
				<HeaderWall owner={this.props.owner}/>
				<div className="content">
					<InfoOwner owner={this.props.owner} isEdit={this.props.flatEdit} />
					<div>
						{ this.props.posts.map((item, i) => {
							if(item.type===1) return <Post infoPost={item} owner={this.props.owner}/>})}
					</div>
					<Recommand recommands={this.props.recommands}/>
				</div>
			</React.Fragment>
		);
	}
}

export default  Home