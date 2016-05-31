import { combineReducers } from 'redux';
import authenticate from './authenticate';
import updateCalendar from './updateCalendar';

const rootReducer = combineReducers({
  auth: authenticate,
  calendarEvents: updateCalendar
});

export default rootReducer;
