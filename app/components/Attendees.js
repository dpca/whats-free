import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Attendees extends Component {
  attendeeName(attendee) {
    return attendee.displayName || attendee.email;
  }

  render() {
    const { event } = this.props;
    const realAttendees = _.filter(event.attendees, (attendee) =>
      attendee.resource !== true && attendee.responseStatus !== 'declined');
    if (realAttendees.length > 2) {
      return <span>({this.attendeeName(realAttendees[0])} and {realAttendees.length - 1} others)</span>;
    } else if (realAttendees.length === 2) {
      return <span>({this.attendeeName(realAttendees[0])} and 1 other)</span>;
    } else if (realAttendees.length === 1) {
      return <span>({this.attendeeName(realAttendees[0])})</span>;
    }
    return null;
  }
}

Attendees.propTypes = {
  event: PropTypes.shape({
    attendees: PropTypes.array.isRequired
  }).isRequired
}

export default Attendees;
