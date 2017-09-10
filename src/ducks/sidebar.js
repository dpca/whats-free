// @flow

import type { Action } from '../types';

// Actions

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Reducer

export type State = boolean;

export default function reducer(state: State = false, action: Action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
}

// Action Creators

export function toggleSidebar() {
  return { type: TOGGLE_SIDEBAR };
}
