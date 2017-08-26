// @flow

import { CHANGE_FILTER } from '../actions';
import type { Action } from '../actions';

export type State = string;

const initialState = 'all';

export default function changeFilter(state: State = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.group;
    default:
      return state;
  }
}
