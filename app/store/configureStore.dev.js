import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/root';
import rootSaga from '../sagas/root';
import DevTools from '../containers/DevTools';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
