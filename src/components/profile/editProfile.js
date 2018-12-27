import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { flatEdit, renameAction } from '../../actions/actionProfile'
import { connect } from 'react-redux'

import './style.css';

class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state = { 
            displayName: this.props.profile.name,
        }
    }

    handleChangeName(e){
        this.setState({
            displayName: e.target.value
        })
    }

    onSave(){
        if(this.state.displayName.trim()!==''){
            this.props.renameAction(this.state.displayName.trim())
        }else{
            alert('wrong')
        }
        this.props.flatEdit(false)
    }

    onCancel(){
        this.props.flatEdit(false)
    }

    render(){
        return(
            <div className="edit-form" id="edit">
                <input type="text" name="user[name]" className="ip-edit" value={this.state.displayName} placeholder="Name" onChange={this.handleChangeName.bind(this)} />          
                <br/><br/><div className="div-owner"> Số dư: {this.props.profile.balance}</div><br />
                <div className="div-owner"> Năng lượng: {this.props.profile.bandwidth}</div><br />
                <div className="div-owner">
                    Biến đếm: {this.props.profile.sequence}
                </div>
                <div style={{textAlign :"center", marginTop:"1em"}}>
                    <button className="bt-cancel" onClick={this.onCancel.bind(this)}>
                        <span className="">Cancel</span>
                    </button>
                    <button className="bt-save" onClick={this.onSave.bind(this)}>
                        <span className="button-text">Save Change</span>
                    </button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        flatEdit:(bool) => dispatch(flatEdit(bool)),
        renameAction: (name) => dispatch(renameAction(name))
    }
}
export default connect(null, mapDispatchToProps)(EditProfile);

