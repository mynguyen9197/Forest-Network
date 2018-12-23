import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';



class Profile extends Component{
    render(){
        return(
            <div className="DashboardProfileCard">
                <Link to="" className="">
                    <div className="coverimg" style={{backgroundImage:`url(http://hinhnendethuong.com/uploads/images/hinh-anh-nu-cuoi-1493993466-1.jpg)`}}/>
                    <img className="avt" src="https://cdn.explus.vn/media.phunutoday.vn/files/upload_images/2016/07/19/nuoi-con-1.jpg" alt=""/>
                </Link>
                <div className="userFields">
                    <Link to="/" className="nameowner">Thu Hương Nguyễn (BoBo)</Link>
                    <Link to="/" className="emailowner">@ThuHngNguyn13</Link>
                </div>
                <div className="ProfileCardStats">
                    <Link to="/newfeed" className="profile-fo">
                        <div className="twe"> Tweets </div>
                        <div className="val"> 0 </div>
                    </Link>
                    <Link to="/following" className="profile-fo">
                        <div className="fwing"> Following </div>
                        <div className="val"> 2 </div>
                    </Link>
                    <Link to="/followers" className="profile-fo">
                        <div className="fwers"> Followers </div>
                        <div className="val"> 1 </div>
                    </Link>
                </div>        
            </div>
        );
    }
}

export default Profile;


