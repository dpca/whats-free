import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import DevTools from './DevTools';

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <div>
        <App history={history} />
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
