// @flow

import _ from 'lodash';
import React from 'react';
import CalendarList from './CalendarList';
import type { Calendar } from '../types';

type Props = {
  calendarEvents: Calendar[],
  onBookRoom: Function,
  selectedGroup: string,
  onSelectGroup: (string) => void,
};

function filterCalendars(calendarEvents, selectedGroup) {
  if (selectedGroup === 'all') {
    return calendarEvents;
  }
  return _.filter(calendarEvents, ({ group }) => group === selectedGroup);
}

function Body({ calendarEvents, onBookRoom, selectedGroup, onSelectGroup }: Props) {
  return (
    <div className="row">
      <div className="col-md-3 col-lg-2 sidebar bg-light d-none d-md-block">
        <select className="form-control" onChange={(event) => onSelectGroup(event.target.value)}>
          <option value="all">
            Show all
          </option>
          {
            _.map(_.uniq(_.map(calendarEvents, 'group')), (group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))
          }
        </select>
        <br />
        <h5>
          Legend:
        </h5>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success">
            Free
          </li>
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
