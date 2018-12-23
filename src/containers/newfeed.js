import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadPost, loadRecommand} from '../actions/actionNewfeed.js'
import { Link } from "react-router-dom"
import NewFeed from '../components/newfeed/newfeed'

const mapDispatchToProps = (dispatch) => {
	return{
		loadPosts: () => dispatch(loadPost()),
        loadRecommand: () => dispatch(loadRecommand()),
	}
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    recommands: state.recommands.recommands,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFeed)