import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal'

import Header from '../header/header'
import HeaderWall from '../profile/headerWall'
import InfoOwner from '../profile/infoOwner'
import './style.css'

import { Link } from "react-router-dom";

class Transacion extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      open: false,
	      status: '',
	      open2: false,
	      acc: '',
	      money: '',
	    }
	  }
	 
	  onOpenModal = () => {
	    this.setState({ open: true });
	  }

	  onCloseModal = () => {
	    this.setState({ open: false });
	  }

	  onOpenModal2 = () => {
	    this.setState({ open2: true });
	  }

	  onCloseModal2 = () => {
	    this.setState({ open2: false });
	  }

	handleSubmit(e){
		e.preventDefault()
		this.setState({
			open2: true
		})
	}

	handleConfirm(e){
		e.preventDefault()
		this.setState({
			open2: false,
			open: false
		})
		const { acc, money, message } = this.state
		this.props.paymentAction(money, message, acc)
	}

	handleCancel(e){
		e.preventDefault()
		this.setState({
			open2: false
		})
	}

	handleChangeAccount(e){
		this.setState({
			acc: e.target.value
		})
	}

	handleChangeAmount(e){
		this.setState({
			money: e.target.value
		})
	}

	handleChangeMess(e){
		this.setState({
			message: e.target.value
		})
	}

	componentDidMount(){
	    this.props.loadPayment()
	    this.props.loadOwner(localStorage.getItem('public'))
  	}																

	render(){
		console.log(this.props.send.params)
		let sender = this.props.send.map((trans, i) => {
	      return <TransRow id = {i+1}
	      data = {trans}
	      />
	    })
	    let receiver = this.props.receive.map((person,i) => {
	      return <TransRow id = {i+1}
	      data = { person }
	      />
	    })
		return (
			<div>
				<Header owner={this.props.owner} />
				<HeaderWall owner={this.props.owner} account={localStorage.getItem('public')}/>
				<div className="wrap">
					<button type="button" className="btn btn-primary trans" onClick={this.onOpenModal.bind(this)}
					style={{height:"50px"}}>Thực hiện giao dịch</button>
					<div className="main">
						<div className="wrap-send">
							<h2>ĐÃ CHUYỂN</h2>
							<table class="table table-striped">
							    <thead>
							      <tr>
							        <th>Số thứ tự</th>
							        <th>Người nhận</th>
							        <th>Số tiền</th>
							      </tr>
							    </thead>
							    <tbody>
							    	{ sender }
							    </tbody>
							  </table>
						</div><br />
						<div className="wrap-receive">
							<h2>ĐÃ NHẬN</h2>
							<table class="table table-striped">
							    <thead>
							      <tr>
							        <th>Số thứ tự</th>
							        <th>Người gửi</th>
							        <th>Số tiền</th>
							      </tr>
							    </thead>
							    <tbody>
							      { receiver }
							    </tbody>
							  </table>
						</div>
					</div>
					<Modal open={this.state.open} onClose={this.onCloseModal.bind(this)} center className="modal">
			            <div className="modal-header">
			              <h3 className="modal-title" id="Tweetstorm-dialog-header"><h2>Thực hiện chuyển khoản</h2></h3>
			            </div>
			            <div className="model-body">
			              <div className="wrap-content">
			                <div className="tweet-wrap">
			                  <form>
								  <div class="form-group">
								    <label for="email">Khóa:</label>
								    <input type="email" class="form-control" id="email" onChange={this.handleChangeAccount.bind(this)}/>
								  </div>
								  <div class="form-group">
								    <label for="pwd">Số tiền:</label>
								    <input type="text" class="form-control" id="pwd" onChange={this.handleChangeAmount.bind(this)}/>
								  </div>
								  <div class="form-group">
								    <label for="email">Lời nhắn:</label>
								    <input type="email" class="form-control" id="email" onChange={this.handleChangeMess.bind(this)}/>
								  </div>
								  <button type="submit" class="btn btn-default" onClick={this.handleSubmit.bind(this)}>Gửi</button>
								</form>
			                </div>
			               </div>
			            </div>
			        </Modal>

			        <Modal open={this.state.open2} onClose={this.onCloseModal2.bind(this)} center className="modal">
			            
			            <div className="model-body">
			              <div className="wrap-content">
			                <div className="tweet-wrap">
			                  <form>
								  <h2>bạn có chắc muốn gửi?</h2><br/>
								  <button type="submit" class="btn btn-default" onClick={this.handleConfirm.bind(this)}>Chắc chắn</button>
								  <button type="submit" class="btn btn-default" onClick={this.handleCancel.bind(this)}>Hủy</button>
								</form>
			                </div>
			               </div>
			            </div>
			        </Modal>
				</div>
			</div>
		);
	}
}

const TransRow = (props) => {
  return (
    <tr>
      <td>
        { props.id }
      </td>
      <td>
        { props.data.address }
      </td>
      <td>
        { props.data.amount }
      </td>
    </tr>
  );
}

export default Transacion