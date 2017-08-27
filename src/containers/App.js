// @flow

import React from 'react';
import { connect } from 'react-redux';
import { authRequest, bookRoom, changeFilter, toggleSidebar } from '../actions';
import Authenticate from '../components/Authenticate';
import Body from '../components/Body';
import type { State, Dispatch } from '../types';

function App({
  calendarEvents,
  auth,
  onBookRoom,
  onAuthorizeClick,
  selectedGroup,
  onSelectGroup,
  showSidebar,
  onToggleSidebar,
}) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="navbar-brand">{"What's free?"}</div>
        <button className="navbar-toggler d-md-none" type="button" onClick={onToggleSidebar}>
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      {
        auth.success ?
          <Body
            calendarEvents={calendarEvents}
            onBookRoom={onBookRoom}
            selectedGroup={selectedGroup}
            onSelectGroup={onSelectGroup}
            showSidebar={showSidebar}
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
  showSidebar: state.showSidebar,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAuthorizeClick: () => dispatch(authRequest()),
  onBookRoom: (calendarId, calendarName, summary, start, end) =>
    dispatch(bookRoom(calendarId, calendarName, summary, start, end)),
  onSelectGroup: (group) => dispatch(changeFilter(group)),
  onToggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
