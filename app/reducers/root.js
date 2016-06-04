import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authenticate from './authenticate';
import updateCalendar from './updateCalendar';

const rootReducer = combineReducers({
  auth: authenticate,
  calendarEvents: updateCalendar,
  routing: routerReducer,
});

export default rootReducer;
