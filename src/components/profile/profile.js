import React, { Component } from 'react';
import './style.css';
import '../../App.css'
import cover from './../../img/cover.jpg'
import avt from './../../img/images.jpg'
import InfoOwner from './infoOwner'
import { updateProfile } from '../../containers/ProfileContainer/action'

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class ShowProfile extends Component {
	render(){
		return (
	      <div className="Grid Grid--withGutter">
	        <div className="Grid-cell">
				<div className="ProfileHeaderCard">
					<h1 className="ProfileHeaderCard-name">
				    	<a href={this.props.profile.displayName} className="ProfileHeaderCard-nameLink u-textInheritColor js-nav">{this.props.profile.displayName}</a>
				  	</h1>

					<h2 className="ProfileHeaderCard-screenname u-inlineBlock u-dir" dir="ltr">
					    <a className="ProfileHeaderCard-screennameLink u-linkComplex js-nav" href="/Na_Yuvely">
					      <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">{this.props.profile.username}</b></span>
					    </a>
					</h2>
				  	<p className="ProfileHeaderCard-bio u-dir" dir="ltr">{this.props.profile.bio}</p>

			      	<div className="ProfileHeaderCard-location">
			        	<span className="Icon Icon--geo Icon--medium" aria-hidden="true" role="presentation"></span>
		        		<span className="ProfileHeaderCard-locationText u-dir" dir="ltr">{this.props.profile.location}
			        	</span>
			      	</div>

				    <div className="ProfileHeaderCard-url">
				        <span className="Icon Icon--url Icon--medium" aria-hidden="true" role="presentation"></span>
				        <span className="ProfileHeaderCard-urlText u-dir">{this.props.profile.website}</span>
					</div>

			        <div className="ProfileHeaderCard-periscopeProfile u-hidden">
			          <span className="Icon Icon--periscopeBadge Icon--medium js-tooltip" aria-hidden="true" role="presentation" title="View broadcasts"></span>
			          <span className="ProfileHeaderCard-periscopeProfileText u-dir" dir="ltr">
			            <a className="ProfileHeaderCard-periscopeProfileTextLink u-textUserColor" target="_blank" href="https://www.pscp.tv/u/1WLEReJbvwVjb">View broadcasts</a>
			            <a className="ProfileHeaderCard-periscopeProfileTextLive u-textUserColor" target="_blank" href="https://www.pscp.tv/u/1WLEReJbvwVjb">Watch LIVE</a>
			          </span>
			        </div>

				    <div className="ProfileHeaderCard-joinDate">
				        <i className="far fa-calendar-alt"></i>
				        <span className="ProfileHeaderCard-joinDateText js-tooltip u-dir"> {this.props.profile.datejoin} </span>
				    </div>

				    <div className="ProfileHeaderCard-birthdate ">
				        <i className="fas fa-birthday-cake"></i>
				        <span className="ProfileHeaderCard-birthdateText u-dir" dir="ltr"><span className="js-tooltip" data-original-title="Month and day: You follow each other
				Year: Only you"> {this.props.profile.dob} </span>
						</span>
				    </div>
				</div>
			</div>
		</div>
	    );
	}
}

class EditProfile extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: this.props.profile.username, 
			displayName: this.props.profile.displayName, 
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
		this.props.onsave(this.state)
	}

	onCancel(){
		this.props.oncancel()
	}

	render(){
		return(
			<div className="Grid Grid--withGutter">
	        	<div className="Grid-cell">
					<div className="ProfileHeaderCardEditing u-bgUserColorLightest ProfileHeaderCardEditing--withEmoji ProfileHeaderCardEditing--withExtraFields">
					  <input type="text" name="user[name]" className="ProfileHeaderCardEditing-editableField u-borderUserColorLight" value={this.state.displayName} placeholder="Name" onChange={this.handleChangeName.bind(this)} />
					  <div className="ProfileHeaderCardEditing-name ProfileHeaderCardEditing-item">
					    
					  </div>
					  <div className="ProfileHeaderCardEditing-screenname u-textUserColor">
					  	<span className="username u-dir u-textTruncate" dir="ltr">@<b>{this.state.username}</b></span>
					  </div>
					  <textarea name="Text1" cols="30" rows="5" placeholder = "Bio" value={this.state.bio} onChange={this.handleChangeBio.bind(this)}></textarea>
					  <input type="text" className="ProfileHeaderCardEditing-editableField u-borderUserColorLight" value={this.state.location} placeholder="Location" onChange={this.handleChangeLocation.bind(this)} />

					<div className="ProfileHeaderCardEditing-url ProfileHeaderCardEditing-item">
					    <input type="text" className="ProfileHeaderCardEditing-editableField u-borderUserColorLight" value={this.state.website} placeholder="Website" onChange={this.handleChangeWeb.bind(this)} />
					</div>
				    <div className="ProfileHeaderCardEditing-periscopeProfile ProfileHeaderCardEditing-item u-textUserColor">
				      <input type="checkbox" id="user_periscope_profile_visible" name="user[periscope_profile][visible]" className="ProfileHeaderEditing-editableCheckbox" tabindex="2" />
				      <label className="ProfileHeaderCardEditing-periscopeProfileLabel" for="user_periscope_profile_visible">Show when I'm LIVE</label>
				    </div>
				        <DatePicker
						    selected={this.state.dob?new Date(this.state.dob):new Date()}
						    onChange={this.handleChangeDOB.bind(this)}
						    dateFormat="MMMM d, yyyy"
						/>
				</div>
			</div><br />
			<button className="UserActions-editButton edit-button EdgeButton EdgeButton--tertiary" onClick={this.onCancel.bind(this)}>
		    	<span className="button-text">Cancel</span>
		    </button>&nbsp;&nbsp;
			<button className="ProfilePage-saveButton EdgeButton EdgeButton--secondary" onClick={this.onSave.bind(this)}>
		    	<span className="button-text">Save Change</span>
		    </button>
		</div>
	);
}
}
export default class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {
			isEditing: false	
		}
		this.handleSave = this.handleSave.bind(this)
	}
	componentDidMount(){
	    this.props.loadProfile()
	}
	handleSave(ob){
		console.log(ob)
		this.props.updateProfile(ob)
		this.setState({
			isEditing: false
		})
	}
	handleCancel(){
		this.setState({
			isEditing: false
		})
	}
	handleEdit(){
		this.setState({
			isEditing: true
		})
	}
	render(){
		return(
			this.state.isEditing?
				<EditProfile profile = { this.props.profile } onsave={(ob)=>this.handleSave(ob)} oncancel={this.handleCancel.bind(this)} />
				:
			<div>
				<ShowProfile profile = { this.props.profile } />
				<button className="UserActions-editButton edit-button EdgeButton EdgeButton--tertiary" onClick={this.handleEdit.bind(this)}>
			    	<span className="button-text">Edit Profile</span>
			    </button>
			</div>
		)
	}
}