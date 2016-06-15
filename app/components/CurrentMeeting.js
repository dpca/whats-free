import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import MeetingDisplay from './MeetingDisplay';

class CurrentMeeting extends Component {
  constructor() {
    super();
    this.bookRoom = this.bookRoom.bind(this);
  }

  bookRoom() {
    const { calendarId, calendarName, onBookRoom } = this.props;
    onBookRoom(calendarId,
               calendarName,
               'Dev testing, please ignore',
               moment(),
               moment().add(1, 'hour'));
  }

  renderFree() {
    return (
      <div>
        Free
      </div>
    );
  }

  render() {
    const { event, loading } = this.props;
    if (event) {
      return <MeetingDisplay event={event} />;
    } else if (loading) {
      return <div>Loading...</div>;
    }
    return this.renderFree();
  }
}

CurrentMeeting.propTypes = {
  event: PropTypes.shape({
    start: PropTypes.shape({ dateTime: PropTypes.string.isRequired }).isRequired,
    end: PropTypes.shape({ dateTime: PropTypes.string.isRequired }).isRequired,
  }),
  calendarId: PropTypes.string.isRequired,
  calendarName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onBookRoom: PropTypes.func.isRequired,
};

export default CurrentMeeting;
