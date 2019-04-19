import React, { Component } from 'react';
import thumbnail from './rilak_profile.jpg';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="card mt-3 mx-auto w-75">
								<img className="card-img-top" src={thumbnail} alt="Kuma Ohm" />
								<div className="card-body">
									<h5 className="card-title">Kuma Ohm</h5>
									<h6 className="card-sub-title">I'm no one.</h6>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Profile</h5>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Technical Skills</h5>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Language Skills</h5>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Experience</h5>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Education</h5>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Interests</h5>
									<p className="card-text">xxxxxxxx</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
