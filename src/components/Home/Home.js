import React, { Component } from 'react';
import './Home.css';
import Category from '../../components/Category/Category';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="container main">
					<div className="row bg_img">
					</div>
				</div>
				<Category />
			</div>
		);
	}
}

export default Home;