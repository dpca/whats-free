import reducer, { CALENDAR_UPDATED, calendarUpdated } from './calendar';

const fakeCalendar = {
  kind: 'calendar#event',
  id: 'fakeId',
  name: 'fakeName',
  group: 'fakeGroup',
  events: [],
  loading: false,
};

describe('actions', () => {
  it('should create an action to signal a calendar being updated', () => {
    expect(calendarUpdated('calId', 'calName', [])).toEqual({
      type: CALENDAR_UPDATED,
      calendarId: 'calId',
      calendarName: 'calName',
      nextEvents: [],
    });
  });
});

describe('reducer', () => {
  it('should handle CALENDAR_UPDATED', () => {
    expect(reducer({ fakeId: fakeCalendar }, {
      type: CALENDAR_UPDATED,
      calendarId: 'fakeId',
      calendarName: 'fakeName',
      nextEvents: ['fakeEvent'],
    })).toEqual({
      fakeId: {
        ...fakeCalendar,
        events: ['fakeEvent'],
      },
    });
  });
});
