import { all } from 'redux-saga/effects';
import authFlowSaga from './authFlowSaga';
import calendarEventSaga from './calendarEventSaga';
import bookRoomSaga from './bookRoomSaga';

export default function* rootSaga() {
  yield all([
    authFlowSaga(),
    calendarEventSaga(),
    bookRoomSaga(),
  ]);
}
