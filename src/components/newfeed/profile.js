import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import axios from 'axios';


class Profile extends Component{
    async componentWillMount() {
        var res = await axios.get(`http://localhost:5000/api/v2/getInfor?account=${localStorage.getItem('public')}`)
        this.setState({
            Owner: res.data
        })
        res = await axios.get(`http://localhost:5000/api/v2/getPost?account=${localStorage.getItem('public')}`)
        this.setState({
            post: res.data.post.length
        })
    }

    render(){

        if( this.state != null && this.state.post != undefined)
        {
            let bufferOriginal = Buffer.from(this.state.Owner.user.Avatar);
            var vals = bufferOriginal.toString('base64')
            return(
                <div className="DashboardProfileCard">
                    <Link to="" className="">
                        <div className="coverimg" style={{backgroundImage:`url(http://hinhnendethuong.com/uploads/images/hinh-anh-nu-cuoi-1493993466-1.jpg)`}}/>
                        <img className="avt" src={'data:image/jpeg;base64,' + vals} /> 
                    </Link>
                    <div className="userFields">
                        <Link to="/" className="nameowner">{this.state.Owner.user.name}</Link>
                    </div>
                    <div className="ProfileCardStats">
                        <Link to={{
                            pathname: '/accounts/' + localStorage.getItem('public'),
                        }} className="profile-fo">
                            <div className="twe"> Tweets </div>
                            <div className="val"> {this.state.post} </div>
                        </Link>
                        <Link to={{
                            pathname: '/following/' + localStorage.getItem('public'),
                        }} className="profile-fo">
                            <div className="fwing"> Following </div>
                            <div className="val"> {this.state.Owner.user.following.length} </div>
                        </Link>
                        <Link to="/followers" className="profile-fo">
                            <div className="fwers"> Followers </div>
                            <div className="val"> {this.state.Owner.follower.length} </div>
                        </Link>
                    </div>        
                </div>
            );
        }
        else
            return(<div></div>)
    }
}

export default Profile;


