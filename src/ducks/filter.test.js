import reducer, { CHANGE_FILTER, changeFilter } from './filter';

describe('actions', () => {
  it('should create an action to signal the filter being changed', () => {
    expect(changeFilter('newGroup')).toEqual({
      type: CHANGE_FILTER,
      group: 'newGroup',
    });
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('all');
  });

  it('should handle CHANGE_FILTER', () => {
    expect(reducer('oldGroup', { type: CHANGE_FILTER, group: 'newGroup' })).toEqual('newGroup');
  });
});
