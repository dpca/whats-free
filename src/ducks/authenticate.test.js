import reducer, { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, authRequest, authSuccess, authFailure } from './authenticate';

describe('actions', () => {
  it('should create an action to request authentication', () => {
    expect(authRequest()).toEqual({ type: AUTH_REQUEST });
  });

  it('should create an action to signal successful authentication', () => {
    expect(authSuccess()).toEqual({ type: AUTH_SUCCESS });
  });

  it('should create an action to signal failed authentication', () => {
    expect(authFailure()).toEqual({ type: AUTH_FAILURE });
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      requesting: false,
      success: false,
      error: null,
    });
  });
});
