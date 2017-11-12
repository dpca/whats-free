import { delay } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import {
  AUTH_REQUEST,
  AUTH_LOGOUT,
  authSuccess,
  authFailure,
} from '../ducks/authenticate';

const gapi = window.gapi;

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

function initClient() {
  return gapi.client.init({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES,
  });
}

function loadCalendarApi() {
  return new Promise(resolve => gapi.load('client:auth2', resolve));
}

function signIn() {
  return gapi.auth2.getAuthInstance().signIn();
}

function signOut() {
  return gapi.auth2.getAuthInstance().signOut();
}

function* handleAuth(authResult, err) {
  if (authResult) {
    return yield put(authSuccess());
  }
  return yield put(authFailure(err));
}

function isSignedIn() {
  return gapi.auth2.getAuthInstance().isSignedIn.get();
}

export default function* authFlowSaga() {
  // wait for gapi to load from google
  let gapiLoading = true;
  while (gapiLoading) {
    if (gapi) {
      yield call(loadCalendarApi);
      yield call(initClient);
      gapiLoading = false;
    } else {
      yield delay(1000);
    }
  }

  yield* handleAuth(
    isSignedIn(),
    'Could not automatically authenticate. Please click the button above to login.'
  );

  while (true) {
    const { type } = yield take([AUTH_REQUEST, AUTH_LOGOUT]);
    if (type === AUTH_REQUEST) {
      yield call(signIn);
      yield* handleAuth(
        isSignedIn(),
        'Authentication failed, please try again.'
      );
    } else if (type === AUTH_LOGOUT) {
      yield call(signOut);
      yield* handleAuth(isSignedIn());
    }
  }
}
