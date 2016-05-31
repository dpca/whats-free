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
export function calendarUpdated(calendarName, nextEvents) {
  return {
    type: CALENDAR_UPDATED,
    calendarName,
    nextEvents
  }
};
