import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Modal from 'react-responsive-modal'
import { flatEdit } from '../../actions/actionProfile'
import AvatarEditor from 'react-avatar-editor'
import Avatar from 'react-avatar-edit'
import './style.css';

class HeaderWall extends Component {

    constructor(props){
        super(props)
        this.state = {
            isFollowing: true,
            user: this.props.account,
            isEdit: false,
            file: this.props.owner.urlAvatar,
            open: false,
            file: '',imagePreviewUrl: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
      }

      onCloseModal = () => {
        this.setState({ open: false });
      }

    handleFollow(){
        this.setState({
            isFollowing: !this.state.isFollowing
        })
    }

    editProfile = () => {
        this.props.flatEdit(true)
    }

    handleClick(e){
        e.preventDefault()
        this.setState({
            open: true
        })
    }

    uploadHandler(){
        alert(this.state.file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
        return (
            <div className="header-wall">
                <div className="cover-img" style={{backgroundImage:`url(${this.props.owner.urlCover})`}}/>
                <div className="info">
                    
                    <div className="relative">
                        <a href="#" onClick={this.handleClick.bind(this)}><img className="avatar" src={this.props.owner.urlAvatar} alt="" /></a>
                        <div className="hover-change">
                            <a href="#" >
                            <div className="">
                                <i class="fa fa-camera-retro fa-lg"></i>
                            </div>Update</a>
                        </div>
                    </div>
                    <div className="profile-items">
                        <Link to="/" className="profile-item">
                            <div className="item"> Post </div>
                            <div className="value"> {this.props.owner.post} </div>
                        </Link>
                        <Link to="/following" className="profile-item"> 
                            <div className="item"> Following </div>
                            <div className="value"> {this.props.owner.following} </div>
                        </Link> 
                        <Link to="/followers" className="profile-item"> 
                            <div className="item"> Followers </div>
                            <div className="value"> {this.props.owner.followers} </div>
                        </Link>
                        <Link to="/transactions" className="profile-item">
                            <div className="item"> Transactions </div>
                            <div className="value"> {this.props.owner.like} </div>
                        </Link>
                        {this.state.user!==localStorage.getItem('public')?<button onClick={this.handleFollow.bind(this)} className="bt-follow">{this.state.isFollowing?'Unfollow':'Follow'}</button>:
                        <button onClick={this.editProfile} className="bt-follow">Edit Profile</button>}
                    </div>
                </div>
                    <Modal open={this.state.open} onClose={this.onCloseModal.bind(this)} top>
                         <div className="previewComponent">
                            <form onSubmit={(e)=>this._handleSubmit(e)}>
                              <input className="fileInput" 
                                type="file" 
                                onChange={(e)=>this._handleImageChange(e)} />
                              <button className="submitButton" 
                                type="submit" 
                                onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                            </form>
                            <div className="imgPreview">
                              {$imagePreview}
                            </div>
                          </div>
                    </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        flatEdit:(bool) => dispatch(flatEdit(bool))
    }
}


export default connect(null, mapDispatchToProps)(HeaderWall);