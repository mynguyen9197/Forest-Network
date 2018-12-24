import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { flatEdit } from '../../actions/actionProfile'
import './style.css';

class HeaderWall extends Component {

    editProfile = () => {
        this.props.flatEdit(true)
    }

    render() {
        return (
            <div className="header-wall">
                <div className="cover-img" style={{backgroundImage:`url(${this.props.owner.urlCover})`}}/>
                <div className="info">
                    <img className="avatar" src={this.props.owner.urlAvatar} alt="" />
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
                        <button onClick={this.editProfile} className="bt-follow">Edit profile</button>
                    </div>
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


export default connect(null, mapDispatchToProps)(HeaderWall);