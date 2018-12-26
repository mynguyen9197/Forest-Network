import React, { Component } from 'react';
import Comment from './comment.js';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { postReact, postComment } from './../../actions/actionNewfeed.js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css';


class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            isReact:false,
            isComment:false
        }
        
    }

    async onClickReact(){
        this.setState({
            isReact:true
        })
        this.props.postReact(this.props.infoPost.hash, 1)
        await axios.get(`http://localhost:5000/api/v2/read`)
    }

    onClickDisReact(){
        this.setState({
            isReact:false
        })
    }

    handleKeyPress = async (e)=> {
        if (e.key === 'Enter') {
            this.props.postComment(this.props.infoPost.hash, document.getElementById("myTag").value)
            e.preventDefault();
            document.getElementById("myTag").value = ''
            await axios.get(`http://localhost:5000/api/v2/read`)

        }
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
                    <div className="cmt"><span className="cmtSpan">{this.props.infoPost.comment.length}</span> Comments</div>
                    <div className="share">Shares</div>
                </div>
                <div className="comment">
                    <div className="avatarComment">
                        <img className="imgAvatarCmt" src={'data:image/jpeg;base64,' + vals}/>
                    </div>
                    <div className="boxComment">
                        <form className="formCmt">  
                            <div className="contentCmt">
                                <div className="1p1t">
                                    <input className="_1p1v" 
                                        id="myTag" style={{whiteSpace:`pre-wrap`}} 
                                        placeholder="Write a comment..."
                                        onKeyPress={this.handleKeyPress} 
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.props.infoPost.comment.map((item, i) => <Comment infoComment={item} infoOnwer={this.props.infoOnwer} />)}
            </div>
        );
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        postReact:(transaction, number) => dispatch(postReact(transaction, number)),
        postComment:(transaction, content) => dispatch(postComment(transaction, content))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Post))
