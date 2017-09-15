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

  it('should handle AUTH_REQUEST', () => {
    expect(reducer({
      requesting: false,
      success: false,
      error: null,
    }, { type: AUTH_REQUEST })).toEqual({
      requesting: true,
      success: false,
      error: null,
    });
  });

  it('should handle AUTH_SUCCESS', () => {
    expect(reducer({
      requesting: true,
      success: false,
      error: null,
    }, { type: AUTH_SUCCESS })).toEqual({
      requesting: false,
      success: true,
      error: null,
    });
  });

  it('should handle AUTH_FAILURE', () => {
    expect(reducer({
      requesting: true,
      success: false,
      error: null,
    }, { type: AUTH_FAILURE, error: 'oops' })).toEqual({
      requesting: false,
      success: false,
      error: 'oops',
    });
  });
});
