// @flow

import { combineReducers } from 'redux';
import authenticate from './authenticate';
import updateCalendar from './updateCalendar';
import changeFilter from './changeFilter';

const rootReducer = combineReducers({
  auth: authenticate,
  calendarEvents: updateCalendar,
  selectedGroup: changeFilter,
});

export default rootReducer;
