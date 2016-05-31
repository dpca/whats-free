import { CALENDAR_UPDATED } from '../actions';

export default function updateCalendar(state = {}, action) {
  switch (action.type) {
    case CALENDAR_UPDATED:
      return { ...state, [action.calendarName]: action.nextEvents }
    default:
      return state;
  }
}
