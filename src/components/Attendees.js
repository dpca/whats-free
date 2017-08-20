import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function attendeeName(attendee) {
  return attendee.displayName || attendee.email;
}

function Attendees({ event }) {
  const realAttendees = _.filter(event.attendees, (attendee) =>
    attendee.resource !== true && attendee.responseStatus !== 'declined');
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

Attendees.propTypes = {
  event: PropTypes.shape({
    attendees: PropTypes.array.isRequired,
  }).isRequired,
};

export default Attendees;
