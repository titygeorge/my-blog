import React, { Component } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
// import CategoryDetails from '../../components/CategoryDetails/CategoryDetails';
// import history from '../history';

class Category extends Component {
	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
	  }


  handleClick = value => () => {
  	this.clickedId = value;
  	const newTo = { 
	  pathname: "/category-details", 
	  data: [{name: this.clickedId }]
	};
  	// pathname: "/category-details";
  	// data: [{name: this.clickedId }]
    console.log('this is:', newTo);
  }


	render() {
		return (
			<div className="container-fluid category">
				<div className="row col-sm-12">
					<div className="col-sm-3">
						<Link to={{pathname: "/category-details", data: this.clickedId}}>
							<div id="arts" className="arts flex bg" onClick={this.handleClick('arts')}>
								<h3 className="imgtxt cWhite">Arts</h3>
							</div>
						</Link>
					</div>
					<div className="col-sm-3">
						<Link to={{pathname: "/category-details", data: this.clickedId}}>
							<div id="sports" className="sports flex bg" onClick={this.handleClick('sports')}>
								<h3 className="imgtxt cRoyal">Sports</h3>
							</div>
						</Link>
					</div>
					<div className="col-sm-3">
						<Link to={{pathname: "/category-details", data: this.clickedId}}>
							<div id="education" className="education flex bg" onClick={this.handleClick('education')}>
								<h3 className="imgtxt cBlack">Education</h3>
							</div>
						</Link>
					</div>
					<div className="col-sm-3">
						<Link to={{pathname: "/category-details", data: this.clickedId}}>
							<div id="travel" className="travel flex bg" onClick={this.handleClick('travel')}>
								<h3 className="imgtxt">Travel</h3>
							</div>			
						</Link>		
					</div>
				</div>
			</div>
		);
	}
}

export default Category;