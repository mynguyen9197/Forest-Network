import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header/header'
import HeaderWall from '../../components/home/headerWall'
import Post from '../../components/home/post'
import InfoOwner from '../../components/profile/infoOwner'
import Recommand from '../../components/home/recommand'
import avt from './../../img/images.jpg'
import { loadPost, loadRecommand, loadOwner } from './action'

class Home extends Component {
	componentDidMount(){
	    this.props.dispatch(loadPost())
	    this.props.dispatch(loadRecommand())
	    this.props.dispatch(loadOwner())
	}
	render(){
		let posts = this.props.posts
		console.log(this.props.owner)
		return (
			<div>
				<Header/>
				<HeaderWall owner={this.props.owner}/>
				<div className="content">
					<InfoOwner owner={this.props.owner}/>
					<div>
						{ this.props.posts.map((item, i) => <Post infoPost={item}/>)}
					</div>
					<Recommand recommands={this.props.recommands}/>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    recommands: state.recommands.recommands,
    owner: state.owner.owner,
  }
}

export default connect(mapStateToProps)(Home)
