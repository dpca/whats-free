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
    <div>
      <div className="row CalendarItem">
        <div className="col-lg-2">
          <h4>Room</h4>
        </div>
        <div className="col-lg-5">
          <h4>Status</h4>
        </div>
        <div className="col-lg-5">
          <h4>Next meeting</h4>
        </div>
      </div>
      <ul className="list-unstyled">
        {_.map(calendarEvents, (cal, id) => (
          <CalendarItem key={id} calendar={cal} onBookRoom={onBookRoom} />
        ))}
      </ul>
    </div>
  );
}

export default CalendarList;
