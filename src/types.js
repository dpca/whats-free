// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Action } from './actions';
import type { State as AuthState } from './reducers/authenticate';
import type { State as CalendarState } from './reducers/updateCalendar';

// Calendar types

type datetime = string;

type Resource = {
  email: string,
  displayName: string,
  self: true,
  resource: true,
  responseStatus: string,
};

type Attendee = {
  email: string,
  displayName?: string,
  responseStatus: string,
};

type Organizer = {
  email: string,
  displayName?: string,
  responseStatus: string,
  organizer: true,
};

export type CalendarEvent = {
  kind: 'calendar#event',
  etag: string,
  id: string,
  status: string,
  htmlLink: string,
  created: datetime,
  updated: datetime,
  summary: string,
  description?: string,
  location: string,
  creator: {
    email: string,
  },
  organizer: {
    email: string,
  },
  start: {
    dateTime: datetime,
  },
  end: {
    dateTime: datetime,
  },
  recurringEventId: string,
  originalStartTime: {
    dateTime: datetime,
  },
  iCalUID: string,
  sequence: number,
  attendees: Array<Resource | Attendee | Organizer>,
  reminders: Array<{ useDefault: boolean }>,
};

export type Calendar = {
  id: string,
  name: string,
  events: CalendarEvent[],
  loading: boolean,
};

// Redux

export type State = {|
  auth: AuthState,
  calendarEvents: CalendarState,
|};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
