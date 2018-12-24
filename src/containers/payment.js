import { connect } from 'react-redux'

import { loadPayment, paymentAction } from '../actions/actionPayment'
import { loadOwner } from '../actions/actionHome'
import Payment from '../components/transaction'

const mapDispatchToProps = (dispatch) => {
	return{
		loadPayment: () => dispatch(loadPayment()),
    paymentAction: (money, mess, receiver) => dispatch(paymentAction(money, mess, receiver)),
    loadOwner: (user) => dispatch(loadOwner(user)),
	}
}

const mapStateToProps = (state) => {
  return {
    send: state.payments.send,
    receive: state.payments.receive,
    owner: state.owner.owner,
    flatEdit: state.flatEdit.isEdit,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)