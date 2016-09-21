import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './App';
import './style.css';

import StuffView from './views/stuff/view';
import About from './views/about';

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Redirect from="/stuff" to="/"/>
			<Route path="/stuff/:slug" component={StuffView}/>
			<Route path="/about" component={About}></Route>
		</Route>
	</Router>
), document.getElementById('app'));