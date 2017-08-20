// @flow

import _ from 'lodash';
import React from 'react';
import CalendarItem from './CalendarItem';
import type { Calendar } from '../types';

type Props = {
  calendarEvents: Calendar[],
  onBookRoom: Function,
};

function CalendarList({ calendarEvents, onBookRoom }: Props) {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="list-group-item row hidden-xs">
          <div className="col-sm-2">Room</div>
          <div className="col-sm-5">Status</div>
          <div className="col-sm-5">Next meeting</div>
        </div>
        {
          _.map(calendarEvents, (cal, id) => (
            <CalendarItem key={id} calendar={cal} onBookRoom={onBookRoom} />
          ))
        }
      </div>
    </div>
  );
}

export default CalendarList;
