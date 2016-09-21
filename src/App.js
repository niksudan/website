import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Image , Button} from 'react-bootstrap';

import StuffIndex from './views/stuff/index';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="container">
					<Col xs={12} md={2}>
						<div className="sidebar">
							<Link to="/">
								<Image responsive circle thumbnail src="http://www.gravatar.com/avatar/88b83f86433e9aff6e3a1d25735384a6?s=500"/>
								<h2>Nik Sudan</h2>
							</Link>
							<LinkContainer to="/about"><Button block>About</Button></LinkContainer>
						</div>
					</Col>
					<Col xs={12} md={10}>
						<div className="content">
							{this.props.children || <StuffIndex/>}
						</div>
					</Col>
				</div>
			</div>
		);
	}
}