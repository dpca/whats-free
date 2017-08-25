// @flow

import React from 'react';
import CalendarList from './CalendarList';
import type { Calendar } from '../types';

type Props = {
  calendarEvents: Calendar[],
  onBookRoom: Function,
};

function Body({ calendarEvents, onBookRoom }: Props) {
  return (
    <div className="row">
      <div className="col-sm-3 col-md-2 sidebar bg-light d-none d-sm-block">
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
      <div className="col-sm-9 col-md-10 ml-sm-auto main">
        <CalendarList calendarEvents={calendarEvents} onBookRoom={onBookRoom} />
      </div>
    </div>
  );
}

export default Body;
