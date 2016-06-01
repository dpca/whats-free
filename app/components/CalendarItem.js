import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import moment from 'moment';
import Time from './Time';

class CalendarItem extends Component {
  meetingDisplay(event) {
    if (event) {
      return (
        `${this.summaryDisplay(event)} ${this.attendeeDisplay(event)}`
      )
    } else {
      return null
    }
  }

  summaryDisplay(event) {
    if (event.summary) {
      return this.capitalizeFirstLetter(event.summary);
    } else {
      return 'Untitled meeting';
    }
  }

  currentStatus(event) {
    if (event) {
      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);
      const now = new Date();
      if (eventStart < now && now < eventEnd) {
        return (
          <div>
            {this.meetingDisplay(event)}, ending <Time time={eventEnd} />
          </div>
        )
      } else {
        return this.renderFree();
      }
    } else {
      return this.renderFree();
    }
  }

  bookRoom() {
    const { calendarId, calendarName, onBookRoom } = this.props;
    onBookRoom(calendarId, calendarName, 'Dev testing, please ignore', moment(), moment().add(1, 'hour'));
  }

  renderFree() {
    const { calendarId, calendarName } = this.props;
    return (
      <div>
        Free
        &nbsp;
        &nbsp;
        <button className="btn btn-xs btn-default" onClick={this.bookRoom.bind(this)}>
          Book room
        </button>
      </div>
    );
  }

  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string
    }
  }

  nextStatus(event, nextEvent) {
    if (event) {
      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);
      const now = new Date();
      if (eventStart > now) {
        return (
          <div>
            {this.meetingDisplay(event)}, <Time time={eventStart} />
          </div>
        )
      } else if (nextEvent) {
        return (
          <div>
            {this.meetingDisplay(nextEvent)}, <Time time={nextEvent.start.dateTime} />
          </div>
        )
      } else {
        return null
      }
    } else {
      return null
    }
  }

  rowClass(event) {
    if (event) {
      const eventStart = new Date(event.start.dateTime);
      const now = new Date();
      if (eventStart < now) {
        return 'list-group-item-danger';
      } else if (eventStart - now < 3600000) {
        return 'list-group-item-warning';
      } else {
        return 'list-group-item-success';
      }
    } else {
      return 'list-group-item-success';
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
      return `(${this.attendeeName(realAttendees[0])} and ${realAttendees.length - 1} others)`;
    } else if (realAttendees.length === 2) {
      return `(${this.attendeeName(realAttendees[0])} and 1 other)`;
    } else if (realAttendees.length === 1) {
      return `(${this.attendeeName(realAttendees[0])})`;
    } else {
      return '';
    }
  }

  render() {
    const { calendarName, events } = this.props;
    const [closestEvent, nextEvent, ...rest] = events;
    const padded = { paddingTop: 5, paddingBottom: 5 };

    return (
      <div className={`list-group-item row ${this.rowClass(closestEvent)}`}>
        <div className="col-sm-2">
          <div style={padded}>
            {calendarName}
          </div>
        </div>
        <div className="col-sm-5">
          <div style={padded}>
            {this.currentStatus(closestEvent)}
          </div>
        </div>
        <div className="col-sm-5">
          <div style={padded}>
            {this.nextStatus(closestEvent, nextEvent)}
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarItem;
