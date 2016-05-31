import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import moment from 'moment';

class CalendarItem extends Component {
  meetingDistance(event) {
    return new Date(event.start.dateTime) - new Date()
  }

  meetingTimeDisplay(event) {
    if (this.meetingDistance(event) < 0) {
      return `occupied, ending ${moment(event.end.dateTime).fromNow()}`
    } else {
      return moment(event.start.dateTime).fromNow()
    }
  }

  rowClass(event) {
    if (this.meetingDistance(event) < 0) {
      return 'danger';
    } else if (this.meetingDistance(event) < 3600000) {
      return 'warning';
    } else {
      return 'success';
    }
  }

  attendees(event) {
    return _.filter(event.attendees, (attendee) => {
      return attendee['resource'] !== true && attendee['responseStatus'] !== 'declined';
    });
  }

  attendeeName(attendee) {
    return attendee.displayName || attendee.email;
  }

  attendeeDisplay(event) {
    const realAttendees = this.attendees(event);
    if (realAttendees.length > 2) {
      return `(${this.attendeeName(realAttendees[0])} and ${realAttendees[0].length} others)`;
    } else if (realAttendees.length === 2) {
      return `(${this.attendeeName(realAttendees[0])} and 1 other)`;
    } else if (realAttendees.length === 1) {
      return `(${this.attendeeName(realAttendees[0])})`;
    } else {
      return '';
    }
  }

  maybeDisplayNext(thisEvent, nextEvent) {
    if (this.meetingDistance(thisEvent) < 0) {
      return <div>next meeting {this.meetingTimeDisplay(nextEvent)}</div>
    } else {
      return null
    }
  }

  render() {
    const { calendarName, events } = this.props;
    const [closestEvent, nextEvent, ...rest] = events;

    return (
      <tr key={calendarName} className={this.rowClass(closestEvent)}>
        <td>{calendarName}</td>
        <td>
          <div>{this.meetingTimeDisplay(closestEvent)}</div>
          { this.maybeDisplayNext(closestEvent, nextEvent) }
        </td>
        <td>{closestEvent.summary} {this.attendeeDisplay(closestEvent)}</td>
      </tr>
    )
  }
}

export default CalendarItem;
