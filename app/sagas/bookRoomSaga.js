import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { BOOK_ROOM, roomBooked } from '../actions';

function callGoogle(resource) {
  return gapi.client.calendar.events.insert({
    calendarId: 'primary',
    resource
  });
}

function* bookRoom(action) {
  try {
    const response = yield call(callGoogle, {
      summary: action.summary,
      location: action.calendarName,
      start: {
        dateTime: (new Date(action.start)).toISOString(),
        timeZone: 'America/New_York'
      },
      end: {
        dateTime: (new Date(action.end)).toISOString(),
        timeZone: 'America/New_York'
      },
      attendees: [
        { email: action.calendarId }
      ]
    });
    yield delay(1000);
    yield put(roomBooked());
  } catch (e) {

  }
};

export default function* bookRoomSaga() {
  yield* takeEvery(BOOK_ROOM, bookRoom);
};
