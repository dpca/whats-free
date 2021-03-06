// @flow

import type { Action } from '../types';

// Actions

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Reducer

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

export default function reducer(state: State = initialState, action: Action) {
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

// Action Creators

export function authRequest() {
  return { type: AUTH_REQUEST };
}

export function authSuccess() {
  return { type: AUTH_SUCCESS };
}

export function authFailure(error: ?string) {
  return { type: AUTH_FAILURE, error };
}

export function authLogout() {
  return { type: AUTH_LOGOUT };
}
