// @flow

import React from 'react';
import { connect } from 'react-redux';
import { authRequest, bookRoom } from '../actions';
import Authenticate from '../components/Authenticate';
import CalendarList from '../components/CalendarList';
import type { State, Dispatch } from '../types';

function App({ calendarEvents, auth, onBookRoom, onAuthorizeClick }) {
  if (auth.success) {
    return (
      <CalendarList calendarEvents={calendarEvents} onBookRoom={onBookRoom} />
    );
  }
  return (
    <Authenticate onClick={onAuthorizeClick} error={auth.error} />
  );
}

const mapStateToProps = (state: State) => ({
  auth: state.auth,
  calendarEvents: state.calendarEvents,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAuthorizeClick: () => dispatch(authRequest()),
  onBookRoom: (calendarId, calendarName, summary, start, end) =>
    dispatch(bookRoom(calendarId, calendarName, summary, start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
