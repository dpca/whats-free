// @flow

import React from 'react';
import MeetingDisplay from './MeetingDisplay';
import type { CalendarEvent } from '../types';

type Props = {
  event: ?CalendarEvent,
  loading: boolean,
  // the following are needed to enable room booking, which is disabled for now
  calendarId: string,
  calendarName: string,
  onBookRoom: Function,
};

const Free = (
  <div>
    Free
  </div>
);

// function bookRoom({ calendarId, calendarName, onBookRoom }) {
//   onBookRoom(
//     calendarId,
//     calendarName,
//     'Dev testing, please ignore',
//     moment(),
//     moment().add(1, 'hour'),
//   );
// }

function CurrentMeeting({ event, loading }: Props) {
  if (event) {
    return <MeetingDisplay event={event} />;
  } else if (loading) {
    return <div>Loading...</div>;
  }
  return Free;
}

export default CurrentMeeting;
