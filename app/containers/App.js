import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import { authRequest, bookRoom } from '../actions';
import Authenticate from '../components/Authenticate';
import CalendarList from '../components/CalendarList';

const App = ({ calendarEvents, auth, onBookRoom, onAuthorizeClick }) => {
  if (auth.success) {
    return (
      <CalendarList calendarEvents={calendarEvents} onBookRoom={onBookRoom} />
    );
  }
  return (
    <Authenticate onClick={onAuthorizeClick} error={auth.error} />
  );
};

App.propTypes = {
  calendarEvents: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  onBookRoom: PropTypes.func.isRequired,
  onAuthorizeClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    calendarEvents: state.calendarEvents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorizeClick: () => dispatch(authRequest()),
    onBookRoom: (calendarId, calendarName, summary, start, end) =>
      dispatch(bookRoom(calendarId, calendarName, summary, start, end)),
  };
};

export default ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={connect(mapStateToProps, mapDispatchToProps)(App)} />
    </Router>
  );
};
