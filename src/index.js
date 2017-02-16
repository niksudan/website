import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  )
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/:slug" component={App} />
      <Redirect from="/*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);
