// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<Root store={store} />, root);
} else {
  throw new Error("Couldn't find react root!");
}
