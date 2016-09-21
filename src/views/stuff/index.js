import React, { Component } from 'react';

import StuffItem from '../../components/stuff/item';

export default class StuffIndex extends Component {
	render() {
		return (
			<div className="stuff-index">
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
				<StuffItem/>
			</div>
		)
	}
}