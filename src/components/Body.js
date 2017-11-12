// @flow

import _ from 'lodash';
import React from 'react';
import type { RouterHistory, Location } from 'react-router';
import CalendarList from './CalendarList';
import type { Calendar } from '../types';

type Props = {
  calendarEvents: Calendar[],
  onBookRoom: Function,
  showSidebar: boolean,
  history: RouterHistory,
  location: Location,
};

function filterCalendars(calendarEvents, selectedGroup) {
  if (selectedGroup === 'all') {
    return calendarEvents;
  }
  return _.filter(calendarEvents, ({ group }) => group === selectedGroup);
}

function Body({
  calendarEvents,
  onBookRoom,
  showSidebar,
  history,
  location,
}: Props) {
  const selectedGroup =
    location && location.pathname && location.pathname.length > 1
      ? decodeURIComponent(location.pathname.slice(1))
      : 'all';
  return (
    <div className="row">
      <div
        className={`col-md-3 col-lg-2 sidebar bg-light d-md-block ${
          showSidebar ? '' : 'd-none'
        }`}
      >
        <select
          className="form-control"
          value={selectedGroup}
          onChange={event =>
            history.push(encodeURIComponent(event.target.value))
          }
        >
          <option value="all">Show all</option>
          {_.map(_.uniq(_.map(calendarEvents, 'group')), group => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
        <br />
        <h5>Legend:</h5>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success">Free</li>
          <li className="list-group-item list-group-item-warning">
            Reserved within the hour
          </li>
          <li className="list-group-item list-group-item-danger">
            Currently reserved
          </li>
        </ul>
      </div>
      <div className="col-md-9 col-lg-10 ml-md-auto main">
        <CalendarList
          calendarEvents={filterCalendars(calendarEvents, selectedGroup)}
          onBookRoom={onBookRoom}
        />
      </div>
    </div>
  );
}

export default Body;
