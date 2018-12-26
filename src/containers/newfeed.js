import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadPost, loadRecommand, loadOwner} from '../actions/actionNewfeed.js'
import { Link } from "react-router-dom"
import NewFeed from '../components/newfeed/newfeed'

const mapDispatchToProps = (dispatch) => {
	return{
        loadRecommand: () => dispatch(loadRecommand()),
        loadOwner: () => dispatch(loadOwner()),
	}
}

const mapStateToProps = (state) => {
  return {
    recommands: state.recommands.recommands,
    owner: state.owner.owner,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFeed)