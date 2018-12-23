
import React, {Component} from 'react';
import Header from '../header/header';
import avt from '../../img/images.jpg';
import {Link} from 'react-router-dom';
import Profile from './profile.js';
import Post from './post.js';
import Recommand from './recommand.js'
import axios from 'axios';


class NewFeed extends Component{

	constructor(props){
		super(props)
		this.state = {
			response: ''
		}
	}


	componentDidMount(){
	    this.props.loadPosts()
	    this.props.loadRecommand()
	    this.props.loadOwner()
  	}



	render(){
		return(
			<>
				<Header owner={this.props.owner}/>
				<div className="bodynewfeed">
					<Profile/>
					<div className="content">
						<div className="postsnewfeed">
							{ this.props.posts.map((item, i) => <Post infoPost={item}/>)}
						</div>
						<Recommand recommands={this.props.recommands}/>
						
					</div>
				</div>

			</>
		);
	}
}


export default NewFeed;


