import React, { Component } from 'react'
import { connect } from 'react-redux'

import DetailCom from '../components/detail/detail'
import { loadOwner } from '../actions/actionHome'
import { loadFollowers } from '../actions/actionFollow'


const mapDispatchToState = (dispatch) => {
	return({})
}

const mapStateToProps = (state) => {
  return({})
}

export default connect(mapStateToProps, mapDispatchToState)(DetailCom)