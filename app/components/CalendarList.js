import _ from 'lodash';
import React, { PropTypes } from 'react';

import CalendarItem from './CalendarItem';

const CalendarList = ({ calendarEvents }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Room</td>
          <td>Next meeting</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {
          _.map(calendarEvents, (events, calendarName) => {
            if (events.length > 0) {
              return <CalendarItem key={calendarName} calendarName={calendarName} events={events} />
            } else {
              return null
            }
          })
        }
      </tbody>
    </table>
  );
}

export default CalendarList;
