import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import { authRequest, bookRoom } from '../actions';
import Authenticate from '../components/Authenticate';
import CalendarList from '../components/CalendarList';

const App = ({ calendarEvents, auth, onBookRoom, onAuthorizeClick }) => {
  if (auth.success) {
    return (
      <CalendarList calendarEvents={calendarEvents} onBookRoom={onBookRoom}/>
    );
  } else {
    return (
      <Authenticate onClick={onAuthorizeClick} error={auth.error} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    calendarEvents: state.calendarEvents
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorizeClick: () => {
      dispatch(authRequest())
    },
    onBookRoom: (calendarId, calendarName, summary, start, end) => {
      dispatch(bookRoom(calendarId, calendarName, summary, start, end))
    }
  }
}

export default ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={connect(mapStateToProps, mapDispatchToProps)(App)} />
    </Router>
  );
};
