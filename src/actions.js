// @flow

import type { CalendarEvent } from './types';

type AuthRequest = {| type: 'AUTH_REQUEST' |};
export const AUTH_REQUEST = 'AUTH_REQUEST';
export function authRequest(): AuthRequest {
  return { type: AUTH_REQUEST };
}

type AuthSuccess = {| type: 'AUTH_SUCCESS' |};
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess(): AuthSuccess {
  return { type: AUTH_SUCCESS };
}

type AuthFailure = {| type: 'AUTH_FAILURE', error: string |};
export const AUTH_FAILURE = 'AUTH_FAILURE';
export function authFailure(error: string): AuthFailure {
  return { type: AUTH_FAILURE, error };
}

type CalendarUpdated = {|
  type: 'CALENDAR_UPDATED',
  calendarId: string,
  calendarName: string,
  nextEvents: CalendarEvent[],
|};
export const CALENDAR_UPDATED = 'CALENDAR_UPDATED';
export function calendarUpdated(
  calendarId: string,
  calendarName: string,
  nextEvents: CalendarEvent[],
): CalendarUpdated {
  return {
    type: CALENDAR_UPDATED,
    calendarId,
    calendarName,
    nextEvents,
  };
}

type BookRoom = {|
  type: 'BOOK_ROOM',
  calendarId: string,
  calendarName: string,
  summary: string,
  start: string,
  end: string,
|};
export const BOOK_ROOM = 'BOOK_ROOM';
export function bookRoom(
  calendarId: string,
  calendarName: string,
  summary: string,
  start: string,
  end: string,
): BookRoom {
  return {
    type: BOOK_ROOM,
    calendarId,
    calendarName,
    summary,
    start,
    end,
  };
}

type RoomBooked = {|
  type: 'ROOM_BOOKED',
  calendarId: string,
|};
export const ROOM_BOOKED = 'ROOM_BOOKED';
export function roomBooked(calendarId: string): RoomBooked {
  return {
    type: ROOM_BOOKED,
    calendarId,
  };
}

type FilterChanged = {|
  type: 'CHANGE_FILTER',
  group: string,
|};
export const CHANGE_FILTER = 'CHANGE_FILTER';
export function changeFilter(group: string): FilterChanged {
  return {
    type: CHANGE_FILTER,
    group,
  };
}

type ToggleSidebar = {|
  type: 'TOGGLE_SIDEBAR',
|};
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export function toggleSidebar(): ToggleSidebar {
  return { type: TOGGLE_SIDEBAR };
}

export type Action =
  AuthRequest |
  AuthSuccess |
  AuthFailure |
  CalendarUpdated |
  BookRoom |
  RoomBooked |
  FilterChanged |
  ToggleSidebar;
