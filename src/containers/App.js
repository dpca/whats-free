// @flow

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { authRequest } from '../ducks/authenticate';
import { changeFilter } from '../ducks/changeFilter';
import { toggleSidebar } from '../ducks/toggleSidebar';
import { bookRoom } from '../actions';
import Authenticate from '../components/Authenticate';
import Body from '../components/Body';
import type { State, Dispatch, Calendar } from '../types';
import type { State as AuthState } from '../ducks/authenticate';

type Props = {
  calendarEvents: Calendar[],
  auth: AuthState,
  onBookRoom: Function,
  onAuthorizeClick: () => any,
  selectedGroup: string,
  onSelectGroup: (string) => any,
  showSidebar: boolean,
  onToggleSidebar: () => any,
};

const mapStateToProps = (state: State) => ({
  auth: state.auth,
  calendarEvents: _.values(state.calendarEvents),
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

const enhance: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps);

function App({
  calendarEvents,
  auth,
  onBookRoom,
  onAuthorizeClick,
  selectedGroup,
  onSelectGroup,
  showSidebar,
  onToggleSidebar,
}: Props) {
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

export default enhance(App);
