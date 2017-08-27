// @flow

import { TOGGLE_SIDEBAR } from '../actions';
import type { Action } from '../actions';

export type State = boolean;

export default function toggleSidebar(state: State = false, action: Action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
}
