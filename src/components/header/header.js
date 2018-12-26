import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Modal from 'react-responsive-modal'
import { connect } from 'react-redux'

import { postStatus } from '../../actions/actionHome'
import { loadCurUser } from '../../actions/actionFollow'

import logo from './../../img/twitter.png'
import './style.css';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      src: '#',
      status: '',
      open2: false,
      shared:'',
      search: '',
    }
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  onCloseModal2 = () => {
    this.setState({ open2: false });
  }

  handleClick(e){
    e.preventDefault()
    localStorage.clear()
    this.props.history.push('/login')
  }

  handleChangeStatus(e){
    this.setState({
      status: e.target.value
    })
  }

  handleChange(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            this.setState({
              src: e.target.result
            })
          };

          reader.readAsDataURL(input.files[0]);
      }
  }

  handleSubmit(e){
    const { status, shared } = this.state
    e.preventDefault()
    this.props.postStatus(status, shared)
    this.setState({
      open: false,
      open2: true,
      status: ''
    })
  }

  handleSelect(e){
    this.setState({
      shared: e.target.value
    })
  }

  handleSearch(e){
    this.setState({
      search: e.target.value
    })
  }

  render(){
    var vals = ''
    if(this.props.curUser.Avatar)
        {
            let bufferOriginal = Buffer.from(this.props.curUser.Avatar)
            vals = bufferOriginal.toString('base64')
        }
        
    return (
      <div className="header" >
        <Link to={`/following/${localStorage.getItem('public')}`}><img className="logoApp" src={logo} alt="" /></Link> 
        <Link to="/notification" className="link"> Notifications </Link>
        <input className="search" placeholder="Search" onChange={this.handleSearch.bind(this)}/>
        
        <div class="dropdown">
          <button data-toggle="dropdown"><img className="logo" src={'data:image/jpeg;base64,' + vals} alt="" /></button>
          <ul class="dropdown-menu">
            <li><Link to={`/following/${this.props.owner.publicKey}`}>{this.props.owner.name}</Link></li>
            <li><a className="link" onClick={this.handleClick.bind(this)}> Sign out </a></li>
          </ul>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-info" style={{borderRadius: "25px"}} onClick={this.onOpenModal.bind(this)}> Đăng bài </button>
        <Modal open={this.state.open} onClose={this.onCloseModal.bind(this)} center className="modal">
            <div className="modal-header">
              <h3 className="modal-title" id="Tweetstorm-dialog-header">Compose new Tweet</h3>
            </div>
            <div className="model-body">
              <div className="wrap-content">
                <div class="tweet-box-avatar">
                    <img className="logo" src="https://pbs.twimg.com/profile_images/1031078645731811328/vmW-CZ7l_normal.jpg" alt="Nana" />
                </div>
                <div className="tweet-wrap">
                  <div className="tweet-content">
                    <textarea rows="4" cols="80" placeholder="What's happening?" value={this.state.status} onChange={this.handleChangeStatus.bind(this)}></textarea>
                    <img src={this.state.src} />
                  </div><br />
                  <div className="tool-bar">
                    <div className="left">
                      <span class="mediaChooser">
                        <div class="photo-selector">
                          <div class="image-selector">
                            <label for="file-input">
                             <i class="fa fa-camera fa-lg"/>
                            </label>
                            <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
                            id="file-input" onChange={this.handleChange.bind(this)}/>
                          </div>
                        </div>
                      </span>
                    </div>

                    <div className="right">
                      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.handleSelect.bind(this)}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="more">More...</option>
                      </select>
                      <button class="tweet-action EdgeButton EdgeButton--primary js-tweet-btn" type="button" onClick={this.handleSubmit.bind(this)} disabled={!this.state.status.trim()}>
                        <span class="button-text tweeting-text">
                          POST
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
        </Modal>
        <Modal open={this.state.open2} onClose={this.onCloseModal2.bind(this)} top>
          <div className="notify">
            Bài viết đã được đăng!
          </div>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postStatus:(status, shared) => dispatch(postStatus(status, shared)),
        loadCurUser: () => dispatch(loadCurUser())
    }
}

const mapStateToProps = (state) => {
  return {
    curUser: state.curUser.curUser,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
//export default withRouter (Header)