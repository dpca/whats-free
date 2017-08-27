import _ from 'lodash';
import { delay } from 'redux-saga';
import { take, race, call, put, takeLatest, all } from 'redux-saga/effects';

import { AUTH_SUCCESS, ROOM_BOOKED, calendarUpdated } from '../actions';
import calendars from '../calendars.json';

const gapi = window.gapi;

function fetchEventsForCal(calendar) {
  return gapi.client.calendar.events.list({
    calendarId: calendar,
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 2,
    orderBy: 'startTime',
  });
}

function* eventsTick(events) {
  // 10 min max between updates
  const MAX_TICK = 600000;
  let nextTick = MAX_TICK;
  if (events.length > 0) {
    const eventStart = new Date(events[0].start.dateTime);
    const eventEnd = new Date(events[0].end.dateTime);
    const now = new Date();
    if (eventStart > now) {
      // event not started yet
      if (eventStart - now < MAX_TICK) {
        // event starts before next max tick, so update then
        nextTick = eventStart - now;
      }
    } else if (eventEnd - now < MAX_TICK) {
      // event ends before next max tick, so update then
      nextTick = eventEnd - now;
    }
  }
  yield delay(nextTick);
}

function* watchCalendar(calendar) {
  while (true) {
    const response = yield call(fetchEventsForCal, calendar.id);
    yield put(calendarUpdated(calendar.id, response.result.summary, response.result.items));
    yield race([
      // fetch again if room was booked
      take((action) => action.type === ROOM_BOOKED && action.calendarId === calendar.id),
      // or at next event tick
      call(eventsTick, response.result.items),
    ]);
  }
}

function* fetchCalendars() {
  yield all(_.map(calendars, (calendar) => call(watchCalendar, calendar)));
}

export default function* calendarEventSaga() {
  yield takeLatest(AUTH_SUCCESS, fetchCalendars);
}
