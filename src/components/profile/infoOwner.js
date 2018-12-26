import React, { Component } from 'react'

import EditProfile from './editProfile'
import './style.css';

class InfoOwner extends Component {
  
    render(){
        return (
            !this.props.isEdit?
                <div className="info-owner">
                    <div className="name-owner">{this.props.owner.name}</div><br />
                    <div className="div-owner"> Số dư: {this.props.balance}</div><br />
                    <div className="div-owner"> Năng lượng: {this.props.owner.bandwidth}</div><br />
                    <div className="div-owner">
                        Biến đếm: {this.props.seq.toString()}
                    </div> 
                </div>
            :
                <EditProfile profile = { this.props.owner }  />
        );
    }
}
export default InfoOwner;