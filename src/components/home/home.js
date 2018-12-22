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
			response: ''
		}
	}

	componentDidMount(){
	    this.props.loadPosts()
	    this.props.loadRecommand()
	    this.props.loadOwner(localStorage.getItem('secret'))
  	}																

	render(){
		console.log(this.state.response)
		return (
			<React.Fragment>
				<Header ava={avt}/>
				<HeaderWall owner={this.props.owner}/>
				<div className="content">
					<InfoOwner owner={this.props.owner} isEdit={this.props.flatEdit} />
					<div>
						{ this.props.posts.map((item, i) => <Link to={`/${this.props.owner.email}/status/${item.id}`} style={{ textDecoration: 'none', color:'black' }}><Post infoPost={item}/></Link>)}
					</div>
					<Recommand recommands={this.props.recommands}/>
				</div>
			</React.Fragment>
		);
	}
}

export default  Home