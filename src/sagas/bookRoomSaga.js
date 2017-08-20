import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { BOOK_ROOM, roomBooked } from '../actions';

const gapi = window.gapi;

function callGoogle(action) {
  return gapi.client.calendar.events.insert({
    calendarId: 'primary',
    resource: {
      summary: action.summary,
      location: action.calendarName,
      start: {
        dateTime: (new Date(action.start)).toISOString(),
        timeZone: 'America/New_York',
      },
      end: {
        dateTime: (new Date(action.end)).toISOString(),
        timeZone: 'America/New_York',
      },
      attendees: [{ email: action.calendarId }],
    },
  });
}

function* bookRoom(action) {
  try {
    yield call(callGoogle, action);
    yield delay(1000);
    yield put(roomBooked(action.calendarId));
  } catch (e) {
    console.log(e);
  }
}

export default function* bookRoomSaga() {
  yield* takeEvery(BOOK_ROOM, bookRoom);
}
