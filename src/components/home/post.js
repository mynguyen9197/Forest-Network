import React, { Component } from 'react'
import Comment from './comment.js'
import { Link } from 'react-router-dom'

import './style.css';

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            isReact:false,
            isComment:false,
            publicKey: this.props.account
        }
    }

    onClickReact(){
        this.setState({
            isReact:true
        })
    }

    onClickDisReact(){
        this.setState({
            isReact:false
        })
    }

    onClickComment(){
        this.setState({
            isComment:true
        })
    }

    render(){
        return (
        <div className="post" id="opacity">
            <div className="owner">
                <img src={this.props.owner.urlAvatar} alt="" />
                <div className="info-post">
                    <Link to={`/accounts/${this.state.publicKey}`} className="name"> {this.props.owner.name} </Link>
                    <div className="time-post">Shared <span>&nbsp;{this.props.infoPost.statusPost}</span>&nbsp;-&nbsp;<span> about {this.props.infoPost.timePost} minutes ago </span> </div>
                </div>
            </div>
            <div className="content-post" cols="50">{this.props.infoPost.text}</div>
            <img className="img-post" src={this.props.infoPost.urlPhoto} alt="" />
            <div className="attention">
                {
                    !this.state.isReact?
                        <div className="react" onClick={this.onClickReact.bind(this)}>
                            <i className="far fa-heart fa-heart-check" aria-hidden="true"></i>
                            {this.props.infoPost.react}
                        </div>
                    :
                        <div className="react" style={{color:`red`}} onClick={this.onClickDisReact.bind(this)}>
                            <i className="fa fa-heart fa-heart-check" aria-hidden="true"></i>
                            {this.props.infoPost.react}
                        </div>
                }
                <div className="cmt" onClick={this.onClickComment.bind(this)}><span className="cmtSpan">{this.props.infoPost.comment}</span> Comments</div>
                <div className="share"><span className="shareSpan">{this.props.infoPost.share}</span> Shares</div>
            </div>
            {
                    this.state.isComment?
                       <Comment/>
                    :
                    <div/>
            }
            
        </div>
    );

    }
}

export default Post;