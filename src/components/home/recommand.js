import React, { Component } from 'react'

import './style.css';


class Recommand extends Component {

    handleClick(){
        console.log('followed')
    }

    render(){
        return (
            <div className="recommand">
                <div>
                    <span> Who to follow </span>
                    <i className="fab fa-angellist blue"></i>
                </div>
                {
                    this.props.recommands.map((item, i) =>
                        <div className="info-recommand">
                            <img className="logo" src={item.urlAvatar} alt="" />
                            <div>
                                <div>
                                    <span> {item.name} </span>
                                    <i className="fab fa-galactic-republic"></i>
                                </div>
                                <button className="bt-follow" onClick={this.handleClick.bind()}>Follow</button>
                            </div>
                        </div>)
                }
            </div>
      );
    }
}


export default Recommand;