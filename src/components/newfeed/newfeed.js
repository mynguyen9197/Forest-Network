
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
			response: '',
			account: '',
			post: [],
			ownerpost: [],
		}
	}

	componentWillMount() {
	    this.setState({account: localStorage.getItem('public')})
	}

	componentDidMount(){
	    this.props.loadRecommand()
	    this.props.loadOwner()
	 	this.loadNewFeed()
	    setInterval( async () => {
	    	this.background()
		}, 4000)
  	}

  	background = async () => {
  		var tmpPost = []
  		var tmpOwner = []
  		var res1 = await axios.get(`http://localhost:5000/api/v2/getInfor?account=${this.state.account}`)
  		tmpOwner = tmpOwner.concat(res1.data.user)

  		var res = await axios.get(`http://localhost:5000/api/v2/getPost?account=${this.state.account}`)
  		tmpPost = tmpPost.concat(res.data.post)

  		for(var i = 0; i < res1.data.user.following.length; i++)
  		{
  			var tmp = await axios.get(`http://localhost:5000/api/v2/getPost?account=${res1.data.user.following[i]}`)
  			tmpPost = tmpPost.concat(tmp.data.post)

  			var res2 = await axios.get(`http://localhost:5000/api/v2/getInfor?account=${res1.data.user.following[i]}`)
	  		tmpOwner = tmpOwner.concat(res2.data.user)
	  	}

  		if(this.state.post != undefined && this.state.ownerpost != undefined)
  		{
  			this.setState({
  				post: this.sort(tmpPost),
  				ownerpost: tmpOwner
  			})
  		}
  	}

  	loadNewFeed = async () => {
  		var res1 = await axios.get(`http://localhost:5000/api/v2/getInfor?account=${this.state.account}`)
  		this.setState({ 
  			ownerpost: this.state.ownerpost.concat(res1.data.user)
  		})

  		var res = await axios.get(`http://localhost:5000/api/v2/getPost?account=${this.state.account}`)
  		this.setState({ 
  			post: [...this.state.post, ...res.data.post]
  		})

  		await res1.data.user.following.forEach( async item => {
  			var tmp = await axios.get(`http://localhost:5000/api/v2/getPost?account=${item}`)
  			this.setState({ 
  				post: [...this.state.post, ...tmp.data.post]
  			})
  			var res2 = await axios.get(`http://localhost:5000/api/v2/getInfor?account=${item}`)
	  		this.setState({ 
	  			ownerpost: this.state.ownerpost.concat(res2.data.user)
	  		})
  		})

		this.setState({ post: this.sort(this.state.post)})
  	}

  	sort = (Post) => {
  		var Arr = Post
  		for( var i =  Arr.length - 1 ; i > 0; i--)
  			for( var j = 0; j < i; j++)
  			{
  				if(Date.parse(Arr[j].date) < Date.parse(Arr[j+1].date))
  				{
  					var tmp = Arr[j]
  					Arr[j] = Arr[j+1]
  					Arr[j+1] = tmp
  				}
  			}
  		return Arr
  	}

	render(){
		return(
			<>
				<Header owner={this.props.owner}/>
				<div className="bodynewfeed">
					<Profile/>
					<div className="content">
						<div className="postsnewfeed">
							{ this.state.post.map((item, i) => <Post infoPost={item} infoOnwer={this.state.ownerpost} />)}
						</div>
						<Recommand/>		
					</div>
				</div>
			</>
		);
	}
}

export default NewFeed;


