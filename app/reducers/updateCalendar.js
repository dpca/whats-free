import _ from 'lodash';
import { CALENDAR_UPDATED } from '../actions';
import calendars from '../../calendars.json';

const initialState = _.reduce(calendars, (obj, calendar) => {
  return _.assign({}, obj, { [calendar]: { name: 'Loading...', events: [] } });
}, {});

console.log(initialState);

export default function updateCalendar(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_UPDATED:
      return {
        ...state,
        [action.calendarId]: {
          name: action.calendarName,
          events: action.nextEvents,
        }
      }
    default:
      return state;
  }
}
