// @flow

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { withRouter } from 'react-router';
import type { RouterHistory, Location } from 'react-router';
import { authRequest, authLogout } from '../ducks/authenticate';
import { toggleSidebar } from '../ducks/sidebar';
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
  onLogout: () => any,
  showSidebar: boolean,
  onToggleSidebar: () => any,
  history: RouterHistory,
  location: Location,
};

const mapStateToProps = (state: State) => ({
  auth: state.auth,
  calendarEvents: _.values(state.calendarEvents),
  showSidebar: state.showSidebar,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAuthorizeClick: () => dispatch(authRequest()),
  onLogout: () => dispatch(authLogout()),
  onBookRoom: (calendarId, calendarName, summary, start, end) =>
    dispatch(bookRoom(calendarId, calendarName, summary, start, end)),
  onToggleSidebar: () => dispatch(toggleSidebar()),
});

const enhance: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export function App({
  calendarEvents,
  auth,
  onBookRoom,
  onAuthorizeClick,
  onLogout,
  showSidebar,
  onToggleSidebar,
  history,
  location,
}: Props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="navbar-brand">{"What's free?"}</div>
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={onToggleSidebar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="navbar-nav ml-auto">
          {
            auth.success &&
              <li>
                <button
                  className="btn my-2 my-sm-0"
                  onClick={() => onLogout()}
                >
                  Sign out
                </button>
              </li>
          }
        </ul>
      </nav>
      {auth.success ? (
        <Body
          calendarEvents={calendarEvents}
          onBookRoom={onBookRoom}
          showSidebar={showSidebar}
          history={history}
          location={location}
        />
      ) : (
        <Authenticate onClick={onAuthorizeClick} error={auth.error} />
      )}
    </div>
  );
}

export default withRouter(enhance(App));
