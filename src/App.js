import React, { Component } from 'react';
import thumbnail from './rilak_profile.jpg';

import angularLogo from './icon/Angular.png';
import dockerLogo from './icon/Docker.png';
import nodejsLogo from './icon/Nodejs.png';
import phpLogo from './icon/Php.png';
import reactLogo from './icon/React.png';

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
									<h6 className="card-sub-title">Fullstack Traveler</h6>
									<p className="card-text">Email : kuma.ohm@gmail.com</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Profile</h5>
									<p className="card-text">Just another traveler</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Technical Skills</h5>
									<p className="card-text">
										<img src={dockerLogo} alt="Docker" className="w-25 mx-3" />
										<img src={nodejsLogo} alt="NodeJS" className="w-25 mx-3" />
									</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Language Skills</h5>
									<p className="card-text">
										<img src={phpLogo} alt="PHP" className="w-25 mx-3" />
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Experience</h5>
									<p className="card-text">0/100</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Education</h5>
									<p className="card-text">The process of receiving or giving systematic instruction, especially at a school or university.</p>
								</div>
							</div>
							<div className="card mt-3 mx-auto w-75">
								<div className="card-body">
									<h5 className="card-title">Interests</h5>
									<p className="card-text">
										<img src={angularLogo} alt="Angular" className="w-25 mx-3" />
										<img src={reactLogo} alt="React" className="w-25 mx-3" />
									</p>
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
