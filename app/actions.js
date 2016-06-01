export const AUTH_REQUEST = 'AUTH_REQUEST';
export function authRequest() {
  return {
    type: AUTH_REQUEST
  }
};

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess() {
  return {
    type: AUTH_SUCCESS
  }
};

export const AUTH_FAILURE = 'AUTH_FAILURE';
export function authFailure(error) {
  return {
    type: AUTH_FAILURE,
    error
  }
};

export const CALENDAR_UPDATED = 'CALENDAR_UPDATED';
export function calendarUpdated(calendarId, calendarName, nextEvents) {
  return {
    type: CALENDAR_UPDATED,
    calendarId,
    calendarName,
    nextEvents
  }
};

export const BOOK_ROOM = 'BOOK_ROOM';
export function bookRoom(calendarId, calendarName, summary, start, end) {
  return {
    type: BOOK_ROOM,
    calendarId,
    calendarName,
    summary,
    start,
    end
  }
};

export const ROOM_BOOKED = 'ROOM_BOOKED';
export function roomBooked() {
  return {
    type: ROOM_BOOKED
  }
};
