import { connect } from 'react-redux'
import { loadPost, loadRecommand } from '../actions/actionHome.js'
import { loadOwner, updateProfile } from '../actions/actionProfile.js'
import Home from '../components/home/home'

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    recommands: state.recommands.recommands,
    owner: state.profile.owner,
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadPosts: () => dispatch(loadPost()),
	    loadRecommand: () => dispatch(loadRecommand()),
	    loadOwner: () => dispatch(loadOwner()),
	    updateProfile: (profile) => dispatch(updateProfile(profile)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)