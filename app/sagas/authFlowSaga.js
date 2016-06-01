import { delay } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import { AUTH_REQUEST, authSuccess, authFailure } from '../actions';

function checkAuth(immediate) {
  return gapi.auth.authorize({
    client_id: process.env.CLIENT_ID,
    scope: 'https://www.googleapis.com/auth/calendar',
    immediate
  });
}

function loadCalendarApi() {
  return gapi.client.load('calendar', 'v3');
}

function* handleAuth(authResult) {
  if (authResult.error) {
    return yield put(authFailure(authResult.error));
  } else {
    yield call(loadCalendarApi);
    return yield put(authSuccess());
  }
}

export default function* authFlowSaga() {
  // wait for gapi to load from google
  let gapiLoading = true;
  while (gapiLoading) {
    if (gapi && gapi.auth && gapi.auth.authorize) {
      gapiLoading = false;
    } else {
      yield delay(1000);
    }
  }

  // try to authenticate on page load
  try {
    let authResult = yield call(checkAuth, true);
    if (authResult) {
      yield* handleAuth(authResult);
    }
  } catch (e) {
    yield put(authFailure('Could not authenticate'));
  }

  while (true) {
    try {
      yield take(AUTH_REQUEST);
      let authResult = yield call(checkAuth, false);
      if (authResult) {
        yield* handleAuth(authResult);
      }
    } catch (e) {
      yield put(authFailure(e));
    }
  }
}

