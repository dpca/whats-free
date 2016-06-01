import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);



//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga';

//import rootReducer from './reducers/root';
//import rootSaga from './sagas/root';
//import App from './containers/App';

//const sagaMiddleware = createSagaMiddleware();
//let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//sagaMiddleware.run(rootSaga);

//render(
  //<Provider store={store}>
    //<App />
  //</Provider>,
  //document.getElementById('app')
//);
