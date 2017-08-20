// @flow

import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import type { Store } from '../types';

type Props = {
  store: Store,
};

function Root({ store }: Props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
