import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'


import Header from '../components/header/header'
import HeaderWall from '../components/profile/headerWall.js'
import Post from '../components/home/post'
import InfoOwner from '../components/profile/infoOwner'
import Recommand from '../components/home/recommand'
import avt from '../img/images.jpg'
import { loadPost, loadRecommand, loadOwner } from '../actions/actionHome.js'



class Home extends Component {
	componentDidMount(){
	    this.props.dispatch(loadPost())
	    this.props.dispatch(loadRecommand())
	    this.props.dispatch(loadOwner())
	}
	render(){
		let posts = this.props.posts
		return (
			<React.Fragment>
				<Header/>
				<HeaderWall owner={this.props.owner}/>
				<div className="content">
					<InfoOwner owner={this.props.owner} isEdit={this.props.flatEdit} />
					<div>
						{ this.props.posts.map((item, i) => <Post infoPost={item}/>)}
					</div>
					<Recommand recommands={this.props.recommands}/>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    recommands: state.recommands.recommands,
    owner: state.owner.owner,
    flatEdit: state.flatEdit.isEdit,
  }
}

export default connect(mapStateToProps)(Home)
