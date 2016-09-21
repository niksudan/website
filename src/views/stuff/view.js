import React, { Component } from 'react';
import { Col, Button, Image, Jumbotron, Table } from 'react-bootstrap';

export default class StuffView extends Component {
	render() {
		return (
			<div className="thumb stuff-view">
				<Jumbotron>
					<div className="thumb-content">
						<Image responsive src="http://placehold.it/1280x720"/>
						<div className="thumb-inner-content">
							<h1>Project Name</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nam quam, atque modi sunt consequuntur.</p>
						</div>
					</div>
				</Jumbotron>

				<Col xs={12} md={8}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, illum, dolores. Minima, ipsam! Pariatur, optio, minus. Culpa debitis, laboriosam hic saepe praesentium, neque dolores error ea dolorem repudiandae quisquam distinctio?</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, illum, dolores. Minima, ipsam! Pariatur, optio, minus. Culpa debitis, laboriosam hic saepe praesentium, neque dolores error ea dolorem repudiandae quisquam distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat, labore laborum corporis vero voluptas temporibus omnis maiores velit eos non voluptatum id porro illo architecto magnam sit fugit, natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempora deleniti eius magnam nulla ex delectus dolor totam culpa esse facere, libero maxime quis quaerat, in rem quas. Distinctio, doloremque.</p>
				</Col>

				<Col xs={12} md={4}>
					<Table striped>
						<tr>
							<th>Role</th>
							<td>Developer</td>
						</tr>
						<tr>
							<th>Released</th>
							<td>May 2016</td>
						</tr>
					</Table>
					<Button block>Link</Button>
					<Button block>Link</Button>
					<Button block>Link</Button>
				</Col>

			</div>
		)
	}
}