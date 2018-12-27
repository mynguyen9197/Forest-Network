import React, {Component} from 'react';
import './style.css';
import axios from 'axios';

class Recommand extends Component{
	constructor(props){
		super(props)
		this.state = {
			pic: [],
		}
	}
	async componentWillMount() {
        var res = await axios.get(`http://localhost:5000/api/v2/getUsers`)
        await this.setState({
            data: res.data.user.slice(0, 9)
        })
        for( var i = 0; i < 10; i++)
        {
        	if(this.state.data[i] != undefined && this.state.data[i].Avatar != undefined)
        	{
	        	let bufferOriginal = Buffer.from(this.state.data[i].Avatar);
	            var vals = bufferOriginal.toString('base64')
	            this.setState({
	            	pic: this.state.pic.concat(vals)
	            })
        	}
        }
    }
  	render(){
  		if(this.state.data != undefined && this.state.pic != undefined)
  		{
	  		console.log(this.state.data)
			return(
				<div className="recommand">
					<div>
						<span>Who to follow</span>
						<i className="fab fa-angellist blue"></i>
					</div>
					{
						this.state.data.map((item,i)=>
							<div className="info-recommand">
								<img className="logo" src={'data:image/jpeg;base64,' + this.state.pic[i]} /> 
								<div>
									<div>
										<span> {item.name} </span>
										<i className="fab fa-galactic-republic"></i>
									</div>
									<button className="bt-follow">Follow</button>
								</div>
							</div>
						)
					}
				</div>
			);
		} else {
			return( <div></div>);
		}
	}
}


				
export default Recommand;


