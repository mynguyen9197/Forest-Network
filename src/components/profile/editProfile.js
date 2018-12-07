import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { flatEdit } from '../../actions/actionProfile'
import { connect } from 'react-redux'


import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import './style.css';

class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: this.props.profile.name, 
            displayName: this.props.profile.email, 
            dob: this.props.profile.dob,
            location: this.props.profile.location, 
            website: this.props.profile.website?this.props.profile.website:'', 
            bio: this.props.profile.bio?this.props.profile.bio:'', 
            datejoin: this.props.profile.datejoin?this.props.profile.datejoin:'',
        }
    }

    handleChangeBio(e){
        this.setState({
            bio: e.target.value
        })
    }

    handleChangeName(e){
        this.setState({
            displayName: e.target.value
        })
    }

    handleChangeDOB(date){
        this.setState({
            dob: date
        })
    }

    handleChangeWeb(e){
        this.setState({
            website: e.target.value
        })
    }

    handleChangeLocation(e){
        this.setState({
            location: e.target.value
        })
    }

    onSave(){
        this.props.flatEdit(false)
    }

    onCancel(){
        this.props.flatEdit(false)
    }

    render(){
        return(
            <div className="edit-form" id="edit">
                <input type="text" name="user[name]" className="ip-edit" value={this.state.displayName} placeholder="Name" onChange={this.handleChangeName.bind(this)} />          
                <div className="email-edit">
                    <span >@<b>{this.state.username}</b></span>
                </div>
                <textarea name="Text1" cols="30" rows="5" placeholder = "Bio" value={this.state.bio} onChange={this.handleChangeBio.bind(this)}></textarea>
                <div>
                    <input type="text" className="ip-edit" value={this.state.location} placeholder="Location" onChange={this.handleChangeLocation.bind(this)} />
                </div>
                <div className="">
                    <input type="text" className="ip-edit" value={this.state.website} placeholder="Website" onChange={this.handleChangeWeb.bind(this)} />
                </div>
                <div className="">
                  <input type="checkbox" id="user_periscope_profile_visible" name="user[periscope_profile][visible]" className="" tabindex="2" />
                  <label className="" for="user_periscope_profile_visible">Show when I'm LIVE</label>
                </div>
                <DatePicker className="date-piker"
                    selected={this.state.dob?new Date(this.state.dob):new Date()}
                    onChange={this.handleChangeDOB.bind(this)}
                    dateFormat="MMMM d, yyyy"
                />
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
        flatEdit:(bool) => dispatch(flatEdit(bool))
    }
}
export default connect(null, mapDispatchToProps)(EditProfile);

