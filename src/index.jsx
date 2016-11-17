import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Immutable from 'immutable';
import configureStore from './store/configureStore';
import Root from './containers/Root';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

const initalState = Immutable.fromJS({});
const store = configureStore(initalState);
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => state.get('routing').toObject()
});

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root') // eslint-disable-line
);