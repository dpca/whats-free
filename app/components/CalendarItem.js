import React, { PropTypes } from 'react';
import moment from 'moment';

const CalendarItem = ({ calendarName, events }) => {
  const closestEvent = events[0];
  const distance = new Date(closestEvent.start.dateTime) - new Date()
  let className = '';
  if (distance < 1800000) {
    className += 'danger';
  } else if (distance < 3600000) {
    className += 'warning';
  } else {
    className += 'success';
  }
  console.log(closestEvent);
  return (
    <tr key={calendarName} className={className}>
      <td>{calendarName}</td>
      <td>{moment(closestEvent.start.dateTime).fromNow()}</td>
      <td>{closestEvent.summary}</td>
    </tr>
  )
}

export default CalendarItem;
