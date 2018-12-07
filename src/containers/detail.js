import { connect } from 'react-redux'

import DetailCom from '../components/detail/detail'
import { loadOwner } from '../actions/actionHome'


const mapDispatchToState = (dispatch) => {
	return({})
}

const mapStateToProps = (state) => {
  return({})
}

export default connect(mapStateToProps, mapDispatchToState)(DetailCom)