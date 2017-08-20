// @flow

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';
import type { Action } from '../actions.js';

export type State = {
  requesting: boolean,
  success: boolean,
  error: ?string,
};

const initialState = {
  requesting: false,
  success: false,
  error: null,
};

export default function authenticate(state: State = initialState, action: Action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, requesting: true };
    case AUTH_SUCCESS:
      return { success: true, error: null, requesting: false };
    case AUTH_FAILURE:
      return { success: false, error: action.error, requesting: false };
    default:
      return state;
  }
}
