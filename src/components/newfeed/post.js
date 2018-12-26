import React, { Component } from 'react';
import Comment from './comment.js';
import axios from 'axios';
import {Link} from 'react-router-dom';


import './style.css';

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            isReact:false,
            isComment:false
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

    render() {
        var vals = ''
        var name = ''
        var key = ''
        for( var i = 0 ; i < this.props.infoOnwer.length; i++)
        {
            if(this.props.infoOnwer[i].publicKey == this.props.infoPost.publicKey && this.props.infoOnwer[i].Avatar)
            {
                let bufferOriginal = Buffer.from(this.props.infoOnwer[i].Avatar);
                vals = bufferOriginal.toString('base64')
                name = this.props.infoOnwer[i].name
                key = this.props.infoOnwer[i].publicKey
            }
        }

        return (   
            <div className="post" id="opacity">   
                <div className="owner">
                    <img src={'data:image/jpeg;base64,' + vals} />    
                    <div className="info-post">
                        <Link to={{
                            pathname: '/following/' + key,
                        }} id="link">
                            <div className="name"> {name} </div>
                        </Link>
                        <div className="time-post">Shared at {this.props.infoPost.date.substring(11,16)} {this.props.infoPost.date.substring(0, 10)}</div>
                    </div>
                </div>
                <div className="content-post" cols="50">{this.props.infoPost.content}</div>
                <div className="attention">
                {
                    !this.state.isReact?
                    <div className="react" onClick={this.onClickReact.bind(this)}>
                        <i className="far fa-heart fa-heart-check" aria-hidden="true"></i>
                        {this.props.infoPost.react.length}
                    </div>
                    :
                    <div className="react" style={{color:`red`}} onClick={this.onClickDisReact.bind(this)}>
                        <i className="fa fa-heart fa-heart-check" aria-hidden="true"></i>
                        {this.props.infoPost.react.length}
                    </div>
                    }
                    <div className="cmt" onClick={this.onClickComment.bind(this)}><span className="cmtSpan">{this.props.infoPost.comment.length}</span> Comments</div>
                    <div className="share">Shares</div>
                </div>  
            </div>
        );
    }

}

export default Post;