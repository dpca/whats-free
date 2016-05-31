import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { AUTH_SUCCESS, calendarUpdated } from '../actions';
import calendars from '../../calendars.json';

function fetchNextEvent(calendar) {
  return gapi.client.calendar.events.list({
    calendarId: calendar,
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 2,
    orderBy: 'startTime'
  });
};

function* fetchCalendars() {
  while(true) {
    const responses = yield _.map(calendars, (calendar) => {
      return call(fetchNextEvent, calendar);
    });
    yield _.map(responses, (response) => {
      return put(calendarUpdated(response.result.summary, response.result.items));
    });
    yield delay(10000);
  }
};

export default function* calendarEventSaga() {
  yield* takeLatest(AUTH_SUCCESS, fetchCalendars);
}
