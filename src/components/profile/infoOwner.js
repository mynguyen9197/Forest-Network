import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { flatEdit } from '../../actions/actionProfile'
import { connect } from 'react-redux'


import EditProfile from './editProfile'
import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';

class InfoOwner extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.isEdit)
        return (
            !this.props.isEdit && this.props.owner.photo?
                <div className="info-owner">
                    <div className="name-owner">{this.props.owner.name}</div>
                    <div className="email-owner">{this.props.owner.email}</div>
                    <div className="decrip-owner">{this.props.owner.description}</div>
                    <div className="div-owner"> 
                        <i className="far fa-calendar-alt"></i>
                        <span> Joined December 2015 </span>
                    </div>
                    <div className="div-owner">
                        <i className="fas fa-birthday-cake"></i>
                        <span> Born November 1997 </span>
                    </div>
                    <div className="img">
                        <i className="fas fa-camera-retro"></i>
                        <span className="img-owner"> Photos and videos </span>
                        <div>
                            {
                                this.props.owner.photo.map((item, i) => <img src={item} alt="" />)
                            }
                        </div>
                    </div> 
                </div>
            :
                <EditProfile profile = { this.props.owner }  />
        );
    }
}
export default InfoOwner;
