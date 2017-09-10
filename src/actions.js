// @flow

export const BOOK_ROOM = 'BOOK_ROOM';
export const ROOM_BOOKED = 'ROOM_BOOKED';

export type BookRoom = {|
  type: 'BOOK_ROOM',
  calendarId: string,
  calendarName: string,
  summary: string,
  start: string,
  end: string,
|};
export function bookRoom(
  calendarId: string,
  calendarName: string,
  summary: string,
  start: string,
  end: string,
): BookRoom {
  return {
    type: BOOK_ROOM,
    calendarId,
    calendarName,
    summary,
    start,
    end,
  };
}

export type RoomBooked = {|
  type: 'ROOM_BOOKED',
  calendarId: string,
|};
export function roomBooked(calendarId: string): RoomBooked {
  return {
    type: ROOM_BOOKED,
    calendarId,
  };
}
