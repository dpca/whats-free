import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { authRequest, bookRoom } from '../actions';
import Authenticate from '../components/Authenticate';
import CalendarList from '../components/CalendarList';

import calendars from '../../calendars.json';

class App extends Component {
  render() {
    const { calendarEvents, auth, onBookRoom, onAuthorizeClick } = this.props;
    if (this.props.auth.success) {
      return (
        <CalendarList calendarEvents={calendarEvents} onBookRoom={onBookRoom}/>
      );
    } else {
      return (
        <Authenticate onClick={onAuthorizeClick} error={auth.error} />
      );
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
