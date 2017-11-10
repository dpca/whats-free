// @flow

import React from 'react';
import _ from 'lodash';
import type { CalendarEvent } from '../types';

type Props = {
  event: CalendarEvent,
};

function attendeeName(attendee) {
  return attendee.displayName || attendee.email;
}

function Attendees({ event }: Props) {
  const realAttendees = _.reject(
    event.attendees,
    attendee =>
      attendee.resource === true || attendee.responseStatus === 'declined'
  );
  if (realAttendees.length > 2) {
    return (
      <span>
        ({attendeeName(realAttendees[0])} and {realAttendees.length - 1} others)
      </span>
    );
  } else if (realAttendees.length === 2) {
    return <span> ({attendeeName(realAttendees[0])} and 1 other)</span>;
  } else if (realAttendees.length === 1) {
    return <span> ({attendeeName(realAttendees[0])})</span>;
  }
  return null;
}

export default Attendees;
