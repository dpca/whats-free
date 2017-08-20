import React from 'react';
import PropTypes from 'prop-types';

import Attendees from './Attendees';
import Time from './Time';

function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

function summaryDisplay(event) {
  if (event.summary) {
    return capitalizeFirstLetter(event.summary);
  }
  return 'Untitled meeting';
}

function renderTime(event, isFuture) {
  if (isFuture) {
    return <span>starting <Time time={new Date(event.start.dateTime)} /></span>;
  }
  return <span>ending <Time time={new Date(event.end.dateTime)} /></span>;
}

function MeetingDisplay({ event, isFuture }) {
  return (
    <div>
      {summaryDisplay(event)}
      <Attendees event={event} />,&nbsp;
      {renderTime(event, isFuture)}
    </div>
  );
}

MeetingDisplay.propTypes = {
  event: PropTypes.object.isRequired,
  isFuture: PropTypes.bool,
};

export default MeetingDisplay;
