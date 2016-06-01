import _ from 'lodash';
import React, { PropTypes } from 'react';

import CalendarItem from './CalendarItem';

const CalendarList = ({ calendarEvents }) => {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="list-group-item row hidden-xs">
          <div className="col-sm-2">Room</div>
          <div className="col-sm-5">Status</div>
          <div className="col-sm-5">Next meeting</div>
        </div>
        {
          _.map(calendarEvents, (events, calendarName) => {
            return <CalendarItem key={calendarName} calendarName={calendarName} events={events} />;
          })
        }
      </div>
    </div>
  )
}

export default CalendarList;
