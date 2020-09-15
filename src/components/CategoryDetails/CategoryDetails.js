import React, { Component } from 'react';
import './CategoryDetails.css';
import data from "../../data/data"; 

class CategoryDetails extends Component {
	constructor(props) {
		super(props);
	console.log("data", this.props)
	}
	render() {
		return (
			<div>
                {
					data.category1.map((category, i) => {
						return (
							<div key={i}>
								{this.props.data}
								<div className="container">
									<div className="row">
										<div className="col-sm-6">
											<h1>{category.title}</h1>
										</div>
										<div className="col-sm-6">
											<a href={category.url}>
												<img src={category.url} width="200px" height="200px" alt={category.title} />
											</a>
										</div>
									</div>
									
									
									<div className="row">
										<div className="col-sm-12">
											<p>{category.description}</p>
										</div>
											
									</div>
								</div>
							</div>
						);
					})
				}
            </div>

		);
	}
}

export default CategoryDetails;