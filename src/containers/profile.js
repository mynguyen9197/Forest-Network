import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/profile/profile'
import { loadProfile, updateProfile } from '../actions/actionProfile.js'
import '../App.css'

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadProfile: () => dispatch(loadProfile()),
  updateProfile: (profile) => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)