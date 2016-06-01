import { takeLatest, delay } from 'redux-saga';
import { take, race, call, put } from 'redux-saga/effects';

import { AUTH_SUCCESS, ROOM_BOOKED, calendarUpdated } from '../actions';
import calendars from '../../calendars.json';

function fetchEventsForCal(calendar) {
  return gapi.client.calendar.events.list({
    calendarId: calendar,
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 2,
    orderBy: 'startTime'
  });
};

function* getEvents(calendar) {
  const response = yield call(fetchEventsForCal, calendar);
  return yield put(calendarUpdated(calendar, response.result.summary, response.result.items));
}

function* fetchCalendars() {
  while(true) {
    yield _.map(calendars, (calendar) => {
      return call(getEvents, calendar);
    });
    yield race({
      roomBooked: take(ROOM_BOOKED),
      delay: delay(600000)
    });
  }
};

export default function* calendarEventSaga() {
  yield* takeLatest(AUTH_SUCCESS, fetchCalendars);
}
