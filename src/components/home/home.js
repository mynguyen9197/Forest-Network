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
  	}																

	render(){
		//console.log( this.props.posts)
		return (
			<React.Fragment>
				<Header owner={this.props.owner} />
				<HeaderWall owner={this.props.owner} account={this.state.user}/>
				<div className="content">
					<InfoOwner owner={this.props.owner} isEdit={this.props.flatEdit} />
					<div>
						{ this.props.posts.map((item, i) => {
							if(item.type===1) return <Post infoPost={item} owner={this.props.owner} account={this.state.user}/>})}
					</div>
					<Recommand recommands={this.props.recommands}/>
				</div>
			</React.Fragment>
		);
	}
}

export default  Home

// import React from 'react'
// import Avatar from 'react-avatar-edit'

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     const src = './example/einshtein.jpg'
//     this.state = {
//       preview: null,
//       src
//     }
//     this.onCrop = this.onCrop.bind(this)
//     this.onClose = this.onClose.bind(this)
//   }
  
//   onClose() {
//     this.setState({preview: null})
//   }
  
//   onCrop(preview) {
//     this.setState({preview})
//   }
  
//   render () {
//     return (
//       <div>
//         <Avatar
//           width={390}
//           height={295}
//           onCrop={this.onCrop}
//           onClose={this.onClose}
//           src={this.state.src}
//         />
//         <img src={this.state.preview} alt="Preview" />
//       </div>
//     )
//   }
// }

// export default App