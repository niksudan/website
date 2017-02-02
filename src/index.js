import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import App from './components/App';

import './index.css';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Redirect from="/*" to="/" />
    </Route>
  </Router>,
  document.getElementById('root')
);
