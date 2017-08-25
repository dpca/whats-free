// @flow

import React from 'react';
import { connect } from 'react-redux';
import { authRequest, bookRoom } from '../actions';
import Authenticate from '../components/Authenticate';
import Body from '../components/Body';
import type { State, Dispatch } from '../types';

function App({ calendarEvents, auth, onBookRoom, onAuthorizeClick }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="navbar-brand">{"What's free?"}</div>
      </nav>
      {
        auth.success ?
          <Body calendarEvents={calendarEvents} onBookRoom={onBookRoom} /> :
          <Authenticate onClick={onAuthorizeClick} error={auth.error} />
      }
    </div>
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
