import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Modal from 'react-responsive-modal'
import { flatEdit } from '../../actions/actionProfile'
import { followSO, loadCurUser } from '../../actions/actionFollow'
import AvatarEditor from 'react-avatar-editor'
import Avatar from 'react-avatar-edit'
import './style.css';

class HeaderWall extends Component {

    constructor(props){
        super(props)
        this.state = {
            isFollowing: false,
            user: this.props.account,
            isEdit: false,
            file: this.props.owner.urlAvatar,
            open: false,
            file: '',imagePreviewUrl: '',
            listFollow: this.props.owner.following,
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
      }

      onCloseModal = () => {
        this.setState({ open: false });
      }

    handleFollow(){
        let list = this.props.curUser.following
        if(!this.state.isFollowing){
            list.push(this.state.user)
            this.props.followSO(list)
        }
        

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

    componentWillmount(){
        for(let i =0;i<this.props.followers.length;i++){
            if(this.props.followers[i] === localStorage.getItem('public'))
            {
                this.setState({
                    isFollowing: true
                })
            }
        } 
    }

    render() {
        // let isFollowing = this.state.isFollowing
        // for(let i =0;i<this.props.followers.length;i++){
        //     if(this.props.followers[i] === localStorage.getItem('public'))
        //     {
        //         isFollowing = true
        //         break;
        //     }
        // }
        
        return (
            <div className="header-wall">
                <div className="cover-img" style={{backgroundImage:`url("http://www.likecovers.com/covers/original/don-t-count-the-days.jpg?i")`}}/>
                <div className="info">
                    
                    <div className="relative">
                        <a href="#" onClick={this.handleClick.bind(this)}><img className="avatar" src={this.props.owner.Avatar} alt="" /></a>
                        <div className="hover-change">
                            <a href="#" >
                            <div className="">
                                <i class="fa fa-camera-retro fa-lg"></i>
                            </div>Update</a>
                        </div>
                    </div>
                    {this.state.user === localStorage.getItem('public')?
                    <div className="profile-items">
                        <Link to={`/accounts/${this.state.user}`} className="profile-item">
                            <div className="item"> Post </div>
                        </Link>
                        <Link to={`/following/${this.state.user}`} className="profile-item"> 
                            <div className="item"> Following </div>
                        </Link> 
                        <Link to="/transactions" className="profile-item">
                            <div className="item"> Transactions </div>
                            <div className="value"> {this.props.owner.like} </div>
                        </Link>
                        <button onClick={this.editProfile} className="bt-follow">Edit Profile</button>
                    </div>:
                    <div className="profile-items">
                        <Link to={`/following/${this.state.user}`} className="profile-item"> 
                            <div className="item"> Following </div>
                        </Link> 
                        <button onClick={this.handleFollow.bind(this)} className="bt-follow">{this.state.isFollowing?'Unfollow':'Follow'}</button>
                    </div>}
                </div>
                    <Modal open={this.state.open} onClose={this.onCloseModal.bind(this)} top>
                         
                    </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        flatEdit:(bool) => dispatch(flatEdit(bool)),
        followSO: (acc) => dispatch(followSO(acc)),
    }
}

const mapStateToProps = (state) => {
  return {
    curUser: state.curUser.curUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWall);