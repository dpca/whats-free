// @flow

import { combineReducers } from 'redux';
import authenticate from './authenticate';
import updateCalendar from './updateCalendar';
import changeFilter from './changeFilter';
import toggleSidebar from './toggleSidebar';

const rootReducer = combineReducers({
  auth: authenticate,
  calendarEvents: updateCalendar,
  selectedGroup: changeFilter,
  showSidebar: toggleSidebar,
});

export default rootReducer;
