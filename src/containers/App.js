// @flow

import React from 'react';
import { connect } from 'react-redux';
import { authRequest, bookRoom, changeFilter } from '../actions';
import Authenticate from '../components/Authenticate';
import Body from '../components/Body';
import type { State, Dispatch } from '../types';

function App({ calendarEvents, auth, onBookRoom, onAuthorizeClick, selectedGroup, onSelectGroup }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="navbar-brand">{"What's free?"}</div>
      </nav>
      {
        auth.success ?
          <Body
            calendarEvents={calendarEvents}
            onBookRoom={onBookRoom}
            selectedGroup={selectedGroup}
            onSelectGroup={onSelectGroup}
          /> :
          <Authenticate onClick={onAuthorizeClick} error={auth.error} />
      }
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  auth: state.auth,
  calendarEvents: state.calendarEvents,
  selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAuthorizeClick: () => dispatch(authRequest()),
  onBookRoom: (calendarId, calendarName, summary, start, end) =>
    dispatch(bookRoom(calendarId, calendarName, summary, start, end)),
  onSelectGroup: (group) => dispatch(changeFilter(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
