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
    const event = this.props.calendar.events[0];
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
    const event = this.props.calendar.events[0];
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
    return _.find(this.props.calendar.events, (event) =>
      new Date(event.start.dateTime) > new Date()
    );
  }

  render() {
    const { calendar, onBookRoom } = this.props;
    const padded = { paddingTop: 5, paddingBottom: 5 };

    return (
      <div className={`list-group-item row ${this.rowClass()}`}>
        <div className="col-sm-2">
          <div style={padded}>
            {calendar.name}
          </div>
        </div>
        <div className="col-sm-5">
          <div style={padded}>
            <CurrentMeeting
              calendarId={calendar.id}
              calendarName={calendar.name}
              event={this.currentMeeting()}
              onBookRoom={onBookRoom}
              loading={calendar.loading}
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

CalendarItem.propTypes = {
  calendar: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(React.PropTypes.shape({
      start: PropTypes.shape({ dateTime: PropTypes.string.isRequired }),
      end: PropTypes.shape({ dateTime: PropTypes.string.isRequired }),
    })),
  }).isRequired
}

export default CalendarItem;
