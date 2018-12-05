import React, { Component } from 'react'
import DetailCom from '../../components/detail/detail'
import Header from '../../components/header/header'
import HeaderWall from '../../components/home/headerWall'
import { loadFollowers } from './action'


class Detail extends Component {

	render(){
		return (
			<div>
				<Header />
				<HeaderWall />
				<br /> <br />
				<DetailCom/>
			</div>
		);
	}
}

export default Detail