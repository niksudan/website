import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col, Image, Panel } from 'react-bootstrap';

export default class StuffItem extends Component {
	render() {
		return (
			<div className="thumb stuff-item">
				<Col xs={12} md={4}>
					<Panel>
						<Link to="/stuff/random-stuff-name">
							<div className="thumb-content">
								<Image responsive src="http://placehold.it/1280x720"/>
								<div className="thumb-inner-content">
									<p>May 2016</p>
									<h3>Project Name</h3>
									<p>Developer</p>
								</div>
							</div>
						</Link>
					</Panel>
				</Col>
			</div>
		);
	}
}