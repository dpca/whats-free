// @flow

import _ from 'lodash';
import { CALENDAR_UPDATED } from '../actions';
import type { Action } from '../actions';
import calendars from '../calendars.json';
import type { CalendarEvent } from '../types';

export type State = {
  [id: string]: {
    id: string,
    name: string,
    group: string,
    events: CalendarEvent[],
    loading: boolean,
  },
};

const initialState = _.reduce(
  calendars,
  (obj, calendar) => ({
    ...obj,
    [calendar.id]: {
      id: calendar.id,
      name: calendar.name,
      group: calendar.group,
      events: [],
      loading: true,
    },
  }),
  {},
);

export default function updateCalendar(state: State = initialState, action: Action) {
  switch (action.type) {
    case CALENDAR_UPDATED:
      return {
        ...state,
        [action.calendarId]: {
          ...state[action.calendarId],
          id: action.calendarId,
          name: action.calendarName,
          events: action.nextEvents,
          loading: false,
        },
      };
    default:
      return state;
  }
}
