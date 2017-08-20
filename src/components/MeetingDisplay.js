import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Attendees from './Attendees';
import Time from './Time';

class MeetingDisplay extends Component {
  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
  }

  summaryDisplay(event) {
    if (event.summary) {
      return this.capitalizeFirstLetter(event.summary);
    }
    return 'Untitled meeting';
  }

  renderTime(event, isFuture) {
    if (isFuture) {
      return <span>starting <Time time={new Date(event.start.dateTime)} /></span>;
    }
    return <span>ending <Time time={new Date(event.end.dateTime)} /></span>;
  }

  render() {
    const { event, isFuture } = this.props;
    return (
      <div>
        {this.summaryDisplay(event)}
        <Attendees event={event} />,&nbsp;
        {this.renderTime(event, isFuture)}
      </div>
    );
  }
}

MeetingDisplay.propTypes = {
  event: PropTypes.object.isRequired,
  isFuture: PropTypes.bool
};

export default MeetingDisplay;
