import React, { Component, PropTypes } from 'react';

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

  render() {
    const { event } = this.props;
    return (
      <div>
        {this.summaryDisplay(event)}
        <Attendees event={event} />
        , ending <Time time={new Date(event.end.dateTime) } />
      </div>
    );
  }
}

MeetingDisplay.propTypes = {
  event: PropTypes.object.isRequired
};

export default MeetingDisplay;
