import authFlowSaga from './authFlowSaga';
import calendarEventSaga from './calendarEventSaga';

export default function* rootSaga() {
  yield [
    authFlowSaga(),
    calendarEventSaga()
  ]
}
