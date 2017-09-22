import reducer, { TOGGLE_SIDEBAR, toggleSidebar } from './sidebar';

describe('actions', () => {
  it('should create an action to toggle the sidebar', () => {
    expect(toggleSidebar()).toEqual({ type: TOGGLE_SIDEBAR });
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  it('should handle TOGGLE_SIDEBAR', () => {
    expect(reducer(false, { type: TOGGLE_SIDEBAR })).toEqual(true);
  });
});
