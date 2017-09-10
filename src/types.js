// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { State as AuthState } from './ducks/authenticate';
import type { State as CalendarState } from './ducks/updateCalendar';
import type { State as FilterChangedState } from './ducks/changeFilter';
import type { State as SidebarState } from './ducks/toggleSidebar';
import type { BookRoom, RoomBooked } from './actions';

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
  group: string,
  events: CalendarEvent[],
  loading: boolean,
};

// Redux

export type State = {|
  auth: AuthState,
  calendarEvents: CalendarState,
  selectedGroup: FilterChangedState,
  showSidebar: SidebarState,
|};

export type Action =
  {| type: 'AUTH_REQUEST' |} |
  {| type: 'AUTH_SUCCESS' |} |
  {| type: 'AUTH_FAILURE', error: string |} |
  {|
    type: 'CALENDAR_UPDATED',
    calendarId: string,
    calendarName: string,
    nextEvents: CalendarEvent[],
  |} |
  BookRoom |
  RoomBooked |
  {| type: 'CHANGE_FILTER', group: string |} |
  {| type: 'TOGGLE_SIDEBAR' |};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
