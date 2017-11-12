// @flow

import { combineReducers } from 'redux';
import authenticate from './authenticate';
import calendarReducer from './calendar';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  auth: authenticate,
  calendarEvents: calendarReducer,
  showSidebar: sidebarReducer,
});

export default rootReducer;
