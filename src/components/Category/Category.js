import React, { Component } from 'react';
import './Category.css';
// import CategoryDetails from '../../components/CategoryDetails/CategoryDetails';
// import history from '../history';

class Category extends Component {
	constructor(props) {
    	super(props);
	    this.eventClick = this.eventClick.bind(this);
	  }

  eventClick(event) {
    // var txtId = event.currentTarget.id;
    // <CategoryDetails></CategoryDetails>
  }

	render() {
		return (
			<div className="container-fluid category">
				<div className="row col-sm-12">
					<div className="col-sm-3">
						<div id="arts" className="arts flex bg" >
							<h3 className="imgtxt cWhite">Arts</h3>
						</div>
					</div>
					<div className="col-sm-3">
						<div id="sports" className="sports flex bg" onClick={this.eventClick}>
							<h3 className="imgtxt cRoyal">Sports</h3>
						</div>
					</div>
					<div className="col-sm-3">
						<div id="education" className="education flex bg" onClick={this.eventClick}>
							<h3 className="imgtxt cBlack">Education</h3>
						</div>
					</div>
					<div className="col-sm-3">
						<div id="travel" className="travel flex bg" onClick={this.eventClick}>
							<h3 className="imgtxt">Travel</h3>
						</div>					
					</div>
				</div>
			</div>
		);
	}
}

export default Category;