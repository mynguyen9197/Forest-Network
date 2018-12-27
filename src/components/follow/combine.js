import React, { Component } from 'react'
import Person from './item'
import '../../App.css'
import './style.css'
import { connect } from 'react-redux'

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
	        if(user.name.toLowerCase().includes(this.state.key.toLowerCase()) === true || user.publicKey === this.state.key){
	          followList.push(user)
	          console.log({key: this.state.key, pub: user.publicKey})
	        }
	      })
	    }else {
	      this.props.follows.map(user => {
	        followList.push(user)
	      })
	    }
	    let list = this.props.curUser.following
 		return (
	 		<div>
	 			<input className="search" placeholder="Search" onChange={this.handleSearch.bind(this)} style={{width:"100%", marginLeft: "0px"}}/>
			    <br /> <br />
			    <div className="follow-cell">
			      { followList.map((follow, i) => <Person key={i} follow = {follow} isFollowing = {true}/>
					 )}
			    </div>
			</div>
	  	)
 	}
}

const mapStateToProps = (state) => {
  return {
    curUser: state.curUser.curUser,
  }
}

export default connect(mapStateToProps)(PersonList);
