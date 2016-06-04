import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import moment from 'moment';

import CurrentMeeting from './CurrentMeeting';
import MeetingDisplay from './MeetingDisplay';
import Time from './Time';

class CalendarItem extends Component {
  nextStatus() {
    const nextMeeting = this.nextMeeting();
    if (nextMeeting) {
      return <MeetingDisplay event={nextMeeting} />
    }
    return null;
  }

  rowClass() {
    const event = this.props.events[0];
    if (event) {
      const eventStart = new Date(event.start.dateTime);
      const now = new Date();
      if (eventStart < now) {
        return 'list-group-item-danger';
      } else if (eventStart - now < 3600000) {
        // within the hour
        return 'list-group-item-warning';
      } else {
        return 'list-group-item-success';
      }
    } else {
      return 'list-group-item-success';
    }
  }

  currentMeeting() {
    const event = this.props.events[0];
    if (event) {
      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);
      const now = new Date();
      if (eventStart < now && now < eventEnd) {
        return event;
      }
    }
    return null;
  }

  nextMeeting() {
    return _.find(this.props.events, (event) =>
      new Date(event.start.dateTime) > new Date()
    );
  }

  render() {
    const { calendarId, calendarName, events, onBookRoom } = this.props;
    const padded = { paddingTop: 5, paddingBottom: 5 };

    return (
      <div className={`list-group-item row ${this.rowClass()}`}>
        <div className="col-sm-2">
          <div style={padded}>
            {calendarName}
          </div>
        </div>
        <div className="col-sm-5">
          <div style={padded}>
            <CurrentMeeting
              calendarId={calendarId}
              calendarName={calendarName}
              event={this.currentMeeting()}
              onBookRoom={onBookRoom}
            />
          </div>
        </div>
        <div className="col-sm-5">
          <div style={padded}>
            {this.nextStatus()}
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarItem;
