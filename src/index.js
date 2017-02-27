import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';
import { openInfobox } from './actions/infobox';
import { selectProject, unselectProject } from './actions/projects';
import App from './components/App';
import './index.css';

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  )
);

const update = () => {
  const projects = store.getState().projects;
  const dispatch = store.dispatch;
  const path = window.location.pathname;

  // Attempt to find and appropriate modal via pathname
  console.log('ping');
  if (!projects.isOpen && path !== '/') {
    let found = false;
    if (path === '/about') {
      dispatch(openInfobox());
      found = true;
    } else {
      projects.items.forEach((project, index) => {
        if (`/${project.slug}` === path && !found) {
          dispatch(selectProject(index));
          found = true;
        }
      });
    }
  } else if (path === '/' && projects.isOpen) {
    dispatch(unselectProject());
  }
};

render(
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={update}>
      <Route path="/" component={App} />
      <Route path="/:slug" component={App} />
      <Redirect from="/*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);
