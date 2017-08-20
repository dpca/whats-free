import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
