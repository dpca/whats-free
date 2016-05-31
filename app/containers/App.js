import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { authRequest } from '../actions';
import Authenticate from '../components/Authenticate';
import CalendarList from '../components/CalendarList';

import calendars from '../../calendars.json';

class App extends Component {
  render() {
    if (this.props.auth.success) {
      return (
        <CalendarList calendarEvents={this.props.calendarEvents} />
      );
    } else {
      return (
        <Authenticate onClick={this.props.onAuthorizeClick} error={this.props.auth.error} />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
