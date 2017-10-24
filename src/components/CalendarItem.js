// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import CurrentMeeting from './CurrentMeeting';
import MeetingDisplay from './MeetingDisplay';
import type { Calendar } from '../types';

type Props = {
  calendar: Calendar,
  onBookRoom: Function,
};

class CalendarItem extends Component<Props> {
  nextStatus() {
    const nextMeeting = this.nextMeeting();
    if (nextMeeting) {
      return <MeetingDisplay event={nextMeeting} isFuture />;
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
      }
      return 'list-group-item-success';
    }
    return 'list-group-item-success';
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
    return _.find(
      this.props.calendar.events,
      (event) => new Date(event.start.dateTime) > new Date(),
    );
  }

  render() {
    const { calendar, onBookRoom } = this.props;

    return (
      <li className={`CalendarItem row ${this.rowClass()}`}>
        <div className="col-lg-2">
          <div className="Meeting">
            <a
              href={`https://calendar.google.com/calendar/embed?mode=WEEK&src=${calendar.id}`}
              target="_blank"
              className="RoomLink"
            >
              {calendar.name}
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div>
            <CurrentMeeting
              calendarId={calendar.id}
              calendarName={calendar.name}
              event={this.currentMeeting()}
              onBookRoom={onBookRoom}
              loading={calendar.loading}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div>
            {this.nextStatus()}
          </div>
        </div>
      </li>
    );
  }
}

export default CalendarItem;
