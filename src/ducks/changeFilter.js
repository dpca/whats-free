// @flow

import type { Action } from '../types';

// Actions

export const CHANGE_FILTER = 'CHANGE_FILTER';

// Reducer

export type State = string;

const initialState = 'all';

export default function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.group;
    default:
      return state;
  }
}

// Action Creators

export function changeFilter(group: string) {
  return {
    type: CHANGE_FILTER,
    group,
  };
}
