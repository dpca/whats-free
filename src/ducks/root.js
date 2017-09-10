// @flow

import { combineReducers } from 'redux';
import authenticate from './authenticate';
import calendarReducer from './calendar';
import filterReducer from './filter';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  auth: authenticate,
  calendarEvents: calendarReducer,
  selectedGroup: filterReducer,
  showSidebar: sidebarReducer,
});

export default rootReducer;
