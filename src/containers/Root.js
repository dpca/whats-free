// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import type { Store } from '../types';

type Props = {
  store: Store,
};

function Root({ store }: Props) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
