import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header/header'
import HeaderWall from '../../components/home/headerWall.js'

class Home extends Component {
	render(){
		return (
			<div>
				<Header/>
				<HeaderWall/>
			</div>
		);
	}
}

export default Home