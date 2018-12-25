import React, { Component } from 'react'
import Person from './item'
import '../../App.css'
import './style.css'

class PersonList extends Component {
	constructor(props){
		super(props)
		this.state = {
			key: '',
		}
	}

	handleSearch(e){
		this.setState({
			key: e.target.value
		})
	}

 	render(){
 		let followList = []
 		if(this.state.key){
	      this.props.follows.map(user => {
	        if(user.displayName.toLowerCase().includes(this.state.key.toLowerCase()) === true || user.publicKey === this.state.key){
	          followList.push(user)
	        }
	      })
	    }else {
	      this.props.follows.map(user => {
	        followList.push(user)
	      })
	    }
 		return (
	 		<div>
	 			<input className="search" placeholder="Search" onChange={this.handleSearch.bind(this)} style={{width:"100%", marginLeft: "0px"}}/>
			    <br /> <br />
			    <div className="follow-cell">
			      { followList.map((follow, i) => <Person key={i} follow = {follow} isFollower = {this.props.isFollower} isFollowing = {this.props.isFollowing}/> )}
			    </div>
			</div>
	  	)
 	}
}


export default PersonList;
