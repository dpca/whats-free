import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';

const initialState = {
  requesting: false,
  success: false,
  error: null,
};

export default function authenticate(state = initialState, action) {
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
