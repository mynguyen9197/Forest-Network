import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadPost, loadRecommand, loadOwner, loadBalance, loadSequence } from '../actions/actionHome.js'
import { Link } from "react-router-dom"
import Home from '../components/home/home'

const mapDispatchToProps = (dispatch) => {
	return{
		loadPosts: (user) => dispatch(loadPost(user)),
        loadRecommand: () => dispatch(loadRecommand()),
        loadOwner: (user) => dispatch(loadOwner(user)),
        loadBalance: (user) => dispatch(loadBalance(user)),
        loadSequence: (user) => dispatch(loadSequence(user)),
	}
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    recommands: state.recommands.recommands,
    owner: state.owner.owner,
    flatEdit: state.flatEdit.isEdit,
    sequence: state.sequence.sequence,
    balance: state.balance.recv - state.balance.pay,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)