import authFlowSaga from './authFlowSaga';
import calendarEventSaga from './calendarEventSaga';
import bookRoomSaga from './bookRoomSaga';

export default function* rootSaga() {
  yield [
    authFlowSaga(),
    calendarEventSaga(),
    bookRoomSaga()
  ]
}
