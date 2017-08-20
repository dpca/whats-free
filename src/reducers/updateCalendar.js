import _ from 'lodash';
import { CALENDAR_UPDATED } from '../actions';
import calendars from '../calendars.json';

const initialState = _.reduce(calendars, (obj, calendar) =>
  _.assign(
    {},
    obj,
    {
      [calendar.id]: {
        id: calendar.id,
        name: calendar.name,
        events: [],
        loading: true,
      },
    },
  ),
  {},
);

export default function updateCalendar(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_UPDATED:
      return {
        ...state,
        [action.calendarId]: {
          ...state.calendarId,
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
