import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/root';
import rootSaga from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
